export default interface Word {
	id: number;
	lexemeForm?: string;
	morphType?: string;
	dialectLabels?: string;
	variantOf?: string;
	pronounciation?: string;
}
