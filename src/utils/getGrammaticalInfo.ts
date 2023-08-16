import { GrammaticalInfo } from "@prisma/client";

export default function getGrammaticalInfo(
	grammaticalInfo: string,
): GrammaticalInfo | undefined {
	switch (grammaticalInfo) {
		case "ADVERB":
			return GrammaticalInfo.ADVERB;
		case "COORDINATINGCONNECTIVE":
			return GrammaticalInfo.COORDINATINGCONNECTIVE;
		case "NOUN":
			return GrammaticalInfo.NOUN;
		case "PROFORM":
			return GrammaticalInfo.PROFORM;
		case "PRONOUN":
			return GrammaticalInfo.PRONOUN;
		case "VERB":
			return GrammaticalInfo.VERB;
		default:
			return undefined;
	}
}
