// src/controllers/leaderboard-controller.ts
import { Request, Response } from 'express';
import prisma from '../config/prisma';

export default {
    //tenta pegar o leaderboard. Se conseguir, retorna o leaderboard inteiro. Senão da erro.
    //Preciso melhorar ela se eu quiser fazer paginação
  async getLeaderboard(req: Request, res: Response) {
    try {
      const users = await prisma.usuario.findMany({
        select: {
          fullname: true,
          totalPoints: true,
          createdAt: true,
        },
        orderBy: {
          totalPoints: 'desc', // Ordena por pontos (maior → menor)
        },
      });

      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar leaderboard:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  },
};
