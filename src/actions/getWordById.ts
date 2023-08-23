"use server";

import prisma from "@/db";

interface Returns {
    english: string;
    language: string;
    sonetic: string;
    notes: string;
}

export default async function Action(id: number): Promise<Returns> {
	const record = await prisma.data.findUnique({
        select: {
            english: true,
            language: true,
            sonetic: true,
            notes: true,
        },
		where: {
			id: id,
		},
	});

    if (record == null) throw new Error("Record not found");

    return {
        english: record.english ? record.english : "",
        language: record.language ? record.language : "",
        sonetic: record.sonetic ? record.sonetic : "",
        notes: record.notes ? record.notes : "",
    };
}
