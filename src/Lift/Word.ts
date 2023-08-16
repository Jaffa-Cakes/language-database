import Reference from "./Reference";
import { MorphType } from "@prisma/client";

export default interface Word {
	spelling: string;
	morphType?: MorphType;
	references: Reference[];
}
