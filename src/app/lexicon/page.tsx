"use client";

import LexiconDownloader from "@/components/LexiconDownloader";
import getWords, { Returns as getWordsReturns } from "@/actions/getWords";
import { useContext, useEffect, useState } from "react";
import {
	Button,
	Flex,
	HStack,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { dialectLabelPretty, morphTypePretty } from "@/utils";
import MainTableContainer from "@/components/tables/MainTableContainer";
import TData from "@/components/tables/TData";
import deleteWord from "@/actions/deleteWord";

import TranslationPanelContext from "@/components/TranslationPanel/Context";

export default function Page() {
	// Context
	const { translationPanel, setTranslationPanel } = useContext(
		TranslationPanelContext,
	);
	const [words, setWords] = useState<getWordsReturns[]>([]);

	async function refresh() {
		const newResults = await getWords();
		setWords(newResults);
	}

	useEffect(() => {
		(async () => {
			await refresh();
		})();
	}, []);

	async function doDeleteWord(id: number) {
		await deleteWord(id);
		await refresh();
	}

	function editWord(id: number) {
		setTranslationPanel({
			editId: id,
		});
	}

	let keyHelper = 0;

	const columns = [
		"ID",
		"Lexeme Form",
		"Morph Type",
		"Dialect Labels",
		"Pronunciation",
		"Senses",
		"References",
	];

	const headings = (
		<Tr>
			{columns.map((column, i) => (
				<Th key={i} maxW={25}>
					{column}
				</Th>
			))}
			<Th textAlign="center" maxW={15}>
				Options
			</Th>
		</Tr>
	);

	const records = words.map((word) => {
		const morphType = word.morphType ? morphTypePretty(word.morphType) : "";
		const dialectLabels = word.dialectLabels
			.map((dialectLabel) => dialectLabelPretty(dialectLabel))
			.join(", ");
		const senses = word.senses.map((sense) => sense.definition).join(" | ");
		const references = word.references
			.map((reference) => reference.spelling)
			.join(", ");

		return [
			word.id,
			word.spelling,
			morphType,
			dialectLabels,
			word.pronunciation,
			senses,
			references,
		];
	});

	return (
		<>
			<Flex flexDir="row" w="full" justifyContent="center" mt="5">
				<LexiconDownloader />
			</Flex>

			<Flex flexDir="row" w="full" justifyContent="center" mt="5">
				<Button onClick={() => refresh()}>Refresh</Button>
			</Flex>

			<MainTableContainer
				total={{
					start: 0,
					end: words.length,
					total: words.length,
				}}
			>
				<Thead>{headings}</Thead>

				<Tbody>
					{records.map((record) => {
						keyHelper++;
						return (
							<Tr key={keyHelper}>
								{record.map((value) => {
									keyHelper++;
									return (
										<TData key={keyHelper}>{value}</TData>
									);
								})}
								<Td maxW={15}>
									<HStack spacing="2" justifyContent="center">
										<Button
											size="xs"
											background="purple.600"
											onClick={(e) =>
												editWord(record[0] as number)
											}
										>
											/
										</Button>
										<Button
											size="xs"
											background="red.600"
											onClick={(e) =>
												doDeleteWord(
													record[0] as number,
												)
											}
										>
											-
										</Button>
									</HStack>
								</Td>
							</Tr>
						);
					})}
				</Tbody>

				<Tfoot>{headings}</Tfoot>
			</MainTableContainer>
		</>
	);
}
