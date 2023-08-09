/*
  Warnings:

  - The `semanticDomains` column on the `Sense` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dialectLabels` column on the `Word` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DialectLabel" AS ENUM ('LABELONE', 'LABELTWO', 'LABELTHREE');

-- CreateEnum
CREATE TYPE "SemanticDomain" AS ENUM ('DOMAINONE', 'DOMAINTWO', 'DOMAINTHREE');

-- AlterTable
ALTER TABLE "Sense" DROP COLUMN "semanticDomains",
ADD COLUMN     "semanticDomains" "SemanticDomain";

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "dialectLabels",
ADD COLUMN     "dialectLabels" "DialectLabel"[];

-- DropEnum
DROP TYPE "DialectLabels";

-- DropEnum
DROP TYPE "SemanticDomains";
