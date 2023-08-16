import { MorphType } from "@prisma/client";

export default function morphTypePretty(morphType: string): string {
	switch (morphType) {
		case "BOUNDROOT":
			return "Bound Root";
		case "BOUNDSTEM":
			return "Bound Stem";
		case "CLITIC":
			return "Clitic";
		case "DISCONTIGUOUSPHRASE":
			return "Discontiguous Phrase";
		case "ENCLITIC":
			return "Enclitic";
		case "PARTICLE":
			return "Particle";
		case "PHRASE":
			return "Phrase";
		case "PROCLITIC":
			return "Proclitic";
		case "ROOT":
			return "Root";
		case "STEM":
			return "Stem";
		default:
			return "Unknown";
	}
}
