require('dotenv').config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth-router';
import vagaRoutes from "./routes/vagas-router"
import leaderboardRoutes from "./routes/leaderboard-router"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use("/vagas", vagaRoutes);
app.use("/leaderboard", leaderboardRoutes)

export default app;