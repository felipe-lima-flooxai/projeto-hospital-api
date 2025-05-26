// src/routes/leaderboard-routes.ts
import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard-controller';

const router = Router();

//nao tem misterio, rota normal de getLeaderboard chamando o controller
router.get('/', LeaderboardController.getLeaderboard);

export default router;