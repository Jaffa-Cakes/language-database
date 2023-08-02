"use server";

import prisma from "@/db";

export default async function Action(sql: string): Promise<unknown[]> {
	return await prisma.$queryRawUnsafe(sql);
}
