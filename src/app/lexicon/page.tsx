"use client";

import LexiconDownloader from "@/components/LexiconDownloader";
import getAllLexiconWords, {
	IGetAllLexiconWordsReturns,
} from "@/actions/getAllLexiconWords";
import SimpleTable from "@/components/SimpleTable";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { dialectLabelPretty, morphTypePretty } from "@/utils";

export default function Page() {
	const [words, setWords] = useState<IGetAllLexiconWordsReturns[]>([]);

	useEffect(() => {
		(async () => {
			const newResults = await getAllLexiconWords();
			setWords(newResults);
		})();
	}, []);

	const data = words.map((word) => {
		let morphType = "";
		if (word.morphType !== null) {
			morphType = morphTypePretty(word.morphType);
		}

		const dialectLabels = word.dialectLabels
			.map((dialectLabel) => {
				return dialectLabelPretty(dialectLabel);
			})
			.join(", ");

		return [
			word.id as unknown as string,
			word.spelling,
			morphType,
			dialectLabels,
		];
	});

	return (
		<>
			<Flex flexDir="row" w="full" justifyContent="center" mt="5">
				<LexiconDownloader />
			</Flex>

			<SimpleTable
				headings={["ID", "Lexeme Form", "Morph Type", "Dialect Labels"]}
				data={data}
			/>
		</>
	);
}
