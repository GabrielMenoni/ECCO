/*
  Warnings:

  - Added the required column `celular` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "celular" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;
