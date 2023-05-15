-- CreateTable
CREATE TABLE "AIATSIS" (
    "Glossary_Count" INTEGER NOT NULL,
    "Category" TEXT,
    "Number" INTEGER,
    "Glossary" TEXT,
    "HG_Glossary_Form" TEXT,
    "Semantic_Field" TEXT,
    "Speech_Part" TEXT,
    "Other_Note" TEXT,
    "Change_Note" TEXT,
    "Notes" TEXT,
    "Scientific_Name" TEXT,
    "Kin_Designation" TEXT,
    "SW_Rec_ID" TEXT,
    "HG_Basic" TEXT,

    CONSTRAINT "AIATSIS_pkey" PRIMARY KEY ("Glossary_Count")
);
