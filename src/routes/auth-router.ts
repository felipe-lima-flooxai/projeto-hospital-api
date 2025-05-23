// src/routes/authRoutes.ts
import { Router } from 'express';
import AuthController from '../controllers/auth-controller';
import { request } from 'http';

const router = Router();

router.post('/login', AuthController.login);


router.post('/register', AuthController.signup);

export default router; // Exporta o router configurado