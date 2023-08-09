/*
  Warnings:

  - You are about to drop the column `comment` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `lexiconWordId` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the column `variantForm` on the `Variant` table. All the data in the column will be lost.
  - You are about to drop the `LexiconWord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `childWordId` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentWordId` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MorphType" AS ENUM ('TYPEONE', 'TYPETWO', 'TYPETHREE');

-- CreateEnum
CREATE TYPE "DialectLabels" AS ENUM ('LABELONE', 'LABELTWO', 'LABELTHREE');

-- CreateEnum
CREATE TYPE "GrammaticalInfo" AS ENUM ('INFOONE', 'INFOTWO', 'INFOTHREE');

-- CreateEnum
CREATE TYPE "SemanticDomains" AS ENUM ('DOMAINONE', 'DOMAINTWO', 'DOMAINTHREE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('STATUSONE', 'STATUSTWO', 'STATUSTHREE');

-- DropForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_lexiconWordId_fkey";

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "comment",
DROP COLUMN "lexiconWordId",
DROP COLUMN "variantForm",
ADD COLUMN     "childWordId" INTEGER NOT NULL,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "parentWordId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "LexiconWord";

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "lexemeForm" TEXT,
    "morphType" "MorphType",
    "dialectLabels" "DialectLabels"[],
    "pronounciation" TEXT,
    "wordId" INTEGER,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sense" (
    "id" SERIAL NOT NULL,
    "gloss" TEXT,
    "reversal" TEXT,
    "definition" TEXT,
    "grammaticalInfo" "GrammaticalInfo",
    "example" TEXT,
    "translation" TEXT,
    "referenceId" INTEGER,
    "scientific" TEXT,
    "bibliography" TEXT,
    "general" TEXT,
    "sourceId" INTEGER,
    "semanticDomains" "SemanticDomains",
    "status" "Status",

    CONSTRAINT "Sense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_lexemeForm_key" ON "Word"("lexemeForm");

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_parentWordId_fkey" FOREIGN KEY ("parentWordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_childWordId_fkey" FOREIGN KEY ("childWordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
