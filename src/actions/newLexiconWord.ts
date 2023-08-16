"use server";

import prisma from "@/db";

export interface IWord {
	spelling: string;
	references: {
		spelling: string;
		entry: number;
	}[]
}

export default async function Action(word: IWord) {
	const lexiconWord = await prisma.word.create({
		data: {
			spelling: word.spelling,
			// morphType: word.morphType,
			// dialectLabels: word.dialectLabels,
			// pronounciation: word.pronounciation,
		},
	});

	// await prisma.variant.createMany({
	// 	data: word.variantsDefinition.map((variant) => {
	// 		return {
	// 			variantForm: variant.variantForm,
	// 			dialectLabels: variant.dialectLabels,
	// 			variantType: variant.variantType,
	// 			comment: variant.comment,
	// 			lexiconWordId: lexiconWord.id
	// 		};
	// 	}
	// )});
}
