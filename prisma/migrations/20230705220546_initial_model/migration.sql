-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ITEM', 'SENT', 'SUFF', 'MISC');

-- CreateTable
CREATE TABLE "Source" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "flowScaned" BOOLEAN,
    "flowEntered" BOOLEAN,
    "fileName" TEXT,
    "reference" TEXT,
    "publicationType" TEXT,
    "documentType" TEXT,
    "date" TIMESTAMP(3),
    "location" TEXT,
    "sourceLangName" TEXT,
    "langName" TEXT,
    "notes" TEXT,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Individuals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Individuals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lexicon" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER,
    "english" TEXT,
    "grammar" TEXT,

    CONSTRAINT "Lexicon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "letter" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "sourceId" INTEGER,
    "english" TEXT,
    "language" TEXT,
    "sonetic" TEXT,
    "type" "Type",
    "categoryId" INTEGER,
    "semanticId" INTEGER,
    "notes" TEXT,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Collectors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Consultants" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Collectors_AB_unique" ON "_Collectors"("A", "B");

-- CreateIndex
CREATE INDEX "_Collectors_B_index" ON "_Collectors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Consultants_AB_unique" ON "_Consultants"("A", "B");

-- CreateIndex
CREATE INDEX "_Consultants_B_index" ON "_Consultants"("B");

-- AddForeignKey
ALTER TABLE "Lexicon" ADD CONSTRAINT "Lexicon_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Collectors" ADD CONSTRAINT "_Collectors_A_fkey" FOREIGN KEY ("A") REFERENCES "Individuals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Collectors" ADD CONSTRAINT "_Collectors_B_fkey" FOREIGN KEY ("B") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Consultants" ADD CONSTRAINT "_Consultants_A_fkey" FOREIGN KEY ("A") REFERENCES "Individuals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Consultants" ADD CONSTRAINT "_Consultants_B_fkey" FOREIGN KEY ("B") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;
