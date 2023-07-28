"use client";

import {
	Box,
	Button,
	Flex,
	HStack,
	Input,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useState } from "react";

import searchSources, { Source } from "@/actions/searchSources";

import SimpleTable from "@/components/SimpleTable";
import SearchType from "@/components/SearchType";
import Scratchpad from "@/components/Scratchpad";

export default function Page() {
	const [id, setId] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [fileName, setFileName] = useState<string>("");
	const [reference, setReference] = useState<string>("");
	const [publicationType, setPublicationType] = useState<string>("");
	const [documentType, setDocumentType] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [sourceLangName, setSourceLangName] = useState<string>("");
	const [langName, setLangName] = useState<string>("");
	const [notes, setNotes] = useState<string>("");

	const [results, setResults] = useState<Source[]>([]);

	async function doSearch() {
		const newResults = await searchSources({
			id,
			name,
			fileName,
			reference,
			publicationType,
			documentType,
			location,
			sourceLangName,
			langName,
			notes,
		});

		setResults(newResults);
	}

	let data: string[][] = results.map((result) => {
		let id = result.id.toString();

		let name = "";
		if (result.name !== null) name = result.name.toString();

		let fileName = "";
		if (result.fileName !== null) fileName = result.fileName.toString();

		let reference = "";
		if (result.reference !== null) reference = result.reference.toString();

		let publicationType = "";
		if (result.publicationType !== null)
			publicationType = result.publicationType.toString();

		let documentType = "";
		if (result.documentType !== null)
			documentType = result.documentType.toString();

		let location = "";
		if (result.location !== null) location = result.location.toString();

		let sourceLangName = "";
		if (result.sourceLangName !== null)
			sourceLangName = result.sourceLangName.toString();

		let langName = "";
		if (result.langName !== null) langName = result.langName.toString();

		let notes = "";
		if (result.notes !== null) notes = result.notes.toString();

		return [
			id,
			name,
			fileName,
			reference,
			publicationType,
			documentType,
			location,
			sourceLangName,
			langName,
			notes,
		];
	});

	return (
		<Box>
			<HStack wrap="wrap" spacing={4} p={4} justifyContent="center">
				<Input
					w={20}
					placeholder="ID"
					onChange={(e) => setId(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="File Name"
					onChange={(e) => setFileName(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Reference"
					onChange={(e) => setReference(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Publication Type"
					onChange={(e) => setPublicationType(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Document Type"
					onChange={(e) => setDocumentType(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Location"
					onChange={(e) => setLocation(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Source Language Name"
					onChange={(e) => setSourceLangName(e.target.value)}
				/>
				<Input
					w={40}
					placeholder="Language Name"
					onChange={(e) => setLangName(e.target.value)}
				/>
				<Input
					w={80}
					placeholder="Notes"
					onChange={(e) => setNotes(e.target.value)}
				/>
			</HStack>

			<SearchType />

			<Flex justifyContent="center">
				<Button onClick={doSearch}>Search</Button>
			</Flex>

			<SimpleTable
				headings={[
					"ID",
					"Name",
					"File Name",
					"Reference",
					"Publication Type",
					"Document Type",
					"Location",
					"Source Language Name",
					"Language Name",
					"Notes",
				]}
				data={data}
			/>
		</Box>
	);
}
