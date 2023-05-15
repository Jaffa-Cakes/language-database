import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Word } from '@prisma/client';

const prisma = new PrismaClient();

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    source,
    WordID,
    EnglishTranslation,
    WoiWurrung,
    WWfuzzy,
    SoneticTranslation,
    EntryType,
  } = req.query;

  // Build the query object
  const query: Partial<Word> = {};
  if (source) query.source = source as string;
  if (WordID) query.WordID = Number(WordID as string);
  if (EnglishTranslation) query.EnglishTranslation = EnglishTranslation as string;
  if (WoiWurrung) query.WoiWurrung = WoiWurrung as string;
  if (WWfuzzy) query.WWfuzzy = WWfuzzy as string;
  if (SoneticTranslation) query.SoneticTranslation = SoneticTranslation as string;
  if (EntryType) query.EntryType = EntryType as string;

  try {
    const results = await prisma.word.findMany({
      where: query,
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
}

export default handle;
