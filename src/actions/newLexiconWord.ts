"use server";

import prisma from "@/db";

export interface Word {
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
}

export default async function Action(word: Word) {
	await prisma.lexiconWord.create({
		data: {
			lexemeForm: word.lexemeForm,
			morphType: word.morphType,
			dialectLabels: word.dialectLabels,
			variantOf: word.variantOf,
			pronounciation: word.pronounciation,
		},
	});
}
