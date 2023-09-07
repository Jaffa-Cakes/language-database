"use server";

import prisma from "@/db";

export default async function Action(id: number): Promise<void> {
	await prisma.entry.delete({
		where: {
			id: id,
		},
	});
}
