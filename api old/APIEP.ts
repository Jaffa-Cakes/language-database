import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const {
    Source,
    WordID,
    EnglishTranslation,
    WoiWurrung,
    WWfuzzy,
    SoneticTranslation,
    EntryType,
  } = req.query;

  // Build the query object
  const query = {};
  if (Source) query.source = Source;
  if (WordID) query.WordID = Number(WordID);
  if (EnglishTranslation) query.EnglishTranslation = EnglishTranslation;
  if (WoiWurrung) query.WoiWurrung = WoiWurrung;
  if (WWfuzzy) query.WWfuzzy = WWfuzzy;
  if (SoneticTranslation) query.SoneticTranslation = SoneticTranslation;
  if (EntryType) query.EntryType = EntryType;

  try {
    const results = await prisma.word.findMany({
      where: query,
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
}
