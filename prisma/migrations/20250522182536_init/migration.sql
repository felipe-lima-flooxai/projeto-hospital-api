-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "scolarity" TEXT,
    "birthDate" TIMESTAMP(3),
    "cpf" TEXT,
    "profession" TEXT,
    "adress" TEXT,
    "cep" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vagas" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rewardPoints" INTEGER NOT NULL,
    "taskDate" TIMESTAMP(3) NOT NULL,
    "creatorID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Aberta',

    CONSTRAINT "vagas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario_vagas" (
    "id" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "vagaID" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',

    CONSTRAINT "usuario_vagas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_username_key" ON "usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_key" ON "usuarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_vagas_userID_vagaID_key" ON "usuario_vagas"("userID", "vagaID");

-- AddForeignKey
ALTER TABLE "vagas" ADD CONSTRAINT "vagas_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_vagas" ADD CONSTRAINT "usuario_vagas_userID_fkey" FOREIGN KEY ("userID") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_vagas" ADD CONSTRAINT "usuario_vagas_vagaID_fkey" FOREIGN KEY ("vagaID") REFERENCES "vagas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
