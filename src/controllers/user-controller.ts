import { Request, Response, RequestHandler } from 'express';
import prisma from '../config/prisma';
import { UpdateUserDto } from '../schemas/user-schemas';
import bcrypt from 'bcrypt';

export default {
  async updateUser(req: Request, res: Response) {
    const userId = req.params.id;
    const currentUserId = req.user?.id; // ID do usuário logado

    // Verifica se o usuário está editando a si mesmo (ou é admin)
    //acho que fiz a lógica errada, depois preciso refatorar
    if (userId !== currentUserId && !req.user?.isAdmin) {
      return res.status(403).json({ 
        error: "Acesso negado",
        message: "Você só pode editar seu próprio perfil"
      });
    }

    const parseResult = UpdateUserDto.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ 
        errors: parseResult.error.format() 
      });
    }

    try {
      // Verifica se o usuário existe no prisma e compara com o usuario enviado
      const existingUser = await prisma.usuario.findUnique({
        where: { id: userId }
      });

      if (!existingUser) {
        return res.status(404).json({ 
          error: "Usuário não encontrado" 
        });
      }

      // Atualiza os dados lá no prisma
      const updatedUser = await prisma.usuario.update({
        where: { id: userId },
        data: parseResult.data,
        select: { 
          id: true,
          email: true,
          username: true,
          fullname: true,
          profession: true,
          adress: true,
          createdAt: true,
          updatedAt: true
        }
      });

      //fim do fluxo de sucesso
      return res.status(200).json(updatedUser);

      //fluxo erro
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      
      // Tratamento específico para erro de email duplicado
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        return res.status(409).json({ 
          error: "Email já está em uso" 
        });
      }

      return res.status(500).json({ 
        error: "Erro interno no servidor" 
      });
    }
  },

  
  async updatePassword(req: Request, res: Response) {
    const userId = req.params.id;
    const { currentPassword, newPassword } = req.body;

    // Verifica se o usuário está tentando mudar sua própria senha
    if (userId !== req.user?.id) {
      return res.status(403).json({ 
        error: "Acesso negado",
        message: "Você só pode alterar sua própria senha"
      });
    }

    try {
        //procura no banco de dados se o usuario existe
      const user = await prisma.usuario.findUnique({
        where: { id: userId }
      });

      if (!user) {
        return res.status(404).json({ 
          error: "Usuário não encontrado" 
        });
      }

      // Usuario existe. Verifica a senha atual
      const passwordMatch = await bcrypt.compare(currentPassword, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ 
          error: "Senha atual incorreta" 
        });
      }

      // Atualiza a senha para a senha nova.
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      await prisma.usuario.update({
        where: { id: userId },
        data: { password: hashedPassword }
      });

      return res.status(200).json({ 
        message: "Senha atualizada com sucesso" 
      });
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      return res.status(500).json({ 
        error: "Erro interno no servidor" 
      });
    }
  }
};