import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//func para testar conexão do prisma com o postgre
async function testConnection() {
  try {
    await prisma.$connect()
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!')
    
    // Teste simples: listar usuários (mesmo que vazio)
    const users = await prisma.usuario.findMany()
    console.log('Usuários no banco:', users)
    
  } catch (error) {
    console.error('Erro na conexão:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()

// 22/05/2025 testei e tava conectado