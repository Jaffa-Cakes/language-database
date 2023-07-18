"use server"

import prisma from "@/db";

export interface CsvSource {
    name: string,
    id: string,
    flow_scanned: string,
    flow_entered: string,
    file_name: string,
    reference: string,
    publication_type: string,
    document_type: string,
    collector: string,
    consultants: string,
    date: string,
    location: string,
    source_lang_name: string,
    lang_name: string,
    notes: string,
}

export interface CsvLexicon {
    category: string,
    english: string,
    category_name: string,
    grammer: string,
}

export interface CsvData {
    source: string,
    id: string,
    english: string,
    language: string,
    sonetic: string,
    type: string,
    semantic_category: string,
    semantic_id: string,
    notes: string,
}

interface Source {
    name: string
    fileName: string
    reference: string
    publicationType: string
    documentType: string
    location: string
    sourceLangName: string
    langName: string
    notes: string
}

interface Data {
    sourceId: number
    english: string
    language: string
    sonetic: string
    notes: string
}

export default async function Action(csvSources: CsvSource[], csvLexicons: CsvLexicon[], csvData: CsvData[]) {
    const sources: Source[] = []
    const data: Data[] = []

    csvSources.forEach((csvSource) => {
        sources.push({
            name: csvSource.name,
            fileName: csvSource.file_name,
            reference: csvSource.reference,
            publicationType: csvSource.publication_type,
            documentType: csvSource.document_type,
            location: csvSource.location,
            sourceLangName: csvSource.source_lang_name,
            langName: csvSource.lang_name,
            notes: csvSource.notes,
        });
    });

    await prisma.source.deleteMany();
    await prisma.source.createMany({
        data: sources,
    });

    const sourceIds = await prisma.source.findMany({
        select: {
            id: true,
            name: true,
        },
    });

    const sourceIdMap = new Map<string, number>();
    sourceIds.forEach((sourceId) => {
        sourceIdMap.set(sourceId.name as string, sourceId.id);
    });

    csvData.forEach((csvData) => {
        data.push({
            sourceId: sourceIdMap.get(csvData.source) as number,
            english: csvData.english,
            language: csvData.language,
            sonetic: csvData.sonetic,
            notes: csvData.notes,
        });
    });

    await prisma.data.deleteMany();
    await prisma.data.createMany({
        data: data,
    });
}