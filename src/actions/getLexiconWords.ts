"use server";

import prisma from "@/db";

export default async function Action() {
	return await prisma.lexiconWord.findMany();
}
