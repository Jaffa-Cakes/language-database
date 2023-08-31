"use server";

import prisma from "@/db";
import { MorphType, DialectLabel, GrammaticalInfo } from "@prisma/client";

export interface IWord {
	spelling: string;
	morphType?: MorphType;
	dialectLabels?: DialectLabel[];
	pronunciation?: string;
	references: {
		spelling: string;
		entry: number;
	}[];
	senses: {
		gloss: string;
		reversalEntries?: string;
		definition?: string;
		grammaticalInfo?: GrammaticalInfo;
	}[];
}

export default async function Action(id: number): Promise<IWord> {
	const record = await prisma.word.findUnique({
		select: {
			spelling: true,
            morphType: true,
            dialectLabels: true,
            pronunciation: true,
            references: {
                select: {
                    spelling: true,
                    entryId: true,
                },
            },
            senses: {
                select: {
                    gloss: true,
                    reversalEntries: true,
                    definition: true,
                    grammaticalInfo: true,
                },
            },
		},
		where: {
			id: id,
		},
	});

	if (record == null) throw new Error("Record not found");

	return {
        spelling: record.spelling,
        morphType: record.morphType ? record.morphType : undefined,
        dialectLabels: record.dialectLabels,
        pronunciation: record.pronunciation ? record.pronunciation : undefined,
        references: record.references.map((reference) => {
            return {
                spelling: reference.spelling,
                entry: reference.entryId,
            };
        }),
        senses: record.senses.map((sense) => {
            return {
                gloss: sense.gloss,
                reversalEntries: sense.reversalEntries ? sense.reversalEntries : undefined,
                definition: sense.definition ? sense.definition : undefined,
                grammaticalInfo: sense.grammaticalInfo ? sense.grammaticalInfo : undefined,
            };
        }),
	};
}
