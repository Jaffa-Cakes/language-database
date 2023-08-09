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
import { ReactNode, useState } from "react";

import searchWords, { Data } from "@/actions/searchWords";

import SimpleTable from "@/components/SimpleTable";
import SearchParams from "@/components/SearchParams";
import SearchModeContainer from "@/components/SearchParams/SearchModeContainer";
import SearchInput from "@/components/SearchParams/SearchInput";
import SearchMode from "@/components/SearchParams/SearchMode";
import SearchButton from "@/components/SearchButton";
import { Mode } from "@/components/SearchParams/SearchMode";

import TableColumnToggle from "@/components/Table/ColumnToggle";

export default function Page() {
	/* COLUMNS */
	const columns = [
		"ID",
		"English",
		"Language",
		"Sonetic",
		"Notes",
		"Source ID",
		"Source Name",
		"Source File Name",
		"Source Reference",
		"Source Publication Type",
		"Source Document Type",
		"Source Location",
		"Source Language",
		"Source Language Name",
		"Source Notes",
	];

	const [activeColumns, setActiveColumns] = useState<string[]>(["English", "Language", "Source Name"]);

	async function toggleColumn(column: string) {
		if (activeColumns.includes(column)) {
			setActiveColumns(activeColumns.filter((c) => c !== column));
		} else {

			let newActiveColumns: string[] = [];
			const compareActiveColumns = [...activeColumns, column];

			columns.forEach((c) => {
				if (compareActiveColumns.includes(c)) {
					newActiveColumns.push(c);
				}
			});


			setActiveColumns(newActiveColumns);
		}
	}

	/* FILTERS */
	const [filterId, setFilterId] = useState<string>("");
	const [filterEnglish, setFilterEnglish] = useState<string>("");
	const [filterEnglishMode, setFilterEnglishMode] = useState<Mode>(Mode.Containes);
	const [filterLanguage, setFilterLanguage] = useState<string>("");
	const [filterLanguageMode, setFilterLanguageMode] = useState<Mode>(Mode.Containes);
	const [filterSonetic, setFilterSonetic] = useState<string>("");
	const [filterNotes, setFilterNotes] = useState<string>("");
	const [filterSourceId, setFilterSourceId] = useState<string>("");
	const [filterSourceName, setFilterSourceName] = useState<string>("");
	const [filterSourceNameMode, setSourceNameMode] = useState<Mode>(Mode.Containes);
	const [filterSourceFileName, setFilterSourceFileName] = useState<string>("");
	const [filterSourceReference, setFilterSourceReference] = useState<string>("");
	const [filterSourcePublicationType, setFilterSourcePublicationType] = useState<string>("");
	const [filterSourceDocumentType, setFilterSourceDocumentType] = useState<string>("");
	const [filterSourceLocation, setFilterSourceLocation] = useState<string>("");
	const [filterSourceLanguage, setFilterSourceLanguage] = useState<string>("");
	const [filterSourceLanguageName, setFilterSourceLanguageName] = useState<string>("");
	const [filterSourceNotes, setFilterSourceNotes] = useState<string>("");

	let displayFilterId = displayFilterInput(activeColumns, "ID", setFilterId);
	let displayFilterEnglish = displayFilterExtended(activeColumns, "English", setFilterEnglish, setFilterEnglishMode);
	let displayFilterLanguage = displayFilterExtended(activeColumns, "Language", setFilterLanguage, setFilterLanguageMode);
	let displayFilterSonetic = displayFilterInput(activeColumns, "Sonetic", setFilterSonetic);
	let displayFilterNotes = displayFilterInput(activeColumns, "Notes", setFilterNotes);
	let displayFilterSourceId = displayFilterInput(activeColumns, "Source ID", setFilterSourceId);
	let displayFilterSourceName = displayFilterExtended(activeColumns, "Source Name", setFilterSourceName, setSourceNameMode);
	let displayFilterSourceFileName = displayFilterInput(activeColumns, "Source File Name", setFilterSourceFileName);
	let displayFilterSourceReference = displayFilterInput(activeColumns, "Source Reference", setFilterSourceReference);
	let displayFilterSourcePublicationType = displayFilterInput(activeColumns, "Source Publication Type", setFilterSourcePublicationType);
	let displayFilterSourceDocumentType = displayFilterInput(activeColumns, "Source Document Type", setFilterSourceDocumentType);
	let displayFilterSourceLocation = displayFilterInput(activeColumns, "Source Location", setFilterSourceLocation);
	let displayFilterSourceLanguage = displayFilterInput(activeColumns, "Source Language", setFilterSourceLanguage);
	let displayFilterSourceLanguageName = displayFilterInput(activeColumns, "Source Language Name", setFilterSourceLanguageName);
	let displayFilterSourceNotes = displayFilterInput(activeColumns, "Source Notes", setFilterSourceNotes);

	/* SEARCH */
	const [results, setResults] = useState<string[][]>([]);

	async function doSearch() {
		const rawResults = await searchWords({
			id: activeColumns.includes("ID") ? filterId : "",
			english: activeColumns.includes("English") ? filterEnglish : "",
			language: activeColumns.includes("Language") ? filterLanguage : "",
			sonetic: activeColumns.includes("Sonetic") ? filterSonetic : "",
			notes: activeColumns.includes("Notes") ? filterNotes : "",
			sourceId: activeColumns.includes("Source ID") ? filterSourceId : "",
			sourceName: activeColumns.includes("Source Name") ? filterSourceName : "",
			sourceFileName: activeColumns.includes("Source File Name") ? filterSourceFileName : "",
			sourceReference: activeColumns.includes("Source Reference") ? filterSourceReference : "",
			sourcePublicationType: activeColumns.includes("Source Publication Type") ? filterSourcePublicationType : "",
			sourceDocumentType: activeColumns.includes("Source Document Type") ? filterSourceDocumentType : "",
			sourceLocation: activeColumns.includes("Source Location") ? filterSourceLocation : "",
			sourceLanguage: activeColumns.includes("Source Language") ? filterSourceLanguage : "",
			sourceLanguageName: activeColumns.includes("Source Language Name") ? filterSourceLanguageName : "",
			sourceNotes: activeColumns.includes("Source Notes") ? filterSourceNotes : "",
		});

		const newResults: string[][] = rawResults.map((result) => {

			let row: string[] = [];

			let id = formatColumn(activeColumns, "ID", result.id);
			if (id !== null) row.push(id);
			let english = formatColumn(activeColumns, "English", result.english);
			if (english !== null) row.push(english);
			let language = formatColumn(activeColumns, "Language", result.language);
			if (language !== null) row.push(language);
			let sonetic = formatColumn(activeColumns, "Sonetic", result.sonetic);
			if (sonetic !== null) row.push(sonetic);
			let notes = formatColumn(activeColumns, "Notes", result.notes);
			if (notes !== null) row.push(notes);
			let sourceId = formatColumn(activeColumns, "Source ID", result.sourceId);
			if (sourceId !== null) row.push(sourceId);
			let sourceName = formatColumn(activeColumns, "Source Name", result.sourceName);
			if (sourceName !== null) row.push(sourceName);
			let sourceFileName = formatColumn(activeColumns, "Source File Name", result.sourceFileName);
			if (sourceFileName !== null) row.push(sourceFileName);
			let sourceReference = formatColumn(activeColumns, "Source Reference", result.sourceReference);
			if (sourceReference !== null) row.push(sourceReference);
			let sourcePublicationType = formatColumn(activeColumns, "Source Publication Type", result.sourcePublicationType);
			if (sourcePublicationType !== null) row.push(sourcePublicationType);
			let sourceDocumentType = formatColumn(activeColumns, "Source Document Type", result.sourceDocumentType);
			if (sourceDocumentType !== null) row.push(sourceDocumentType);
			let sourceLocation = formatColumn(activeColumns, "Source Location", result.sourceLocation);
			if (sourceLocation !== null) row.push(sourceLocation);
			let sourceLanguage = formatColumn(activeColumns, "Source Language", result.sourceLanguage);
			if (sourceLanguage !== null) row.push(sourceLanguage);
			let sourceLanguageName = formatColumn(activeColumns, "Source Language Name", result.sourceLanguageName);
			if (sourceLanguageName !== null) row.push(sourceLanguageName);
			let sourceNotes = formatColumn(activeColumns, "Source Notes", result.sourceNotes);
			if (sourceNotes !== null) row.push(sourceNotes);

			return row;
		});

		setResults(newResults);
	}

	return (
		<>
			<TableColumnToggle 
				columns={columns}
				activeColumns={activeColumns}
				toggleColumn={toggleColumn}
			/>

			<form action={doSearch}>
				<SearchParams>
					{displayFilterId}
					{displayFilterEnglish}
					{displayFilterLanguage}
					{displayFilterSonetic}
					{displayFilterNotes}
					{displayFilterSourceId}
					{displayFilterSourceName}
					{displayFilterSourceFileName}
					{displayFilterSourceReference}
					{displayFilterSourcePublicationType}
					{displayFilterSourceDocumentType}
					{displayFilterSourceLocation}
					{displayFilterSourceLanguage}
					{displayFilterSourceLanguageName}
					{displayFilterSourceNotes}
				</SearchParams>

				<SearchButton doSearch={doSearch} />
			</form>

			<SimpleTable
				headings={activeColumns}
				data={results}
			/> 
		</>
	);
}

function displayFilterInput(activeColumns: string[], column: string, setFilter: (value: string) => void): ReactNode {
	if (activeColumns.includes(column)) {
		return <SearchInput w={40} placeholder={column} setValue={setFilter} />;
	}

	return <></>;
}

function displayFilterExtended(activeColumns: string[], column: string, setFilter: (value: string) => void, setMode: (mode: Mode) => void): ReactNode {
	if (activeColumns.includes(column)) {
		return (
			<SearchModeContainer>
				<SearchInput
					w={40}
					placeholder={column}
					setValue={setFilter}
					roundedBottom="none"
					borderBottom="none"
				/>
				<SearchMode w={40} set={setMode} />
			</SearchModeContainer>
		);
	}

	return <></>;
}

function formatColumn(activeColumns: string[], column: string, value: string | number | null | undefined): string | null {
	if (activeColumns.includes(column)) {
		if (value !== null && value !== undefined) {
			return value.toString();
		}
	} else {
		return null;
	}

	return "";
}