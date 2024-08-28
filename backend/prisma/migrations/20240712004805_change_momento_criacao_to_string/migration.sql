-- AlterTable
ALTER TABLE "DiaServico" ALTER COLUMN "data" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Mensagem" ALTER COLUMN "momento" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Reserva" ALTER COLUMN "dataSolicitacao" SET DATA TYPE TEXT,
ALTER COLUMN "horarioInicio" SET DATA TYPE TEXT,
ALTER COLUMN "horarioFim" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Servico" ALTER COLUMN "momentoCriacao" SET DATA TYPE TEXT;
