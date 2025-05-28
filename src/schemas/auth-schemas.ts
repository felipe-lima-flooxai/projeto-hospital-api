import {z} from "zod"

export const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const RegisterDto = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string(),
  fullname: z.string(),
  isAdmin: z.boolean().optional()
});

