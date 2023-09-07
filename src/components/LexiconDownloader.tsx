"use client";

import Lift from "@/Lift";
import Word from "@/Lift/Word";
import getWords from "@/actions/getWords";
import { Button } from "@chakra-ui/react";

interface Props {}

export default function Component(props: Props) {
	async function handleExport() {
		const wordsRaw = await getWords();

		const words: Word[] = wordsRaw.map((word) => {
			return {
				spelling: word.spelling,
				morphType: word.morphType ? word.morphType : undefined,
				dialectLabels: word.dialectLabels,
				pronunciation: word.pronunciation
					? word.pronunciation
					: undefined,
				references: word.references.map((reference) => {
					return {
						spelling: reference.spelling,
						source: reference.entry.source.name,
						entry: reference.entry.id as unknown as string,
					};
				}),
				senses: word.senses.map((sense) => {
					return {
						gloss: sense.gloss,
						reversalEntries: sense.reversalEntries
							? sense.reversalEntries
							: undefined,
						definition: sense.definition
							? sense.definition
							: undefined,
						grammaticalInfo: sense.grammaticalInfo
							? sense.grammaticalInfo
							: undefined,
					};
				}),
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
