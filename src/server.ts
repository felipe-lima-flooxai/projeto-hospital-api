
import app from './app';
import { PrismaClient } from '@prisma/client';

//Configuração tipada
const prisma: PrismaClient = new PrismaClient();
const PORT: number = Number(process.env.PORT) || 3000;

//Função assíncrona de start de server
async function startServer(): Promise<void> {
  try {
    //confirma se o prisma está conectado
    await prisma.$connect();
    console.log('Conectado ao banco de dados');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
    });
  } catch (error: unknown) { 
    if (error instanceof Error) {
      console.error('Erro ao iniciar servidor:', error.message);
    }
    process.exit(1);
  }
}

startServer();