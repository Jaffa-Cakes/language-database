import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Language } from '@prisma/client';

const prisma = new PrismaClient();

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    id,
    original_text,
    translation,
    fuzzy,
    sonetics,
    entry_type,
  } = req.query;

  // Build the query object
  const query: Partial<Language> = {};
  if (id) query.id = Number(id as string);
  if (original_text) query.original_text = original_text as string;
  if (translation) query.translation = translation as string;
  if (fuzzy) query.fuzzy = fuzzy as string;
  if (sonetics) query.sonetics = sonetics as string;
  if (entry_type) query.entry_type = entry_type as string;

  try {
    const results = await prisma.language.findMany({
      where: query,
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
}

export default handle;
