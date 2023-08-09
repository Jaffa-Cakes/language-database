-- CreateTable
CREATE TABLE "LexiconWord" (
    "id" SERIAL NOT NULL,
    "lexemeForm" TEXT,
    "morphType" TEXT,
    "dialectLabels" TEXT,
    "variantOf" TEXT,
    "pronounciation" TEXT,

    CONSTRAINT "LexiconWord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LexiconWord_lexemeForm_key" ON "LexiconWord"("lexemeForm");
