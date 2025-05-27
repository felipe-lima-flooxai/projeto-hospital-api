import { z } from "zod";

export const CandidaturaSchema = z.object({
  vagaID: z.string().uuid(),
});

