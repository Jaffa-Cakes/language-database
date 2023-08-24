"use server";

import prisma from "@/db";

interface Returns {
	id: string;
	english: string;
	language: string;
	sonetic: string;
	notes: string;
}

export default async function Action(ids: number[]): Promise<Returns[]> {
	const records = await prisma.data.findMany({
		select: {
			id: true,
			english: true,
			language: true,
			sonetic: true,
			notes: true,
		},
		where: {
			id: {
				in: ids,
			},
		},
	});

	let out: Returns[] = [];

	records.forEach((record) => {
		out.push({
			id: record.id ? record.id.toString() : "",
			english: record.english ? record.english : "",
			language: record.language ? record.language : "",
			sonetic: record.sonetic ? record.sonetic : "",
			notes: record.notes ? record.notes : "",
		});
	});

	return out;
}
