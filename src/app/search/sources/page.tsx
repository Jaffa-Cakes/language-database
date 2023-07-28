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
import SearchInput from "@/components/SearchParams/SearchInput";
import SearchButton from "@/components/SearchButton";
import SearchParams from "@/components/SearchParams";

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
		<>
			<form action={doSearch}>
				<SearchParams>
					<SearchInput w={20} placeholder="ID" setValue={setId} />
					<SearchInput w={40} placeholder="Name" setValue={setName} />
					<SearchInput
						w={40}
						placeholder="File Name"
						setValue={setFileName}
					/>
					<SearchInput
						w={40}
						placeholder="Reference"
						setValue={setReference}
					/>
					<SearchInput
						w={40}
						placeholder="Publication Type"
						setValue={setPublicationType}
					/>
					<SearchInput
						w={40}
						placeholder="Document Type"
						setValue={setDocumentType}
					/>
					<SearchInput
						w={40}
						placeholder="Location"
						setValue={setLocation}
					/>
					<SearchInput
						w={40}
						placeholder="Source Language Name"
						setValue={setSourceLangName}
					/>
					<SearchInput
						w={40}
						placeholder="Language Name"
						setValue={setLangName}
					/>
					<SearchInput
						w={80}
						placeholder="Notes"
						setValue={setNotes}
					/>
				</SearchParams>

				<SearchButton doSearch={doSearch} />
			</form>

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
		</>
	);
}
