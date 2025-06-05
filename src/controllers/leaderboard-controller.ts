// src/controllers/leaderboard-controller.ts
import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { handlePagination } from '../utils/handlePagination';
import { listLeaderboardRequest } from '../types/requests';
import { Prisma } from '@prisma/client';

export default {
    //tenta pegar o leaderboard. Se conseguir, retorna o leaderboard inteiro. Senão da erro.
    //Preciso melhorar ela se eu quiser fazer paginação
  async getLeaderboard(req: listLeaderboardRequest, res: Response) {

    const {page, limit} = req.query
    const {pageNumber, limitNumber, skip} = handlePagination(page, limit)


    try {
      const users = await prisma.usuario.findMany({
        skip,
        take: limitNumber,
        select: {
          fullname: true,
          totalPoints: true,
          createdAt: true,
        },
        orderBy: {
          totalPoints: 'desc', // Ordena por pontos (maior → menor)
        },
      });


      const total = await prisma.usuario.count( );
      res.status(200).json({users, total});
    } catch (error) {
      console.error('Erro ao buscar leaderboard:', error);
      res.status(500).json({ error: 'Erro interno no servidor - Leaderboard' });
    }
  },
};
