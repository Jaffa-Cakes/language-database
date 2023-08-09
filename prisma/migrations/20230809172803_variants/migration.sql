-- CreateTable
CREATE TABLE "Variant" (
    "id" SERIAL NOT NULL,
    "lexiconWordId" INTEGER,
    "variantForm" TEXT,
    "dialectLabels" TEXT,
    "variantType" TEXT,
    "comment" TEXT,

    CONSTRAINT "Variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Variant" ADD CONSTRAINT "Variant_lexiconWordId_fkey" FOREIGN KEY ("lexiconWordId") REFERENCES "LexiconWord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
