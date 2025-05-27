import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { CreateVagaDto, UpdateVagaDto } from '../schemas/vaga-schemas';
//vou continuar usando comentários para me organizar. Muito código que eu to me acostumando ainda me deixa perdido

export default {
    //parte do controller que cuida da criação de vagas
  async create(req: Request, res: Response): Promise<void> {
    const result = CreateVagaDto.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    try {
      const vagas = await prisma.vagas.create({
        data: {
          title: result.data.title,
          description: result.data.description,
          type: result.data.type,
          rewardPoints: result.data.rewardPoints,
          taskDate: result.data.taskDate,
          criador: {connect: {id: req.user.id}}
        },
      });
      res.status(201).json(vagas);
    } catch (error) {
      res.status(500).json({ error: "Falha ao criar vagas" });
    }
  },

    //parte do controller que lista as vagas
  async list(req: Request, res: Response) {
    try {
      const vagas = await prisma.vagas.findMany();
      res.json(vagas);
    } catch (error) {
      res.status(500).json({ error: "Falha ao listar vagass" });
    }
  },

    //parte do controller que faz o update
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const result = UpdateVagaDto.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ errors: result.error.format() });
      return;
    }

    try {
      const vagas = await prisma.vagas.update({
        where: { id },
        data: result.data,
      });
      res.json(vagas);
    } catch (error) {
      res.status(500).json({ error: "Falha ao atualizar vagas" });
    }
  },

    //parte do controller que faz o delete
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await prisma.vagas.delete({ where: { id } });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Falha ao deletar vagas" });
    }
  },
};