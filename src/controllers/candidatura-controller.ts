import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { CandidaturaSchema } from '../schemas/candidatura-schemas';
import { error } from 'console';

export default {
  async candidatar(req: Request, res: Response) {
    try {
      // Verifica se o usuário está autenticado. Caso nao, não é permitido se candidatar
      if (!req.user?.id) {
        res.status(401).json({ error: "Não autorizado" });
        return
      }

      //faz a validação dos dados da candidatura
      const result = CandidaturaSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ errors: result.error.format() });
        return
      }

      //pega id da vaga no result = req.body e passa pra 
      const { vagaID } = result.data;

      console.log('=== DEBUG CANDIDATURA ===');
      console.log('Environment:', process.env.NODE_ENV);
      console.log('VagaID recebido:', vagaID);
      console.log('Tipo do vagaID:', typeof vagaID);
      console.log('Length do vagaID:', vagaID?.length);
      console.log('UserID:', req.user.id);

       console.log('Procurando vaga com ID:', vagaID);

      // Verifica se a vaga existe usando vagaID
      const vaga = await prisma.vagas.findUnique({
        where: { id: vagaID }
      });

      //se não achou, retorna erro
      if (!vaga) {
        res.status(404).json({ error: "Vaga não encontrada" });
        return
      }

      //Se achou,  Cria a candidatura na tabela de usuarioVagas
      const candidatura = await prisma.usuarioVagas.create({
        data: {
          userID: req.user.id,
          vagaID: vagaID,
          status: "Pendente"
        },
        include: {
          vaga: true
        }
      });

    res.status(201).json(candidatura);
    return

    } catch (error) {
      console.error('Erro na candidatura:', error);
      
      // Erro de candidatura duplicada
      if (error.code === 'P2002') {
        res.status(409).json({ error: "Você já se candidatou a esta vaga" });
        return
      }

        res.status(500).json({ error: "Erro ao processar candidatura" });
        return
    }
  },

  //funcao de ver as vagas as quais o usuario se candidatou
  async minhasCandidaturas(req: Request, res: Response) {
    try {
        //sem login não pode ver as candidaturas
      if (!req.user?.id) {
        res.status(401).json({ error: "Não autorizado" });
        return
      }

      //logado vai procurar todas as candidaturas
      const candidaturas = await prisma.usuarioVagas.findMany({
        //com a condição de serem suas, então usa teu proprio id pra procurar
        where: { userID: req.user.id },
        //daí tem que procurar na outra tabela também (Vagas)
        include: {
          vaga: {
            select: {
              id: true,
              title: true,
              type: true,
              description: true,
              status: true
            }
          }
        },
        orderBy: {
          // trocar createdAt: 'desc'
        }
      });

      //se deu tudo certo é esse fluxo
        res.json(candidaturas);
        return

      //deu merda vem pra esse
    } catch (error) {
      console.error('Erro ao buscar candidaturas:', error);
      res.status(500).json({ error: "Erro ao buscar candidaturas" });
      return
    }
  },

  async listarTodas(req: Request, res: Response) {
  try {
    const todasCandidaturas = await prisma.vagas.findMany({
      include: {
        candidaturas: {
          include: {
            usuario: {
              select: {username: true, fullname: true, id: true}
            }
          }
        }
      }
      
    });
    res.status(200).json(todasCandidaturas);
    return 
  } catch (error) {
    console.error("Erro ao listar todas as candidaturas:", error);
    res.status(500).json({ error: "Erro ao listar todas as candidaturas" });
    return 
  }
},


  //funcao deletar 1 vaga especifica
  async deletar(req: Request, res: Response) {
    try {
      const candidaturaID = req.params.id;

      if (!req.user?.id) {
        res.status(401).json({ error: "Não logado" });
        return
      }

      // Verifica se a candidatura existe e pertence ao usuário
      const candidatura = await prisma.usuarioVagas.findUnique({
        where: { id: candidaturaID },
      });

      if (!candidatura || candidatura.userID !== req.user.id) {
        res.status(404).json({ error: "Candidatura não encontrada ou não pertence a você" });
        return
      }

      // Deleta a candidatura
      await prisma.usuarioVagas.delete({
        where: { id: candidaturaID },
      });

      res.status(200).json({ message: "Candidatura excluída com sucesso" });
      return

    } catch (error) {
      console.error("Erro ao deletar candidatura:", error);
      res.status(500).json({ error: "Erro interno ao deletar candidatura" });
      return
    }
  },

  // Adicione esta função no candidatura-controller.ts

async aprovarCandidatura(req: Request, res: Response) {
  try {
    const { candidaturaId } = req.params;

    // Verifica se o usuário é admin
    if (!req.user?.isAdmin) {
      res.status(403).json({ error: "Acesso negado. Apenas administradores podem aprovar candidaturas." });
      return;
    }

    // Busca a candidatura com informações da vaga e usuário
    const candidatura = await prisma.usuarioVagas.findUnique({
      where: { id: candidaturaId },
      include: {
        vaga: true,
        usuario: true
      }
    });

    if (!candidatura) {
      res.status(404).json({ error: "Candidatura não encontrada" });
      return;
    }

    // Verifica se a vaga ainda está aberta
    if (candidatura.vaga.status !== "Aberta") {
      res.status(400).json({ error: "Esta vaga já foi fechada" });
      return;
    }

    // 1. Aprova a candidatura escolhida
    const candidaturaAprovada = await prisma.usuarioVagas.update({
      where: { id: candidaturaId },
      data: { status: "Aprovado" }
    });

    // 2. Rejeita todas as outras candidaturas da mesma vaga
    await prisma.usuarioVagas.updateMany({
      where: {
        vagaID: candidatura.vagaID,
        id: { not: candidaturaId }
      },
      data: { status: "Rejeitado" }
    });

    // 3. Fecha a vaga
    const vagaFechada = await prisma.vagas.update({
      where: { id: candidatura.vagaID },
      data: { status: "Fechada" }
    });

    // 4. Busca os pontos atuais do usuário
    const usuarioAtual = await prisma.usuario.findUnique({
      where: { id: candidatura.userID },
      select: { totalPoints: true }
    });

    // 5. Adiciona pontos ao usuário aprovado
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: candidatura.userID },
      data: {
        totalPoints: (usuarioAtual?.totalPoints || 0) + candidatura.vaga.rewardPoints
      }
    });

    res.status(200).json({
      message: "Candidatura aprovada com sucesso!",
      data: {
        candidaturaAprovada,
        vagaFechada,
        pontosAdicionados: candidatura.vaga.rewardPoints,
        usuarioAtualizado
      }
    });

  } catch (error) {
    console.error("Erro ao aprovar candidatura:", error);
    res.status(500).json({ error: "Erro interno ao aprovar candidatura" });
  }
}

};