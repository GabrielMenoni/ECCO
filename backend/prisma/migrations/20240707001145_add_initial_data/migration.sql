/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";
-- Enable the UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,
    "fotoFrenteDocumento" TEXT NOT NULL,
    "fotoVersoDocumento" TEXT NOT NULL,
    "tipoDocumento" TEXT NOT NULL,
    "verificado" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,

    CONSTRAINT "Subcategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" TEXT NOT NULL,
    "momentoCriacao" TIMESTAMP(3) NOT NULL,
    "precoFixo" DOUBLE PRECISION,
    "precoMin" DOUBLE PRECISION,
    "precoMax" DOUBLE PRECISION,
    "subcategoriaId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaServico" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "periodo" TEXT NOT NULL,
    "servicoId" TEXT NOT NULL,

    CONSTRAINT "DiaServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notaAvaliacaoParaCliente" DOUBLE PRECISION NOT NULL,
    "comentarioAvaliacaoParaCliente" TEXT NOT NULL,
    "notaAvaliacaoParaPrestador" DOUBLE PRECISION NOT NULL,
    "comentarioAvaliacaoParaPrestador" TEXT NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL,
    "comentario" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "horarioInicio" TIMESTAMP(3) NOT NULL,
    "motivoRejeicao" TEXT,
    "horarioFim" TIMESTAMP(3) NOT NULL,
    "servicoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" TEXT NOT NULL,
    "momento" TIMESTAMP(3) NOT NULL,
    "conteudo" TEXT NOT NULL,
    "reservaId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Subcategoria" ADD CONSTRAINT "Subcategoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "Subcategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiaServico" ADD CONSTRAINT "DiaServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- Add initial data
INSERT INTO "Categoria" ("id", "nome") VALUES (uuid_generate_v4(), 'MANUTENCAO');
INSERT INTO "Categoria" ("id", "nome") VALUES (uuid_generate_v4(), 'LIMPEZA');

-- Insert subcategories for MANUTENCAO
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'PINTURA', (SELECT "id" FROM "Categoria" WHERE "nome" = 'MANUTENCAO'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'ELÉTRICA', (SELECT "id" FROM "Categoria" WHERE "nome" = 'MANUTENCAO'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'HIDRÁULICA', (SELECT "id" FROM "Categoria" WHERE "nome" = 'MANUTENCAO'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'PEQUENOS REPAROS', (SELECT "id" FROM "Categoria" WHERE "nome" = 'MANUTENCAO'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'INSTALAÇÕES', (SELECT "id" FROM "Categoria" WHERE "nome" = 'MANUTENCAO'));

-- Insert subcategories for LIMPEZA
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'FAXINA', (SELECT "id" FROM "Categoria" WHERE "nome" = 'LIMPEZA'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'DE VIDROS', (SELECT "id" FROM "Categoria" WHERE "nome" = 'LIMPEZA'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'DE PISCINA', (SELECT "id" FROM "Categoria" WHERE "nome" = 'LIMPEZA'));
INSERT INTO "Subcategoria" ("id", "nome", "categoriaId") VALUES (uuid_generate_v4(), 'DE JARDIM', (SELECT "id" FROM "Categoria" WHERE "nome" = 'LIMPEZA'));