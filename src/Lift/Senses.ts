import { GrammaticalInfo } from "@prisma/client";

export default interface Senses {
	gloss: string;
	reversalEntries?: string;
	definition?: string;
	grammaticalInfo?: GrammaticalInfo;
}
