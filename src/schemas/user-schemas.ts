import { z } from "zod";

export const UpdateUserDto = z.object({
  email: z.string().email().optional(),
  username: z.string().min(3).optional(),
  fullname: z.string().min(3).optional(),
  profession: z.string().optional(),
  adress: z.string().optional(),
  scolarity: z.string().optional(),
  cpf: z.string().optional(),
  cep: z.string().optional(),
  birthDate: z.union([
    z.string().datetime(), // Para ISO strings
    z.date(),              // Para objetos Date
    z.null()               // Para permitir null
  ]).optional(),
});

