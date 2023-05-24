import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, language } from '@prisma/client';

const prisma = new PrismaClient();

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    id,
    source_id,
    temp_id,
    entry_id,
    gloss_translation_in_original,
    language_from_original,
    fuzzy_forms,
    sonetic_transliteration,
    type
  } = req.query;

  // Build the query object
  const query: Partial<language> = {};
  if (id) query.id = Number(id as string);
  if (source_id) query.source_id = String(source_id);
  if (temp_id) query.temp_id = String(temp_id);
  if (entry_id) query.entry_id = String(entry_id);
  if (gloss_translation_in_original) query.gloss_translation_in_original = String(gloss_translation_in_original);
  if (language_from_original) query.language_from_original = String(language_from_original);
  if (fuzzy_forms) query.fuzzy_forms = String(fuzzy_forms);
  if (sonetic_transliteration) query.sonetic_transliteration = String(sonetic_transliteration);
  if (type) query.type = String(type);

  try {
    const results = await prisma.language.findMany({
      where: query,
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export default handle;
