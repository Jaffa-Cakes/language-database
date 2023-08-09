"use server";

import prisma from "@/db";

export interface Data {
	id: number;
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
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

	return results as Data[];
}
