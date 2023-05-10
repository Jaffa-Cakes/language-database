/*
  Warnings:

  - You are about to drop the column `Source_Name` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the `BoomwurrungSources` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "FilteredResults" ALTER COLUMN "Source" DROP NOT NULL,
ALTER COLUMN "Entry_ID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Sources" DROP COLUMN "Source_Name",
ADD COLUMN     "SourceName" TEXT,
ALTER COLUMN "Source_of_Words" DROP NOT NULL;

-- DropTable
DROP TABLE "BoomwurrungSources";

-- CreateTable
CREATE TABLE "BWSources" (
    "Source_ID" TEXT NOT NULL,
    "Translation" TEXT,
    "Original" TEXT,

    CONSTRAINT "BWSources_pkey" PRIMARY KEY ("Source_ID")
);

-- AddForeignKey
ALTER TABLE "Sources" ADD CONSTRAINT "Sources_Source_ID_fkey" FOREIGN KEY ("Source_ID") REFERENCES "Language"("Source_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BWSources" ADD CONSTRAINT "BWSources_Source_ID_fkey" FOREIGN KEY ("Source_ID") REFERENCES "Language"("Source_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
