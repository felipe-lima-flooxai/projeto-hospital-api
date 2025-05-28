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
       res.status(403).json({ 
        error: "Acesso negado",
        message: "Você só pode editar seu próprio perfil"
      });
      return
    }

    const parseResult = UpdateUserDto.safeParse(req.body);
    if (!parseResult.success) {
       res.status(400).json({ 
        errors: parseResult.error.format() 
      });
      return
    }

    try {
      // Verifica se o usuário existe no prisma e compara com o usuario enviado
      const existingUser = await prisma.usuario.findUnique({
        where: { id: userId }
      });

      if (!existingUser) {
         res.status(404).json({ 
          error: "Usuário não encontrado" 
        });
        return
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
          updatedAt: true,
          scolarity: true,
          cpf: true,
          cep: true,
          isAdmin: true
        }
      });

      //fim do fluxo de sucesso
       res.status(200).json(updatedUser);
       return

      //fluxo erro
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      
      // Tratamento específico para erro de email duplicado
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
         res.status(409).json({ 
          error: "Email já está em uso" 
        });
        return
      }

       res.status(500).json({ 
        error: "Erro interno no servidor" 
      });
      return
    }
  },

    async showUser(req: Request, res: Response) {
        
        const user = await prisma.usuario.findUnique({
            where: {
                id: req.params.id
            }
        })

        if(!user) {
            res.status(404).send({
                message: "user not found"
            })
        }

        res.send(user)
    },

    async removeUser(req: Request, res: Response) {
        
        const user = await prisma.usuario.delete({
            where: {
                id: req.params.id
            }
        })

        if(!user) {
            res.status(404).send({
                message: "user not found so cannot delete"
            })
        }

        res.send(user)
    },

    async showAllUsers(req: Request, res: Response) {
      try {
        const users = await prisma.usuario.findMany();

        res.status(200).json(users);
        return
      } catch (error) {
        console.error('Error on searching all users', error);
        res.status(500).json({ error: 'Server internal error' });
        return
      }
    } 
};

    