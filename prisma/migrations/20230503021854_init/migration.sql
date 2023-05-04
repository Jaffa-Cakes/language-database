-- CreateTable
CREATE TABLE "Language" (
    "Source_ID" TEXT NOT NULL,
    "Original_Text" TEXT,
    "Translation" TEXT,
    "Fuzzy_Forms" TEXT,
    "Sonetics" TEXT,
    "Entry_Type" TEXT,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("Source_ID")
);

-- CreateTable
CREATE TABLE "Sources" (
    "Source_Name" TEXT NOT NULL,
    "Source_ID" TEXT NOT NULL,
    "English_Scans" TEXT,
    "Database_Entry" TEXT,
    "File_Name" TEXT,
    "Source_of_Words" TEXT NOT NULL,
    "Publication_Status" TEXT,
    "Type_of_Document" TEXT,
    "Collector" TEXT,
    "Indigenous_Consultants" TEXT,
    "Date" TIMESTAMP(3),
    "Location" TEXT,
    "Language" TEXT,
    "Notes" TEXT,

    CONSTRAINT "Sources_pkey" PRIMARY KEY ("Source_ID")
);

-- CreateTable
CREATE TABLE "BoomwurrungSources" (
    "Source_ID" TEXT NOT NULL,
    "Translation" TEXT,
    "Original" TEXT,

    CONSTRAINT "BoomwurrungSources_pkey" PRIMARY KEY ("Source_ID")
);

-- CreateTable
CREATE TABLE "PreliminaryRootGlossaries" (
    "Root_Spelling" TEXT,
    "English_Term" TEXT,
    "Synonyms" TEXT,
    "Semantic_Field_1" TEXT,
    "Semantic_Field_2" TEXT,
    "Word_Class" TEXT,
    "Source_ID" TEXT NOT NULL,

    CONSTRAINT "PreliminaryRootGlossaries_pkey" PRIMARY KEY ("Source_ID")
);

-- CreateTable
CREATE TABLE "PreliminaryAffixGlossaries" (
    "Root_Spelling" TEXT,
    "English_Term" TEXT,
    "Abreviation" TEXT,
    "Semantic_Field_1" TEXT,
    "Semantic_Field_2" TEXT,
    "Word_Class" TEXT,
    "Source_ID" TEXT NOT NULL,

    CONSTRAINT "PreliminaryAffixGlossaries_pkey" PRIMARY KEY ("Source_ID")
);

-- CreateTable
CREATE TABLE "FilteredResults" (
    "Source" TEXT NOT NULL,
    "Unique_ID" TEXT NOT NULL,
    "Entry_ID" TEXT NOT NULL,
    "Glossary_Translation" TEXT,
    "Original" TEXT,

    CONSTRAINT "FilteredResults_pkey" PRIMARY KEY ("Unique_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "FilteredResults_Unique_ID_key" ON "FilteredResults"("Unique_ID");
