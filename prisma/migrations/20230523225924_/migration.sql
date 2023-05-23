/*
  Warnings:

  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Language";

-- CreateTable
CREATE TABLE "language" (
    "id" SERIAL NOT NULL,
    "source_id" TEXT NOT NULL,
    "temp_id" TEXT NOT NULL,
    "entry_id" TEXT NOT NULL,
    "gloss_translation_in_original" TEXT NOT NULL,
    "language_from_original" TEXT NOT NULL,
    "fuzzy_forms" TEXT NOT NULL,
    "sonetic_transliteration" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);
