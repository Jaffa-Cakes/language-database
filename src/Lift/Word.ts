import Reference from "./Reference";
import { MorphType, DialectLabel } from "@prisma/client";

export default interface Word {
	spelling: string;
	morphType?: MorphType;
	dialectLabels: DialectLabel[];
	references: Reference[];
}
