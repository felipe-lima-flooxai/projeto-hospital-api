import { Router } from 'express';
import UserController from '../controllers/user-controller';
import { isAdmin, isAuthenticated } from '../middlewares/auth-middleware';

const router = Router();
//user post é feito no auth-router

// Rota para editar informações do usuário
router.put('/:id', isAuthenticated, UserController.updateUser);

//rota pegar um usuario
router.get("/:id", isAuthenticated, UserController.showUser)

//rota para pegar todos os usuarios
router.get("/", isAuthenticated, isAdmin, UserController.showAllUsers)

//rota de deletar usuario
router.delete("/:id", isAuthenticated, isAuthenticated, UserController.removeUser)

export default router;