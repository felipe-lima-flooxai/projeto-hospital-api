// src/controllers/AuthController.ts
import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';
import { RegisterDto, LoginDto } from '../schemas/auth-schemas';


// Interface para o payload do token JWT
interface JwtPayload {
  id: string;
  email: string;
  isAdmin: boolean;
}

  const login: RequestHandler = async(req: Request, res: Response) => {
    
    const parseResult = LoginDto.safeParse(req.body);

    if (!parseResult.success) {
      res.status(400).json({
      message: 'Validation failed',
      errors: parseResult.error.format(), // Erros formatados
    });
  }

    const {email, password} =  parseResult.data

    try {
      // 1. Verificar se o usuário existe
      const user = await prisma.usuario.findUnique({
        where: { email: email }
      });

      if (!user) {
          res.status(401).json({ 
          error: 'Credenciais inválidas',
          message: 'Email ou senha incorretos'
        });
      }

      // 2. Validar a senha
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          res.status(401).json({
          error: 'Credenciais inválidas',
          message: 'Email ou senha incorretos'
        });
      }

      // 3. Gerar token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin
        } as JwtPayload,
        process.env.JWT_SECRET as string,
        { expiresIn: '8h' }
      );
      const bearerToken = `Bearer ${token}`
      

      // 4. Retornar resposta (omitindo a senha do usuário)
      const userWithoutPassword = {...user, password: undefined}
      
        res.status(200).json({
        token: bearerToken,
        user: userWithoutPassword,
        message: 'Login realizado com sucesso'
      });

    } catch (error) {
      console.error('Erro no login:', error);
        res.status(500).json({
        error: 'Erro interno no servidor',
        message: 'Ocorreu um erro durante o login'
      });
    }
  }

  const signup: RequestHandler = async (req: Request, res: Response) => {
  const parseResult = RegisterDto.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({
      message: 'Validation failed',
      errors: parseResult.error.format(),
    });
    return;
  }
  
  const { email, password, username, isAdmin } = parseResult.data;
  
  try {
    // 1. Verificar se o usuário já existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email: email }
    });
    
    if (existingUser) {
      res.status(409).json({
        error: 'Usuário já existe',
        message: 'Este email já está cadastrado no sistema'
      });
      return;
    }
    
    // 2. Hash da senha
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // 3. Criar o usuário
    const newUser = await prisma.usuario.create({
      data: {
        email: email,
        password: hashedPassword,
        username: username ,
        isAdmin: isAdmin 
      }
    });
    
    // 4. Gerar token JWT
    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        isAdmin: newUser.isAdmin
      } as JwtPayload,
      process.env.JWT_SECRET as string,
      { expiresIn: '8h' }
    );
    const bearerToken = `Bearer ${token}`
    
    // 5. Retornar resposta (omitindo a senha)
    const userWithoutPassword = { ...newUser, password: undefined };
    
    res.status(201).json({
      token: bearerToken,
      user: userWithoutPassword,
      message: 'Usuário criado com sucesso'
    });
    
  } catch (error) {
    console.error('Erro no signup:', error);
    
    res.status(500).json({
      error: 'Erro interno no servidor',
      message: 'Ocorreu um erro durante o cadastro'
    });
  }
};

  const me : RequestHandler = async(req: Request, res: Response) => {
  res.send(req.user)
  }


  const AuthController = {login, signup, me}

  export default AuthController