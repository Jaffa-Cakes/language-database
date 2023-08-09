"use client";

import Lift from "@/Lift";
import Word from "@/Lift/Word";
import searchLexiconWords from "@/actions/searchLexiconWords";
import { Button } from "@chakra-ui/react";

interface Props {}

export default function Component(props: Props) {
	async function handleExport() {
		const wordsRaw = await searchLexiconWords({
			id: "",
			lexemeForm: "",
			morphType: "",
			dialectLabels: "",
			variantOf: "",
			pronounciation: "",
		});

		const words: Word[] = wordsRaw.map((word) => {

			console.log(word.variants);

			return {
        id: word.id,
				lexemeForm: word.lexemeForm || undefined,
				morphType: word.morphType || undefined,
				dialectLabels: word.dialectLabels || undefined,
				variantOf: word.variantOf || undefined,
				pronounciation: word.pronounciation || undefined,
				variants: word.variants.map((variant) => {
					return {
						id: variant.id,
						variantForm: variant.variantForm || undefined,
						dialectLabels: variant.dialectLabels || undefined,
						variantType: variant.variantType || undefined,
						comment: variant.comment || undefined,
					};
				}),
			};
		});

		console.log(words);

		const lift = new Lift(words);

		const blob = new Blob([lift.toXml()], { type: "application/xml" });

		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");

		const date = new Date();

		link.href = url;
		link.download = "lexicon" + +date.toISOString() + ".lift";

		link.click();
	}

	return (
		<Button onClick={handleExport} w="46" size="lg">
			Export Lexicon
		</Button>
	);
}
