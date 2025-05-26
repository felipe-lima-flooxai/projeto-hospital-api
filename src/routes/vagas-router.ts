// src/routes/vaga-routes.ts
import { Router } from 'express';
import VagaController from '../controllers/vaga-controller';
import { isAuthenticated, isAdmin } from '../middlewares/auth-middleware';

const router = Router();

//passando middlewares primeiro, por ultimo o controller
router.post('/', isAuthenticated, isAdmin, VagaController.create);
router.get('/', VagaController.list);
router.put('/:id', isAuthenticated, isAdmin, VagaController.update);
router.delete('/:id', isAuthenticated, isAdmin, VagaController.delete);

export default router;