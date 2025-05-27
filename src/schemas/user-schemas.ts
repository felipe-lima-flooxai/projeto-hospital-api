import { z } from "zod";

export const UpdateUserDto = z.object({
  email: z.string().email().optional(),
  username: z.string().min(3).optional(),
  fullname: z.string().min(3).optional(),
  profession: z.string().optional(),
  address: z.string().optional()
});

