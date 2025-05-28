import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { CandidaturaSchema } from '../schemas/candidatura-schemas';

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
  }
};