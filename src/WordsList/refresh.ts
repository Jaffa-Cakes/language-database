"use server";

import prisma from "@/db";

import WordsList, { Column, Filters } from ".";

interface OrderBy {
	id?: "asc" | "desc";
	english?: "asc" | "desc";
	language?: "asc" | "desc";
	sonetic?: "asc" | "desc";
	notes?: "asc" | "desc";
	source?: {
		id?: "asc" | "desc";
		name?: "asc" | "desc";
		fileName?: "asc" | "desc";
		reference?: "asc" | "desc";
		publicationType?: "asc" | "desc";
		documentType?: "asc" | "desc";
		location?: "asc" | "desc";
		notes?: "asc" | "desc";
	};
}

interface Select {
	id?: boolean;
	english?: boolean;
	language?: boolean;
	sonetic?: boolean;
	notes?: boolean;
	source?: {
		select: {
			id?: boolean;
			name?: boolean;
			fileName?: boolean;
			reference?: boolean;
			publicationType?: boolean;
			documentType?: boolean;
			location?: boolean;
			notes?: boolean;
		};
	};
}

interface Where {
	id?: number;
	english?: {
		contains: string;
		mode: "insensitive";
	};
	language?: {
		contains: string;
		mode: "insensitive";
	};
	sonetic?: {
		contains: string;
		mode: "insensitive";
	};
	notes?: {
		contains: string;
		mode: "insensitive";
	};
	source?: {
		id?: number;
		name?: {
			contains: string;
			mode: "insensitive";
		};
		fileName?: {
			contains: string;
			mode: "insensitive";
		};
		reference?: {
			contains: string;
			mode: "insensitive";
		};
		publicationType?: {
			contains: string;
			mode: "insensitive";
		};
		documentType?: {
			contains: string;
			mode: "insensitive";
		};
		location?: {
			contains: string;
			mode: "insensitive";
		};
		notes?: {
			contains: string;
			mode: "insensitive";
		};
	};
}

export default async function refresh(
	columns: Column[],
	filters: Filters,
	sortBy: Column,
	sortDirection: "asc" | "desc"
): Promise<string[][]> {
	console.log(sortBy);
	const orderBy = generateOrderBy(sortBy, sortDirection);
	const select = generateSelect(columns);
	const where = generateWhere(columns, filters);

	const results = await prisma.entry.findMany({
		orderBy: orderBy,
		select: select,
		where: where,
	});

	let out: string[][] = [];

	results.forEach((result) => {
		let record: string[] = [];

		if (columns.includes(Column.Id)) {
			let id = result.id ? result.id.toString() : "";
			record.push(id);
		}

		if (columns.includes(Column.English)) {
			let english = result.english ? result.english : "";
			record.push(english);
		}

		if (columns.includes(Column.Language)) {
			let language = result.language ? result.language : "";
			record.push(language);
		}

		if (columns.includes(Column.Sonetic)) {
			let sonetic = result.sonetic ? result.sonetic : "";
			record.push(sonetic);
		}

		if (columns.includes(Column.Notes)) {
			let notes = result.notes ? result.notes : "";
			record.push(notes);
		}

		if (columns.includes(Column.SourceId)) {
			let sourceId = result.source?.id ? result.source.id.toString() : "";
			record.push(sourceId);
		}

		if (columns.includes(Column.SourceName)) {
			let sourceName = result.source?.name ? result.source.name : "";
			record.push(sourceName);
		}

		if (columns.includes(Column.SourceFileName)) {
			let sourceFileName = result.source?.fileName
				? result.source.fileName
				: "";
			record.push(sourceFileName);
		}

		if (columns.includes(Column.SourceReference)) {
			let sourceReference = result.source?.reference
				? result.source.reference
				: "";
			record.push(sourceReference);
		}

		if (columns.includes(Column.SourcePublicationType)) {
			let sourcePublicationType = result.source?.publicationType
				? result.source.publicationType
				: "";
			record.push(sourcePublicationType);
		}

		if (columns.includes(Column.SourceDocumentType)) {
			let sourceDocumentType = result.source?.documentType
				? result.source.documentType
				: "";
			record.push(sourceDocumentType);
		}

		if (columns.includes(Column.SourceLocation)) {
			let sourceLocation = result.source?.location
				? result.source.location
				: "";
			record.push(sourceLocation);
		}

		if (columns.includes(Column.SourceNotes)) {
			let sourceNotes = result.source?.notes ? result.source.notes : "";
			record.push(sourceNotes);
		}

		out.push(record);
	});

	return out;
}

