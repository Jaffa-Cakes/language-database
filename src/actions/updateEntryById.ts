"use server";

import prisma from "@/db";

interface Values {
	english: string;
	language: string;
	sonetic: string;
	notes: string;
}

export default async function Action(
	id: number,
	values: Values,
): Promise<void> {
	await prisma.entry.update({
		data: {
			english: values.english == "" ? null : values.english,
			language: values.language == "" ? null : values.language,
			sonetic: values.sonetic == "" ? null : values.sonetic,
			notes: values.notes == "" ? null : values.notes,
		},
		where: {
			id: id,
		},
	});
}
