-- DropForeignKey
ALTER TABLE "Subcategoria" DROP CONSTRAINT "Subcategoria_categoriaId_fkey";

-- AddForeignKey
ALTER TABLE "Subcategoria" ADD CONSTRAINT "Subcategoria_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
