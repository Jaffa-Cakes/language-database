/*
  Warnings:

  - The primary key for the `BWSources` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Original` on the `BWSources` table. All the data in the column will be lost.
  - You are about to drop the column `Source_ID` on the `BWSources` table. All the data in the column will be lost.
  - You are about to drop the column `Translation` on the `BWSources` table. All the data in the column will be lost.
  - The primary key for the `Language` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Entry_Type` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Fuzzy_Forms` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Original_Text` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Sonetics` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Source_ID` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Translation` on the `Language` table. All the data in the column will be lost.
  - The primary key for the `Sources` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Collector` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Database_Entry` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `English_Scans` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `File_Name` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Indigenous_Consultants` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Language` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Notes` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Publication_Status` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `SourceName` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Source_ID` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Source_of_Words` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the column `Type_of_Document` on the `Sources` table. All the data in the column will be lost.
  - You are about to drop the `AIATSIS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FilteredResults` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PreliminaryAffixGlossaries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PreliminaryRootGlossaries` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `BWSources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source_id` to the `Sources` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BWSources" DROP CONSTRAINT "BWSources_Source_ID_fkey";

-- DropForeignKey
ALTER TABLE "Sources" DROP CONSTRAINT "Sources_Source_ID_fkey";

-- AlterTable
ALTER TABLE "BWSources" DROP CONSTRAINT "BWSources_pkey",
DROP COLUMN "Original",
DROP COLUMN "Source_ID",
DROP COLUMN "Translation",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "original" TEXT,
ADD COLUMN     "translation" TEXT,
ADD CONSTRAINT "BWSources_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Language" DROP CONSTRAINT "Language_pkey",
DROP COLUMN "Entry_Type",
DROP COLUMN "Fuzzy_Forms",
DROP COLUMN "Original_Text",
DROP COLUMN "Sonetics",
DROP COLUMN "Source_ID",
DROP COLUMN "Translation",
ADD COLUMN     "entry_type" TEXT,
ADD COLUMN     "fuzzy" TEXT,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "original_text" TEXT,
ADD COLUMN     "sonetics" TEXT,
ADD COLUMN     "translation" TEXT,
ADD CONSTRAINT "Language_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Sources" DROP CONSTRAINT "Sources_pkey",
DROP COLUMN "Collector",
DROP COLUMN "Database_Entry",
DROP COLUMN "Date",
DROP COLUMN "English_Scans",
DROP COLUMN "File_Name",
DROP COLUMN "Indigenous_Consultants",
DROP COLUMN "Language",
DROP COLUMN "Location",
DROP COLUMN "Notes",
DROP COLUMN "Publication_Status",
DROP COLUMN "SourceName",
DROP COLUMN "Source_ID",
DROP COLUMN "Source_of_Words",
DROP COLUMN "Type_of_Document",
ADD COLUMN     "collector" TEXT,
ADD COLUMN     "consultants" TEXT,
ADD COLUMN     "database_entry" TEXT,
ADD COLUMN     "date_collected" TEXT,
ADD COLUMN     "document_type" TEXT,
ADD COLUMN     "english_scans" TEXT,
ADD COLUMN     "file_name" TEXT,
ADD COLUMN     "language_name" TEXT,
ADD COLUMN     "location_collected" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "origin" TEXT,
ADD COLUMN     "publication_status" TEXT,
ADD COLUMN     "regularized_name" TEXT,
ADD COLUMN     "source_id" TEXT NOT NULL,
ADD CONSTRAINT "Sources_pkey" PRIMARY KEY ("source_id");

-- DropTable
DROP TABLE "AIATSIS";

-- DropTable
DROP TABLE "FilteredResults";

-- DropTable
DROP TABLE "PreliminaryAffixGlossaries";

-- DropTable
DROP TABLE "PreliminaryRootGlossaries";

-- CreateTable
CREATE TABLE "lexicon" (
    "glossary_count" INTEGER NOT NULL,
    "category" TEXT,
    "number" INTEGER,
    "gloss" TEXT,
    "hg_glossary_form" TEXT,
    "semantic_field" TEXT,
    "speech_part" TEXT,
    "other_note" TEXT,
    "change_note" TEXT,
    "notes" TEXT,
    "scientific_name" TEXT,
    "kin_designation" TEXT,
    "sw_rec_id" TEXT,
    "hg_basic" TEXT,

    CONSTRAINT "lexicon_pkey" PRIMARY KEY ("glossary_count")
);

-- CreateTable
CREATE TABLE "SearchHistory" (
    "entry_count" SERIAL NOT NULL,
    "searched_word" TEXT NOT NULL,

    CONSTRAINT "SearchHistory_pkey" PRIMARY KEY ("entry_count")
);

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_id_fkey" FOREIGN KEY ("id") REFERENCES "Sources"("source_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BWSources" ADD CONSTRAINT "BWSources_id_fkey" FOREIGN KEY ("id") REFERENCES "Sources"("source_id") ON DELETE RESTRICT ON UPDATE CASCADE;
