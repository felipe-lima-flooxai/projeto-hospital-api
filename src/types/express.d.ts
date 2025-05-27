import { Request } from 'express';
/* Não sabia que isso existia. Typescript tava dando problema e fui procurar
Meu middleware de autenticação ta fazendo "req.propriedade", e isso quebra a interface Request do express
*/
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        isAdmin?: boolean;
      };
    }
  }
}

export {};