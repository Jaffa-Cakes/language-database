import { MorphType } from "@prisma/client";

export default function getMorphType(morphType: string): MorphType | undefined {
	switch (morphType) {
		case "BOUNDROOT":
			return MorphType.BOUNDROOT;
		case "BOUNDSTEM":
			return MorphType.BOUNDSTEM;
		case "CLITIC":
			return MorphType.CLITIC;
		case "DISCONTIGUOUSPHRASE":
			return MorphType.DISCONTIGUOUSPHRASE;
		case "ENCLITIC":
			return MorphType.ENCLITIC;
		case "PARTICLE":
			return MorphType.PARTICLE;
		case "PHRASE":
			return MorphType.PHRASE;
		case "PROCLITIC":
			return MorphType.PROCLITIC;
		case "ROOT":
			return MorphType.ROOT;
		case "STEM":
			return MorphType.STEM;
		default:
			return undefined;
	}
}