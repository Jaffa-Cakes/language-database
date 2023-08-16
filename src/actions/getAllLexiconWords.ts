"use server";

import prisma from "@/db";
import { MorphType, DialectLabel } from "@prisma/client";

export interface IGetAllLexiconWordsReturns {
	id: number;
	spelling: string;
	morphType: MorphType | null;
	dialectLabels: DialectLabel[];
	pronunciation: string | null;
	references: {
		id: number;
		spelling: string;
		entry: {
			id: number;
			source: {
				id: number;
				name: string;
			};
		};
	}[];
	senses: {
		id: number;
		gloss: string;
		reversalEntries: string | null;
		definition: string | null;
	}[];
}

export default async function Action(): Promise<IGetAllLexiconWordsReturns[]> {
	let wordsRaw = await prisma.word.findMany({
		select: {
			id: true,
			spelling: true,
			morphType: true,
			dialectLabels: true,
			pronunciation: true,
			references: {
				select: {
					id: true,
					spelling: true,
					entry: {
						select: {
							id: true,
							source: {
								select: {
									id: true,
									name: true,
								},
							},
						},
					},
				},
			},
			senses: {
				select: {
					id: true,
					gloss: true,
					reversalEntries: true,
					definition: true,
				},
			},
		},
	});

	const words = wordsRaw.map((wordRaw) => {
		return {
			id: wordRaw.id,
			spelling: wordRaw.spelling,
			morphType: wordRaw.morphType,
			dialectLabels: wordRaw.dialectLabels,
			pronunciation: wordRaw.pronunciation,
			references: wordRaw.references.map((referenceRaw) => {
				return {
					id: referenceRaw.id,
					spelling: referenceRaw.spelling,
					entry: {
						id: referenceRaw.entry.id,
						source: {
							id: referenceRaw.entry.source?.id as number,
							name: referenceRaw.entry.source?.name as string,
						},
					},
				};
			}),
			senses: wordRaw.senses.map((senseRaw) => {
				return {
					id: senseRaw.id,
					gloss: senseRaw.gloss,
					reversalEntries: senseRaw.reversalEntries,
					definition: senseRaw.definition,
				};
			}),
		};
	});

	return words;
}
