require('dotenv').config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth-router';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

export default app;