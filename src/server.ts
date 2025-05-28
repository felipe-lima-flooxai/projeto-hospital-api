
import app from './app';
import prisma from "./config/prisma"

//Configuração tipada

const PORT: number = Number(process.env.PORT) || 3000;

//Função assíncrona de start de server
async function startServer(): Promise<void> {
  try {
    //confirma se o prisma está conectado
    await prisma.$connect();
    console.log('Conectado ao banco de dados');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error: unknown) { 
    if (error instanceof Error) {
      console.error('Erro ao iniciar servidor:', error.message);
    }
    process.exit(1);
  }
}

startServer();