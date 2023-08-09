"use client";

import Lift from "@/Lift";
import Word from "@/Lift/Word";
import getLexiconWords from "@/actions/getLexiconWords";
import { Button } from "@chakra-ui/react";

interface Props {}

export default function Component(props: Props) {
	async function handleExport() {
		const wordsRaw = await getLexiconWords();

		const words: Word[] = wordsRaw.map((word) => {
			return {
        id: word.id,
				lexemeForm: word.lexemeForm || undefined,
				morphType: word.morphType || undefined,
				dialectLabels: word.dialectLabels || undefined,
				variantOf: word.variantOf || undefined,
				pronounciation: word.pronounciation || undefined,
			};
		});

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
