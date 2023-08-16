"use server";

import prisma from "@/db";

export interface Word {
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
	variantsDefinition: IVariant[];
}

export interface IVariant {
	variantForm?: string;
	dialectLabels?: string;
	variantType?: string;
	comment?: string;
}

export default async function Action(word: Word) {
	const lexiconWord = await prisma.word.create({
		data: {
			lexemeForm: word.lexemeForm,
			// morphType: word.morphType,
			// dialectLabels: word.dialectLabels,
			pronounciation: word.pronounciation
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
