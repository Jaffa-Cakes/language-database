export default function grammaticalInfoPretty(grammaticalInfo: string): string {
	switch (grammaticalInfo) {
		case "ADVERB":
			return "Adverb";
		case "COORDINATINGCONNECTIVE":
			return "Coordinating Connective";
		case "NOUN":
			return "Noun";
		case "PROFORM":
			return "Proform";
		case "PRONOUN":
			return "Pronoun";
		case "VERB":
			return "Verb";
		default:
			return "Unknown";
	}
}
