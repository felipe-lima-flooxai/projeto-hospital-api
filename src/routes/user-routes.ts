import { Router } from 'express';
import UserController from '../controllers/user-controller';
import { isAuthenticated } from '../middlewares/auth-middleware';

const router = Router();

// Rota para editar informações do usuário
router.put('/:id', 
  isAuthenticated,
  UserController.updateUser
);

// Rota específica para atualizar senha
router.put('/:id/password',
  isAuthenticated,
  UserController.updatePassword
);

export default router;