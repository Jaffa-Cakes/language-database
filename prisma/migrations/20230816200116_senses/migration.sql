-- CreateTable
CREATE TABLE "Sense" (
    "id" SERIAL NOT NULL,
    "gloss" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "Sense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
