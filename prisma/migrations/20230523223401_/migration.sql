/*
  Warnings:

  - You are about to drop the `PreliminaryAffixGlossaries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PreliminaryRootGlossaries` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Sources" ALTER COLUMN "Date" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "PreliminaryAffixGlossaries";

-- DropTable
DROP TABLE "PreliminaryRootGlossaries";
