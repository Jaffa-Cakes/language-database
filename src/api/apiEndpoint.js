import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Destructure the search parameters from the request query
  const { includeWords, otherWords, excludeWords, source, startYear, endYear } = req.query;

  try {
    // Start the where clause with source and year range
    let whereClause = {
      source: { equals: source },
      year: { gte: parseInt(startYear), lte: parseInt(endYear) },
    };

    // If there are words to include, add them to the where clause
    if (includeWords) {
      whereClause = {
        ...whereClause,
        AND: includeWords.split(',').map(word => ({ 
          OR: [
            { title: { contains: word, mode: 'insensitive' } },
            { content: { contains: word, mode: 'insensitive' } },
          ]
        })),
      };
    }

    // If there are other words, add them to the where clause
    if (otherWords) {
      whereClause = {
        ...whereClause,
        OR: otherWords.split(',').map(word => ({ 
          OR: [
            { title: { contains: word, mode: 'insensitive' } },
            { content: { contains: word, mode: 'insensitive' } },
          ]
        })),
      };
    }

    // If there are words to exclude, add them to the where clause
    if (excludeWords) {
      whereClause = {
        ...whereClause,
        NOT: excludeWords.split(',').map(word => ({
          OR: [
            { title: { contains: word, mode: 'insensitive' } },
            { content: { contains: word, mode: 'insensitive' } },
          ]
        })),
      };
    }

    const documents = await prisma.document.findMany({
      where: whereClause,
    });

    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while performing the search." });
  }
}
