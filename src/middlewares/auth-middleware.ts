import prisma from '../config/prisma';
// src/middlewares/auth-middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//vou colocar comentários para eu mesmo poder entender o código depois

//função de autenticação = usuário está logado
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    //token jwt fica na requisição depois de logado. 
  const token = req.headers.authorization?.split(' ')[1]; //tentando pegar o token
  //se não tem o token, não ta logado, então retorna erro. Se tem o token, código continua normalmente
  if (!token) {
    res.status(401).json({ error: "Não autorizado" })
    return 
  } 

  try {
    //esse token que veio pode ser manipulado no front. Então usa a func verify com a chave jwt para ver se é mesmo
    //daí da para achar o user
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; isAdmin?: boolean; email: string };
    req.user = { id: decoded.id, isAdmin: decoded.isAdmin, email: decoded.email };
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
    return
  }
};

//funcao para saber se o usuário é admin
//não precisa usar o jwt, só faz uma pesquisa no banco pra ver se tem esse user
export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = await prisma.usuario.findUnique({
    where: { id: req.user.id },
  });
  if (!user?.isAdmin) {
    res.status(403).json({ error: "Acesso negado" });
    return 
  }
    
  next();
};