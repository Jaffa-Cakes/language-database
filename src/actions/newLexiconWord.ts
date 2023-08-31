"use server";

import prisma from "@/db";
import { MorphType, DialectLabel, GrammaticalInfo } from "@prisma/client";

export interface IWord {
	id?: number;
	spelling: string;
	morphType?: MorphType;
	dialectLabels?: DialectLabel[];
	pronunciation?: string;
	references: {
		spelling: string;
		entry: number;
	}[];
	senses: {
		gloss: string;
		reversalEntries?: string;
		definition?: string;
		grammaticalInfo?: GrammaticalInfo;
	}[];
}

export default async function Action(word: IWord) {
	await prisma.word.create({
		data: {
			id: word.id,
			spelling: word.spelling,
			morphType: word.morphType,
			dialectLabels: word.dialectLabels,
			pronunciation: word.pronunciation,
			references: {
				create: word.references.map((reference) => {
					return {
						spelling: reference.spelling,
						entryId: reference.entry,
					};
				}),
			},
			senses: {
				create: word.senses.map((sense) => {
					return {
						gloss: sense.gloss,
						reversalEntries: sense.reversalEntries,
						definition: sense.definition,
						grammaticalInfo: sense.grammaticalInfo,
					};
				}),
			},
		},
	});
}
