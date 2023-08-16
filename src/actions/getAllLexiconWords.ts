"use server"

import prisma from "@/db";

export interface IGetAllLexiconWordsReturns {
    id: number;
    spelling: string;
    references: {
        id: number;
        spelling: string;
        source: {
            id: number;
            name: string;
        }
        entry: {
            id: number;
        }
    }[];
}


export default async function Action(): Promise<IGetAllLexiconWordsReturns[]> {
    let wordsRaw =  await prisma.word.findMany({
        select: {
            id: true,
            spelling: true,
            references: {
                select: {
                    id: true,
                    spelling: true,
                    source: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    entry: {
                        select: {
                            id: true,
                        }
                    }
                }
            }
        },
    });

    const words = wordsRaw.map((wordRaw) => {
        return {
            id: wordRaw.id,
            spelling: wordRaw.spelling,
            references: wordRaw.references.map((referenceRaw) => {
                return {
                    id: referenceRaw.id,
                    spelling: referenceRaw.spelling,
                    source: {
                        id: referenceRaw.source.id,
                        name: referenceRaw.source.name as string,
                    },
                    entry: {
                        id: referenceRaw.entry.id,
                    }
                }
            })
        };
    });

    return words;
}