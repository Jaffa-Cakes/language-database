"use server";

import prisma from "@/db";

export default async function Action(id: number): Promise<void> {
	await prisma.word.delete({
		where: {
			id: id,
		},
	});
}
