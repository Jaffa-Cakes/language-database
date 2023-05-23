/*
  Warnings:

  - The primary key for the `FilteredResults` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Entry_ID` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Glossary_Translation` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Original` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Unique_ID` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_Type` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Original_Text` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Sonetics` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Translation` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the `AIATSIS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BWSources` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sources` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Unique_Id]` on the table `FilteredResults` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Entry_Id` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Language_Form_in_Original` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Translation_in_Original` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Unique_Id` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Made the column `Source` on table `FilteredResults` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `Entry_ID` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gloss_Translation_in_Original` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Language_from_Original` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Sonetic_Transliteration` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Temp_ID` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Type` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Made the column `Fuzzy_Forms` on table `Language` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BWSources" DROP CONSTRAINT "BWSources_Source_ID_fkey";

-- DropForeignKey
ALTER TABLE "Sources" DROP CONSTRAINT "Sources_Source_ID_fkey";

-- DropIndex
DROP INDEX "FilteredResults_Unique_ID_key";

-- AlterTable
ALTER TABLE "FilteredResults" DROP CONSTRAINT "FilteredResults_pkey",
DROP COLUMN "Entry_ID",
DROP COLUMN "Glossary_Translation",
DROP COLUMN "Original",
DROP COLUMN "Unique_ID",
ADD COLUMN     "Entry_Id" TEXT NOT NULL,
ADD COLUMN     "Language_Form_in_Original" TEXT NOT NULL,
ADD COLUMN     "Translation_in_Original" TEXT NOT NULL,
ADD COLUMN     "Unique_Id" TEXT NOT NULL,
ALTER COLUMN "Source" SET NOT NULL,
ADD CONSTRAINT "FilteredResults_pkey" PRIMARY KEY ("Source");

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "Entry_Type",
DROP COLUMN "Original_Text",
DROP COLUMN "Sonetics",
DROP COLUMN "Translation",
ADD COLUMN     "Entry_ID" TEXT NOT NULL,
ADD COLUMN     "Gloss_Translation_in_Original" TEXT NOT NULL,
ADD COLUMN     "Language_from_Original" TEXT NOT NULL,
ADD COLUMN     "Sonetic_Transliteration" TEXT NOT NULL,
ADD COLUMN     "Temp_ID" TEXT NOT NULL,
ADD COLUMN     "Type" TEXT NOT NULL,
ALTER COLUMN "Fuzzy_Forms" SET NOT NULL;

-- DropTable
DROP TABLE "AIATSIS";

-- DropTable
DROP TABLE "BWSources";

-- DropTable
DROP TABLE "Sources";

-- CreateTable
CREATE TABLE "Source" (
    "Name" TEXT NOT NULL,
    "Id" TEXT NOT NULL,
    "Scans_in_Src_File" TEXT NOT NULL,
    "In_Database" TEXT NOT NULL,
    "Name_of_File" TEXT NOT NULL,
    "Source" TEXT NOT NULL,
    "Publication_Status" TEXT NOT NULL,
    "Document_Type" TEXT NOT NULL,
    "Collector" TEXT NOT NULL,
    "Consultants" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Languages" TEXT NOT NULL,
    "Language_Name" TEXT NOT NULL,
    "Notes" TEXT NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("Name")
);

-- CreateTable
CREATE TABLE "BoonSource" (
    "Source" TEXT NOT NULL,
    "Gloss_Translation_in_Original" TEXT NOT NULL,
    "Language_from_Original" TEXT NOT NULL,
    "Possibly_Wathaurong" TEXT NOT NULL,

    CONSTRAINT "BoonSource_pkey" PRIMARY KEY ("Source")
);

-- CreateTable
CREATE TABLE "RootGloss" (
    "Regularised_Spelling" TEXT NOT NULL,
    "Regularised_English_Gloss" TEXT NOT NULL,
    "Synonym" TEXT NOT NULL,
    "Semantic_One" TEXT NOT NULL,
    "Semantic_Two" TEXT NOT NULL,
    "Word_Class" TEXT NOT NULL,
    "Entry_Id_One" TEXT NOT NULL,
    "Entry_Id_Two" TEXT NOT NULL,
    "Entry_Id_Three" TEXT NOT NULL,
    "Notes" TEXT NOT NULL,

    CONSTRAINT "RootGloss_pkey" PRIMARY KEY ("Regularised_Spelling")
);

-- CreateTable
CREATE TABLE "AiatsisWordList" (
    "Gloss_Count" INTEGER NOT NULL,
    "Category" TEXT NOT NULL,
    "Number" INTEGER NOT NULL,
    "Gloss" TEXT NOT NULL,
    "Gloss_Form" TEXT NOT NULL,
    "Semantic_Field" TEXT NOT NULL,
    "Part_of_Speech" TEXT NOT NULL,
    "Other_Note" TEXT NOT NULL,
    "Change_Note" TEXT NOT NULL,
    "Note" TEXT NOT NULL,
    "Scientific_Name" TEXT NOT NULL,
    "Kin_Designation" TEXT NOT NULL,
    "Rec_Id" TEXT NOT NULL,
    "Basic" TEXT NOT NULL,

    CONSTRAINT "AiatsisWordList_pkey" PRIMARY KEY ("Gloss_Count")
);

-- CreateIndex
CREATE UNIQUE INDEX "FilteredResults_Unique_Id_key" ON "FilteredResults"("Unique_Id");
