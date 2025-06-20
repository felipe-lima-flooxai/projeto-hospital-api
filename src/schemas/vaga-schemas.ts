import {z} from "zod"

export const CreateVagaDto = z.object({
    title: z.string().min(7, "Título deve ter o mínimo de 7 caracteres"),
    description: z.string().min(15),
    type: z.enum(["Criancas", "Idosos"]),
    rewardPoints: z.number().int().positive(),
    taskDate: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Data inválida"
    }).transform(val => new Date(val))
})

  export const UpdateVagaDto = z.object({
    title: z.string().min(7, "Título deve ter o mínimo de 7 caracteres").optional(),
    description: z.string().min(15).optional(),
    type: z.enum(["Crianças", "Idosos"]).optional(),
    rewardPoints: z.number().int().positive().optional(),
    taskDate: z.string().optional().refine(val => !isNaN(Date.parse(val)), {
      message: "Data inválida"
    }).transform(val => new Date(val)),
    status: z.enum(["Aberta", "Fechada", "Pausada"]).optional()
  })

