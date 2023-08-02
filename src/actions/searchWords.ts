"use server";

import prisma from "@/db";

export interface Data {
	id: number;
	sourceId: number | null;
	sourceName: string | null;
	english: string | null;
	language: string | null;
	sonetic: string | null;
	notes: string | null;
}

interface Params {
	id: string;
	sourceId: string;
	english: string;
	language: string;
	sonetic: string;
	notes: string;
}

export default async function Action(params: Params): Promise<Data[]> {
	const results =  await prisma.data.findMany({
		select: {
			id: true,
			sourceId: true,
			source: {
				select: {
					name: true,
				},
			},
			english: true,
			language: true,
			sonetic: true,
			notes: true,
		},
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

	let out: Data[] = [];

	results.forEach((result) => {

		let name: string | null = null;

		if (result.source !== null) {
			name = result.source.name;
		}

		out.push({
			id: result.id,
			sourceId: result.sourceId,
			sourceName: name,
			english: result.english,
			language: result.language,
			sonetic: result.sonetic,
			notes: result.notes,
		});
	});

	return out;
}
