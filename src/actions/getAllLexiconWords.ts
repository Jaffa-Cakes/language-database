"use server";

import prisma from "@/db";

export interface IGetAllLexiconWordsReturns {
	id: number;
	spelling: string;
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
}

export default async function Action(): Promise<IGetAllLexiconWordsReturns[]> {
	let wordsRaw = await prisma.word.findMany({
		select: {
			id: true,
			spelling: true,
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
					entry: {
						id: referenceRaw.entry.id,
						source: {
							id: referenceRaw.entry.source?.id as number,
							name: referenceRaw.entry.source?.name as string,
						},
					},
				};
			}),
		};
	});

	return words;
}
