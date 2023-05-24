/*
  Warnings:

  - You are about to drop the `AiatsisWordList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BoonSource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FilteredResults` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RootGloss` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Source` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AiatsisWordList";

-- DropTable
DROP TABLE "BoonSource";

-- DropTable
DROP TABLE "FilteredResults";

-- DropTable
DROP TABLE "RootGloss";

-- DropTable
DROP TABLE "Source";

-- CreateTable
CREATE TABLE "source" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "original_id" TEXT NOT NULL,
    "scans_in_src_file" TEXT NOT NULL,
    "in_database" TEXT NOT NULL,
    "name_of_file" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "publication_status" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "collector" TEXT NOT NULL,
    "consultants" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "language_name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boon_source" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "gloss_translation_in_original" TEXT NOT NULL,
    "language_from_original" TEXT NOT NULL,
    "possibly_wathaurong" TEXT NOT NULL,

    CONSTRAINT "boon_source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "root_gloss" (
    "id" SERIAL NOT NULL,
    "regularised_spelling" TEXT NOT NULL,
    "regularised_english_gloss" TEXT NOT NULL,
    "synonym" TEXT NOT NULL,
    "semantic_one" TEXT NOT NULL,
    "semantic_two" TEXT NOT NULL,
    "word_class" TEXT NOT NULL,
    "entry_id_one" TEXT NOT NULL,
    "entry_id_two" TEXT NOT NULL,
    "entry_id_three" TEXT NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "root_gloss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aiatsis_word_list" (
    "id" SERIAL NOT NULL,
    "gloss_count" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "gloss" TEXT NOT NULL,
    "gloss_form" TEXT NOT NULL,
    "gemantic_field" TEXT NOT NULL,
    "gart_of_speech" TEXT NOT NULL,
    "other_note" TEXT NOT NULL,
    "change_note" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "kin_designation" TEXT NOT NULL,
    "rec_id" TEXT NOT NULL,
    "basic" TEXT NOT NULL,

    CONSTRAINT "aiatsis_word_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filtered_results" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "unique_id" TEXT NOT NULL,
    "entry_id" TEXT NOT NULL,
    "translation_in_original" TEXT NOT NULL,
    "language_form_in_original" TEXT NOT NULL,

    CONSTRAINT "filtered_results_pkey" PRIMARY KEY ("id")
);
