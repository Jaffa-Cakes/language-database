"use server";

import prisma from "@/db";
import { Data } from "@prisma/client";

export type { Data };

interface Params {
	id: string;
	sourceId: string;
	english: string;
	language: string;
	sonetic: string;
	notes: string;
}

export default async function Action(params: Params): Promise<Data[]> {
	return await prisma.data.findMany({
		where: {
			id: params.id === "" ? undefined : parseInt(params.id),
			sourceId:
				params.sourceId === "" ? undefined : parseInt(params.sourceId),
			english: {
				contains: params.english,
				mode: "insensitive",
			},
			language: {
				contains: params.language,
				mode: "insensitive",
			},
			sonetic: {
				contains: params.sonetic,
				mode: "insensitive",
			},
			notes: {
				contains: params.notes,
				mode: "insensitive",
			},
		},
	});
}
