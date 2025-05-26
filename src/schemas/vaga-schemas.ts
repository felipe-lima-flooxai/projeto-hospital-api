import {z} from "zod"

export const CreateVagaDto = z.object({
    title: z.string().min(7, "Título deve ter o mínimo de 7 caracteres"),
    description: z.string().min(15),
    type: z.enum(["Crianças", "Idosos"]),
    rewardPoints: z.number().int().positive(),
    taskDate: z.date()
})

  export const UpdateVagaDto = z.object({
    title: z.string().min(7, "Título deve ter o mínimo de 7 caracteres").optional(),
    description: z.string().min(15).optional(),
    type: z.enum(["Crianças", "Idosos"]).optional(),
    rewardPoints: z.number().int().positive().optional(),
    taskDate: z.date().optional(),
    status: z.enum(["Aberta", "Fechada", "Pausada"]).optional()
  })

