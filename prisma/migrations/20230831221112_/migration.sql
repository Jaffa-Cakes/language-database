-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_entryId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_wordId_fkey";

-- DropForeignKey
ALTER TABLE "Sense" DROP CONSTRAINT "Sense_wordId_fkey";

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