function generateOrderBy(column: Column, sortDirection: "asc" | "desc"): OrderBy {
	let orderBy = {};

	switch (column) {
		case Column.Id:
			orderBy = { id: sortDirection };
			break;
		case Column.English:
			orderBy = { english: sortDirection };
			break;
		case Column.Language:
			orderBy = { language: sortDirection };
			break;
		case Column.Sonetic:
			orderBy = { sonetic: sortDirection };
			break;
		case Column.Notes:
			orderBy = { notes: sortDirection };
			break;
		case Column.SourceId:
			orderBy = { source: { id: sortDirection } };
			break;
		case Column.SourceName:
			orderBy = { source: { name: sortDirection } };
			break;
		case Column.SourceFileName:
			orderBy = { source: { fileName: sortDirection } };
			break;
		case Column.SourceReference:
			orderBy = { source: { reference: sortDirection } };
			break;
		case Column.SourcePublicationType:
			orderBy = { source: { publicationType: sortDirection } };
			break;
		case Column.SourceDocumentType:
			orderBy = { source: { documentType: sortDirection } };
			break;
		case Column.SourceLocation:
			orderBy = { source: { location: sortDirection } };
			break;
		case Column.SourceNotes:
			orderBy = { source: { notes: sortDirection } };
			break;
	}

	return orderBy;
}


function generateSelect(columns: Column[]): Select {
	function ensureSourceExists(select: Select): Select {
		if (select.source === undefined)
			select.source = {
				select: {},
			};

		return select;
	}

	let select: Select = {};

	columns.forEach((column) => {
		switch (column) {
			case Column.Id:
				select.id = true;
				break;
			case Column.English:
				select.english = true;
				break;
			case Column.Language:
				select.language = true;
				break;
			case Column.Sonetic:
				select.sonetic = true;
				break;
			case Column.Notes:
				select.notes = true;
				break;
			case Column.SourceId:
				select = ensureSourceExists(select);
				select.source!.select!.id = true;
				break;
			case Column.SourceName:
				select = ensureSourceExists(select);
				select.source!.select!.name = true;
				break;
			case Column.SourceFileName:
				select = ensureSourceExists(select);
				select.source!.select!.fileName = true;
				break;
			case Column.SourceReference:
				select = ensureSourceExists(select);
				select.source!.select!.reference = true;
				break;
			case Column.SourcePublicationType:
				select = ensureSourceExists(select);
				select.source!.select!.publicationType = true;
				break;
			case Column.SourceDocumentType:
				select = ensureSourceExists(select);
				select.source!.select!.documentType = true;
				break;
			case Column.SourceLocation:
				select = ensureSourceExists(select);
				select.source!.select!.location = true;
				break;
			case Column.SourceNotes:
				select = ensureSourceExists(select);
				select.source!.select!.notes = true;
				break;
		}
	});

	return select;
}

function generateWhere(columns: Column[], filters: Filters): Where {
	function ensureSourceExists(select: Where): Where {
		if (select.source === undefined) select.source = {};

		return select;
	}

	let select: Where = {};

	columns.forEach((column) => {
		switch (column) {
			case Column.Id:
				if (filters.Id !== undefined) select.id = parseInt(filters.Id);
				break;
			case Column.English:
				if (filters.English !== undefined) {
					select.english = {
						contains: filters.English,
						mode: "insensitive",
					};
				}
				break;
			case Column.Language:
				if (filters.Language !== undefined) {
					select.language = {
						contains: filters.Language,
						mode: "insensitive",
					};
				}
				break;
			case Column.Sonetic:
				if (filters.Sonetic !== undefined) {
					select.sonetic = {
						contains: filters.Sonetic,
						mode: "insensitive",
					};
				}
				break;
			case Column.Notes:
				if (filters.Notes !== undefined) {
					select.notes = {
						contains: filters.Notes,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceId:
				if (filters.SourceId !== undefined) {
					select = ensureSourceExists(select);
					select.source!.id = parseInt(filters.SourceId);
				}
				break;
			case Column.SourceName:
				if (filters.SourceName !== undefined) {
					select = ensureSourceExists(select);
					select.source!.name = {
						contains: filters.SourceName,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceFileName:
				if (filters.SourceFileName !== undefined) {
					select = ensureSourceExists(select);
					select.source!.fileName = {
						contains: filters.SourceFileName,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceReference:
				if (filters.SourceReference !== undefined) {
					select = ensureSourceExists(select);
					select.source!.reference = {
						contains: filters.SourceReference,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourcePublicationType:
				if (filters.SourcePublicationType !== undefined) {
					select = ensureSourceExists(select);
					select.source!.publicationType = {
						contains: filters.SourcePublicationType,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceDocumentType:
				if (filters.SourceDocumentType !== undefined) {
					select = ensureSourceExists(select);
					select.source!.documentType = {
						contains: filters.SourceDocumentType,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceLocation:
				if (filters.SourceLocation !== undefined) {
					select = ensureSourceExists(select);
					select.source!.location = {
						contains: filters.SourceLocation,
						mode: "insensitive",
					};
				}
				break;
			case Column.SourceNotes:
				if (filters.SourceNotes !== undefined) {
					select = ensureSourceExists(select);
					select.source!.notes = {
						contains: filters.SourceNotes,
						mode: "insensitive",
					};
				}
				break;
		}
	});

	return select;
}