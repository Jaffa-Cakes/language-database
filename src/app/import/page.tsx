"use client";

import CsvField from "./_components/CsvField";
import { Box, Button, Flex } from "@chakra-ui/react";
import runImport, {
	CsvData,
	CsvLexicon,
	CsvSource,
} from "./_actions/runImport";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	const [sources, setSources] = useState<CsvSource[]>([]);
	const [lexicon, setLexicon] = useState<CsvLexicon[]>([]);
	const [data, setData] = useState<CsvData[]>([]);

	const [importing, setImporting] = useState<boolean>(false);

	async function doImport() {
		setImporting(true);
		await runImport(sources, lexicon, data);
		router.replace("/search/words");
	}

	return (
		<Box h="100%">
			<Flex flexDir="row" placeContent="center" h="100%">
				<Flex flexDir="column" placeContent="center" pb="32">
					<CsvField name="Sources" setData={setSources} />
					{/* <CsvField name="Lexicon" setData={setLexicon} /> */}
					<CsvField name="Entries" setData={setData} />

					<Button onClick={doImport} backgroundColor="green.700">
						{importing ? "Importing..." : "Import"}
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}
