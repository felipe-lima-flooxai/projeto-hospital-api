// src/routes/authRoutes.ts
import { Router } from 'express';
import AuthController from '../controllers/auth-controller';
import { request } from 'http';
import { isAuthenticated } from '../middlewares/auth-middleware';

const router = Router();

router.post('/login', AuthController.login);


router.post('/signup', AuthController.signup);

router.get("/me", isAuthenticated, AuthController.me)

export default router; // Exporta o router configurado