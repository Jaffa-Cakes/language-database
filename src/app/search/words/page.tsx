"use client";

import {
	Box,
	Button,
	Checkbox,
	Flex,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Select,
	Stack,
} from "@chakra-ui/react";
import { useState } from "react";

import searchWords, { Data } from "@/actions/searchWords";

import SimpleTable from "@/components/SimpleTable";
import SearchParams from "@/components/SearchParams";
import SearchModeContainer from "@/components/SearchParams/SearchModeContainer";
import SearchInput from "@/components/SearchParams/SearchInput";
import SearchMode from "@/components/SearchParams/SearchMode";
import SearchButton from "@/components/SearchButton";

export default function Page() {
	const [id, setId] = useState<string>("");
	const [sourceId, setSourceId] = useState<string>("");
	const [english, setEnglish] = useState<string>("");
	const [language, setLanguage] = useState<string>("");
	const [sonetic, setSonetic] = useState<string>("");
	const [notes, setNotes] = useState<string>("");

	const [results, setResults] = useState<Data[]>([]);

	async function doSearch() {
		const newResults = await searchWords({
			id,
			sourceId,
			english,
			language,
			sonetic,
			notes,
		});

		setResults(newResults);
	}

	let data: string[][] = results.map((result) => {
		let id = result.id.toString();

		let sourceId = "";
		if (result.sourceId !== null) sourceId = result.sourceId.toString();

		let english = "";
		if (result.english !== null) english = result.english;

		let language = "";
		if (result.language !== null) language = result.language;

		let sonetic = "";
		if (result.sonetic !== null) sonetic = result.sonetic;

		let notes = "";
		if (result.notes !== null) notes = result.notes;

		return [id, sourceId, english, language, sonetic, notes];
	});

	return (
		<Box>
			<SearchParams>
				<SearchInput w={20} placeholder="ID" setValue={setId} />
				<SearchInput
					w={28}
					placeholder="Source ID"
					setValue={setSourceId}
				/>
				<SearchModeContainer>
					<SearchInput
						w={40}
						placeholder="English"
						setValue={setEnglish}
						roundedBottom="none"
						borderBottom="none"
					/>
					<SearchMode w={40} />
				</SearchModeContainer>
				<SearchModeContainer>
					<SearchInput
						w={40}
						placeholder="Language"
						setValue={setLanguage}
						roundedBottom="none"
						borderBottom="none"
					/>
					<SearchMode w={40} />
				</SearchModeContainer>
				<SearchInput
					w={40}
					placeholder="Sonetic"
					setValue={setSonetic}
				/>
				<SearchInput w={80} placeholder="Notes" setValue={setNotes} />
			</SearchParams>

			<SearchButton doSearch={doSearch} />

			<SimpleTable
				headings={[
					"ID",
					"Source ID",
					"English",
					"Language",
					"Sonetic",
					"Notes",
				]}
				data={data}
			/>
		</Box>
	);
}
