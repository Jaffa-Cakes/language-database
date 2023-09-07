/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Individuals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lexicon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Collectors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Consultants` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EntryType" AS ENUM ('ITEM', 'SENT', 'SUFF', 'MISC');

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_sourceId_fkey";

-- DropForeignKey
ALTER TABLE "Lexicon" DROP CONSTRAINT "Lexicon_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_entryId_fkey";

-- DropForeignKey
ALTER TABLE "_Collectors" DROP CONSTRAINT "_Collectors_A_fkey";

-- DropForeignKey
ALTER TABLE "_Collectors" DROP CONSTRAINT "_Collectors_B_fkey";

-- DropForeignKey
ALTER TABLE "_Consultants" DROP CONSTRAINT "_Consultants_A_fkey";

-- DropForeignKey
ALTER TABLE "_Consultants" DROP CONSTRAINT "_Consultants_B_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Data";

-- DropTable
DROP TABLE "Individuals";

-- DropTable
DROP TABLE "Lexicon";

-- DropTable
DROP TABLE "_Collectors";

-- DropTable
DROP TABLE "_Consultants";

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "english" TEXT,
    "language" TEXT,
    "sonetic" TEXT,
    "type" "EntryType",
    "semanticId" INTEGER,
    "notes" TEXT,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Entry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
