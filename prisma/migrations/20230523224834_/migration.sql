/*
  Warnings:

  - The primary key for the `AiatsisWordList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BoonSource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FilteredResults` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Language` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RootGloss` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Source` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "FilteredResults_Unique_Id_key";

-- AlterTable
ALTER TABLE "AiatsisWordList" DROP CONSTRAINT "AiatsisWordList_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "AiatsisWordList_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BoonSource" DROP CONSTRAINT "BoonSource_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "BoonSource_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FilteredResults" DROP CONSTRAINT "FilteredResults_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "FilteredResults_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Language" DROP CONSTRAINT "Language_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Language_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RootGloss" DROP CONSTRAINT "RootGloss_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "RootGloss_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Source" DROP CONSTRAINT "Source_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Source_pkey" PRIMARY KEY ("id");
