"use server";

import prisma from "@/db";

export interface Data {
	id: number;
	english?: string | null;
	language?: string | null;
	sonetic?: string | null;
	notes?: string | null;
	sourceId?: number | null;
	sourceName?: string | null;
	sourceFileName?: string | null;
	sourceReference?: string | null;
	sourcePublicationType?: string | null;
	sourceDocumentType?: string | null;
	sourceLocation?: string | null;
	sourceLanguage?: string | null;
	sourceLanguageName?: string | null;
	sourceNotes?: string | null;
}

interface Params {
	id?: string;
	english?: string;
	language?: string;
	sonetic?: string;
	notes?: string;
	sourceId?: string;
	sourceName?: string;
	sourceFileName?: string;
	sourceReference?: string;
	sourcePublicationType?: string;
	sourceDocumentType?: string;
	sourceLocation?: string;
	sourceLanguage?: string;
	sourceLanguageName?: string;
	sourceNotes?: string;
}

export default async function Action(params: Params): Promise<Data[]> {
	let where: any = {};

	if (params.id !== undefined && !Number.isNaN(parseInt(params.id)))
		where.id = parseInt(params.id);
	if (params.english !== undefined)
		where.english = generateConstraint(params.english);
	if (params.language !== undefined)
		where.language = generateConstraint(params.language);
	if (params.sonetic !== undefined)
		where.sonetic = generateConstraint(params.sonetic);
	if (params.notes !== undefined)
		where.notes = generateConstraint(params.notes);
	if (
		params.sourceId !== undefined &&
		!Number.isNaN(parseInt(params.sourceId))
	)
		where.sourceId = parseInt(
			params.sourceId == "" ? "0" : params.sourceId,
		);

	const results = await prisma.entry.findMany({
		select: {
			id: true,
			english: true,
			language: true,
			sonetic: true,
			notes: true,
			sourceId: true,
			source: {
				select: {
					name: true,
					fileName: true,
					reference: true,
					publicationType: true,
					documentType: true,
					location: true,
					// language: true,
					// languageName: true,
					notes: true,
				},
			},
		},
		where: where,
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

function generateConstraint<T>(contains: T) {
	return {
		contains: contains,
		mode: "insensitive",
	};
}
