import { Router } from 'express';
import CandidaturaController from '../controllers/candidatura-controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth-middleware';

const router = Router();

// Candidatar-se a uma vaga
router.post('/', isAuthenticated, CandidaturaController.candidatar);

// Listar todas as candidaturas
router.get('/', isAuthenticated, CandidaturaController.minhasCandidaturas);

//deletar candidatura
router.delete('/:id', isAuthenticated, CandidaturaController.deletar);

//agora que percebi que esqueci de deletar candidatura
//update de candidatura não é necessário nesse projeto
router.get("/todas", isAuthenticated, isAdmin, CandidaturaController.listarTodas)

router.patch("/:candidaturaId/aprovar", isAuthenticated, isAdmin, CandidaturaController.aprovarCandidatura);

export default router;