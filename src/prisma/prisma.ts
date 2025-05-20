// ainda to engatinhando com o prisma. O claude recomendou essa configuração de prisma para ajeitar certos aspectos
import { PrismaClient } from '@prisma/client';


declare global {
  var prisma: PrismaClient | undefined;
}


export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}