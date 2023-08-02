"use server";

import prisma from "@/db";
import { Source } from "@prisma/client";

export type { Source };

interface Params {
	id: string;
	name: string;
	fileName: string;
	reference: string;
	publicationType: string;
	documentType: string;
	location: string;
	sourceLangName: string;
	langName: string;
	notes: string;
}

export default async function Action(params: Params): Promise<Source[]> {
	return await prisma.source.findMany({
		where: {
			id: params.id === "" ? undefined : parseInt(params.id),
			name: {
				contains: params.name,
				mode: "insensitive",
			},
			fileName: {
				contains: params.fileName,
				mode: "insensitive",
			},
			reference: {
				contains: params.reference,
				mode: "insensitive",
			},
			publicationType: {
				contains: params.publicationType,
				mode: "insensitive",
			},
			documentType: {
				contains: params.documentType,
				mode: "insensitive",
			},
			location: {
				contains: params.location,
				mode: "insensitive",
			},
			sourceLangName: {
				contains: params.sourceLangName,
				mode: "insensitive",
			},
			langName: {
				contains: params.langName,
				mode: "insensitive",
			},
			notes: {
				contains: params.notes,
				mode: "insensitive",
			},
		},
	});
}
