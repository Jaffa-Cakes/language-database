-- CreateEnum
CREATE TYPE "DialectLabel" AS ENUM ('ONE', 'TWO', 'THREE');

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "dialectLabels" "DialectLabel"[];
