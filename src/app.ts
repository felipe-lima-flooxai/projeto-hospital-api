import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Tipos para os objetos de resposta
interface ApiResponse {
  message: string;
}

interface HealthResponse {
  status: string;
}

// Rota básica para teste
app.get('/', (req: Request, res: Response<ApiResponse>) => {
  res.json({ message: 'Bem-vindo à API Voluntários para Hospitais!' });
});

// Health check
app.get('/health', (req: Request, res: Response<HealthResponse>) => {
  res.status(200).json({ status: 'ok' });
});

export default app;