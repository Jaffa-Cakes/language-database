"use client";

import CsvField from "./_components/CsvField";
import { Box, Button, Flex } from "@chakra-ui/react";
import runImport, { CsvData, CsvLexicon, CsvSource } from "./_actions/runImport";

import { useState } from "react";

export default function Page() {
	const [sources, setSources] = useState<CsvSource[]>([]);
	const [lexicon, setLexicon] = useState<CsvLexicon[]>([]);
	const [data, setData] = useState<CsvData[]>([]);

	async function doImport() {
		await runImport(sources, lexicon, data);
	}

	return (
		<Box h="100%">
			<Flex flexDir="row" placeContent="center" h="100%">
				<Flex flexDir="column" placeContent="center" pb="32">
					<CsvField name="Sources" setData={setSources} />
					<CsvField name="Lexicon" setData={setLexicon} />
					<CsvField name="Data" setData={setData} />

					<Button onClick={doImport} backgroundColor="green.700">
						Import
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
