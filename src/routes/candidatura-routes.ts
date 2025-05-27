import { Router } from 'express';
import CandidaturaController from '../controllers/candidatura-controller';
import { isAuthenticated } from '../middlewares/auth-middleware';

const router = Router();

// Candidatar-se a uma vaga
router.post('/', isAuthenticated, CandidaturaController.candidatar);

// Listar minhas candidaturas
router.get('/minhas', isAuthenticated, CandidaturaController.minhasCandidaturas);

export default router;