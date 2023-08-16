/*
  Warnings:

  - You are about to drop the column `sourceId` on the `Reference` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MorphType" AS ENUM ('BOUNDROOT', 'BOUNDSTEM', 'CLITIC', 'DISCONTIGUOUSPHRASE', 'ENCLITIC', 'PARTICLE', 'PHRASE', 'PROCLITIC', 'ROOT', 'STEM');

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_sourceId_fkey";

-- AlterTable
ALTER TABLE "Reference" DROP COLUMN "sourceId";

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "morphType" "MorphType";
