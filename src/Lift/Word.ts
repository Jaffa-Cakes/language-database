import { IVariant } from "@/actions/newLexiconWord";

export default interface Word {
	id: number;
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
	variants: IVariant[];
}
