-- CreateEnum
CREATE TYPE "GrammaticalInfo" AS ENUM ('ADVERB', 'COORDINATINGCONNECTIVE', 'NOUN', 'PROFORM', 'PRONOUN', 'VERB');

-- AlterTable
ALTER TABLE "Sense" ADD COLUMN     "grammaticalInfo" "GrammaticalInfo";
