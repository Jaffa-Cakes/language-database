"use server";

import prisma from "@/db";
import { MorphType, DialectLabel } from "@prisma/client";

export interface IWord {
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
	}[];
}

export default async function Action(word: IWord) {
	await prisma.word.create({
		data: {
			spelling: word.spelling,
			morphType: word.morphType,
			dialectLabels: word.dialectLabels,
			pronunciation: word.pronunciation,
			senses: {
				create: word.senses.map((sense) => {
					return {
						gloss: sense.gloss,
					};
				}),
			},
		},
	});
}
