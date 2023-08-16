import Reference from "./Reference";
import Senses from "./Senses";
import { MorphType, DialectLabel } from "@prisma/client";

export default interface Word {
	spelling: string;
	morphType?: MorphType;
	dialectLabels: DialectLabel[];
	pronunciation?: string;
	references: Reference[];
	senses: Senses[];
}
