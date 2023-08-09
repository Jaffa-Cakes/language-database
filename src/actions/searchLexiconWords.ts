"use server";

import prisma from "@/db";

export interface Data {
	id: number;
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
	variants: {
		id: number;
		variantForm?: string;
		dialectLabels?: string;
		variantType?: string;
		comment?: string;
	}[]
}

interface Params {
	id: string;
	lexemeForm: string;
	morphType: string;
	dialectLabels: string;
	variantOf: string;
	pronounciation: string;
}

export default async function Action(params: Params): Promise<Data[]> {
	const results = await prisma.lexiconWord.findMany({
		select: {
			id: true,
			lexemeForm: true,
			morphType: true,
			dialectLabels: true,
			variantOf: true,
			pronounciation: true,
			variant: {
				select: {
					id: true,
					variantForm: true,
					dialectLabels: true,
					variantType: true,
					comment: true,
				}
			}
		},
		where: {
			id: params.id === "" ? undefined : parseInt(params.id),
			lexemeForm: {
				contains: params.lexemeForm,
				mode: "insensitive",
			},
			morphType: {
				contains: params.morphType,
				mode: "insensitive",
			},
			dialectLabels: {
				contains: params.dialectLabels,
				mode: "insensitive",
			},
			variantOf: {
				contains: params.variantOf,
				mode: "insensitive",
			},
			pronounciation: {
				contains: params.pronounciation,
				mode: "insensitive",
			},
		},
	});

	const out: Data[] = results.map((result) => {
		return {
			id: result.id,
			lexemeForm: result.lexemeForm === null ? undefined : result.lexemeForm,
			morphType: result.morphType === null ? undefined : result.morphType,
			dialectLabels: result.dialectLabels === null ? undefined : result.dialectLabels,
			variantOf: result.variantOf === null ? undefined : result.variantOf,
			pronounciation: result.pronounciation === null ? undefined : result.pronounciation,
			variants: result.variant.map((variant) => {
				return {
					id: variant.id,
					variantForm: variant.variantForm === null ? undefined : variant.variantForm,
					dialectLabels: variant.dialectLabels === null ? undefined : variant.dialectLabels,
					variantType: variant.variantType === null ? undefined : variant.variantType,
					comment: variant.comment === null ? undefined : variant.comment,
				};
			})
		};
	});

	return out;
}
