/*
  Warnings:

  - You are about to drop the column `Basic` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Category` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Change_Note` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Gloss` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Gloss_Count` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Gloss_Form` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Kin_Designation` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Note` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Number` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Other_Note` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Part_of_Speech` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Rec_Id` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Scientific_Name` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Semantic_Field` on the `AiatsisWordList` table. All the data in the column will be lost.
  - You are about to drop the column `Gloss_Translation_in_Original` on the `BoonSource` table. All the data in the column will be lost.
  - You are about to drop the column `Language_from_Original` on the `BoonSource` table. All the data in the column will be lost.
  - You are about to drop the column `Possibly_Wathaurong` on the `BoonSource` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `BoonSource` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_Id` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Language_Form_in_Original` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Translation_in_Original` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Unique_Id` on the `FilteredResults` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_ID` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Fuzzy_Forms` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Gloss_Translation_in_Original` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Language_from_Original` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Sonetic_Transliteration` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Source_ID` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Temp_ID` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_Id_One` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_Id_Three` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Entry_Id_Two` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Notes` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Regularised_English_Gloss` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Regularised_Spelling` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Semantic_One` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Semantic_Two` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Synonym` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Word_Class` on the `RootGloss` table. All the data in the column will be lost.
  - You are about to drop the column `Collector` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Consultants` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Date` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Document_Type` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `In_Database` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Language_Name` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Languages` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Location` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Name_of_File` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Notes` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Publication_Status` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Scans_in_Src_File` on the `Source` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Source` table. All the data in the column will be lost.
  - Added the required column `basic` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `change_note` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gart_of_speech` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gemantic_field` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss_count` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss_form` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kin_designation` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_note` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rec_id` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scientific_name` to the `AiatsisWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss_translation_in_original` to the `BoonSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_from_original` to the `BoonSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `possibly_wathaurong` to the `BoonSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `BoonSource` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_id` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_form_in_original` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation_in_original` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unique_id` to the `FilteredResults` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_id` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuzzy_forms` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gloss_translation_in_original` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_from_original` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sonetic_transliteration` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source_id` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp_id` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_id_one` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_id_three` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entry_id_two` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularised_english_gloss` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularised_spelling` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semantic_one` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semantic_two` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synonym` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word_class` to the `RootGloss` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collector` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consultants` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_type` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `in_database` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_name` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_of_file` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_id` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publication_status` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scans_in_src_file` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Source` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AiatsisWordList" DROP COLUMN "Basic",
DROP COLUMN "Category",
DROP COLUMN "Change_Note",
DROP COLUMN "Gloss",
DROP COLUMN "Gloss_Count",
DROP COLUMN "Gloss_Form",
DROP COLUMN "Kin_Designation",
DROP COLUMN "Note",
DROP COLUMN "Number",
DROP COLUMN "Other_Note",
DROP COLUMN "Part_of_Speech",
DROP COLUMN "Rec_Id",
DROP COLUMN "Scientific_Name",
DROP COLUMN "Semantic_Field",
ADD COLUMN     "basic" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "change_note" TEXT NOT NULL,
ADD COLUMN     "gart_of_speech" TEXT NOT NULL,
ADD COLUMN     "gemantic_field" TEXT NOT NULL,
ADD COLUMN     "gloss" TEXT NOT NULL,
ADD COLUMN     "gloss_count" INTEGER NOT NULL,
ADD COLUMN     "gloss_form" TEXT NOT NULL,
ADD COLUMN     "kin_designation" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "other_note" TEXT NOT NULL,
ADD COLUMN     "rec_id" TEXT NOT NULL,
ADD COLUMN     "scientific_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BoonSource" DROP COLUMN "Gloss_Translation_in_Original",
DROP COLUMN "Language_from_Original",
DROP COLUMN "Possibly_Wathaurong",
DROP COLUMN "Source",
ADD COLUMN     "gloss_translation_in_original" TEXT NOT NULL,
ADD COLUMN     "language_from_original" TEXT NOT NULL,
ADD COLUMN     "possibly_wathaurong" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FilteredResults" DROP COLUMN "Entry_Id",
DROP COLUMN "Language_Form_in_Original",
DROP COLUMN "Source",
DROP COLUMN "Translation_in_Original",
DROP COLUMN "Unique_Id",
ADD COLUMN     "entry_id" TEXT NOT NULL,
ADD COLUMN     "language_form_in_original" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "translation_in_original" TEXT NOT NULL,
ADD COLUMN     "unique_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "Entry_ID",
DROP COLUMN "Fuzzy_Forms",
DROP COLUMN "Gloss_Translation_in_Original",
DROP COLUMN "Language_from_Original",
DROP COLUMN "Sonetic_Transliteration",
DROP COLUMN "Source_ID",
DROP COLUMN "Temp_ID",
DROP COLUMN "Type",
ADD COLUMN     "entry_id" TEXT NOT NULL,
ADD COLUMN     "fuzzy_forms" TEXT NOT NULL,
ADD COLUMN     "gloss_translation_in_original" TEXT NOT NULL,
ADD COLUMN     "language_from_original" TEXT NOT NULL,
ADD COLUMN     "sonetic_transliteration" TEXT NOT NULL,
ADD COLUMN     "source_id" TEXT NOT NULL,
ADD COLUMN     "temp_id" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RootGloss" DROP COLUMN "Entry_Id_One",
DROP COLUMN "Entry_Id_Three",
DROP COLUMN "Entry_Id_Two",
DROP COLUMN "Notes",
DROP COLUMN "Regularised_English_Gloss",
DROP COLUMN "Regularised_Spelling",
DROP COLUMN "Semantic_One",
DROP COLUMN "Semantic_Two",
DROP COLUMN "Synonym",
DROP COLUMN "Word_Class",
ADD COLUMN     "entry_id_one" TEXT NOT NULL,
ADD COLUMN     "entry_id_three" TEXT NOT NULL,
ADD COLUMN     "entry_id_two" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "regularised_english_gloss" TEXT NOT NULL,
ADD COLUMN     "regularised_spelling" TEXT NOT NULL,
ADD COLUMN     "semantic_one" TEXT NOT NULL,
ADD COLUMN     "semantic_two" TEXT NOT NULL,
ADD COLUMN     "synonym" TEXT NOT NULL,
ADD COLUMN     "word_class" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Source" DROP COLUMN "Collector",
DROP COLUMN "Consultants",
DROP COLUMN "Date",
DROP COLUMN "Document_Type",
DROP COLUMN "Id",
DROP COLUMN "In_Database",
DROP COLUMN "Language_Name",
DROP COLUMN "Languages",
DROP COLUMN "Location",
DROP COLUMN "Name",
DROP COLUMN "Name_of_File",
DROP COLUMN "Notes",
DROP COLUMN "Publication_Status",
DROP COLUMN "Scans_in_Src_File",
DROP COLUMN "Source",
ADD COLUMN     "collector" TEXT NOT NULL,
ADD COLUMN     "consultants" TEXT NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "document_type" TEXT NOT NULL,
ADD COLUMN     "in_database" TEXT NOT NULL,
ADD COLUMN     "language_name" TEXT NOT NULL,
ADD COLUMN     "languages" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "name_of_file" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "original_id" TEXT NOT NULL,
ADD COLUMN     "publication_status" TEXT NOT NULL,
ADD COLUMN     "scans_in_src_file" TEXT NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL;
