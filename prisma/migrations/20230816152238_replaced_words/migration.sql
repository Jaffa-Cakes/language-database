/*
  Warnings:

  - You are about to drop the column `childWordId` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `dialectLabels` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `parentWordId` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `variantType` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `dialectLabels` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `lexemeForm` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `morphType` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `pronounciation` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `wordId` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the `Sense` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[spelling]` on the table `Word` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `entryId` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceId` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spelling` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordId` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spelling` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sense" DROP CONSTRAINT "Sense_referenceId_fkey";

-- DropForeignKey
ALTER TABLE "Sense" DROP CONSTRAINT "Sense_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_childWordId_fkey";

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_parentWordId_fkey";

-- DropIndex
DROP INDEX "Word_lexemeForm_key";

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "childWordId",
DROP COLUMN "dialectLabels",
DROP COLUMN "note",
DROP COLUMN "parentWordId",
DROP COLUMN "variantType",
ADD COLUMN     "entryId" INTEGER NOT NULL,
ADD COLUMN     "sourceId" INTEGER NOT NULL,
ADD COLUMN     "spelling" TEXT NOT NULL,
ADD COLUMN     "wordId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "dialectLabels",
DROP COLUMN "lexemeForm",
DROP COLUMN "morphType",
DROP COLUMN "pronounciation",
DROP COLUMN "wordId",
ADD COLUMN     "spelling" TEXT NOT NULL;

-- DropTable
DROP TABLE "Sense";

-- DropEnum
DROP TYPE "DialectLabel";

-- DropEnum
DROP TYPE "GrammaticalInfo";

-- DropEnum
DROP TYPE "MorphType";

-- DropEnum
DROP TYPE "SemanticDomain";

-- DropEnum
DROP TYPE "Status";

-- CreateIndex
CREATE UNIQUE INDEX "Word_spelling_key" ON "Word"("spelling");

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
