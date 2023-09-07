"use client";

import { ReactNode, useContext, useEffect, useState } from "react";

import SearchParams from "@/components/SearchParams";
import SearchInput from "@/components/SearchParams/SearchInput";

import TableColumnToggle from "@/components/Table/ColumnToggle";

import SimpleModal from "@/components/SimpleModal";

import MainTableContainer from "@/components/tables/MainTableContainer";
import TData from "@/components/tables/TData";

import EditWordModal from "@/components/EditWordModal";

import ScratchpadContext from "@/components/ScratchpadPanel/Context";

import deleteEntry from "@/actions/deleteEntry";

import WordsList, { Column, getColumnReadable } from "@/WordsList";
import {
	Box,
	Button,
	HStack,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";

interface FilterHandles {
	id: string;
	setId: (value: string) => void;
	english: string;
	setEnglish: (value: string) => void;
	language: string;
	setLanguage: (value: string) => void;
	sonetic: string;
	setSonetic: (value: string) => void;
	notes: string;
	setNotes: (value: string) => void;
	sourceId: string;
	setSourceId: (value: string) => void;
	sourceName: string;
	setSourceName: (value: string) => void;
	sourceFileName: string;
	setSourceFileName: (value: string) => void;
	sourceReference: string;
	setSourceReference: (value: string) => void;
	sourcePublicationType: string;
	setSourcePublicationType: (value: string) => void;
	sourceDocumentType: string;
	setSourceDocumentType: (value: string) => void;
	sourceLocation: string;
	setSourceLocation: (value: string) => void;
	sourceLanguage: string;
	setSourceLanguage: (value: string) => void;
	sourceLanguageName: string;
	setSourceLanguageName: (value: string) => void;
	sourceNotes: string;
	setSourceNotes: (value: string) => void;
}

export default function Page() {
	const [isClient, setIsClient] = useState(false);
	const { scratchpad, setScratchpad } = useContext(ScratchpadContext);
	let keyHelper = 0;
	const [wordsList, setWordsList] = useState<WordsList>(
		new WordsList([
			Column.Id,
			Column.English,
			Column.Language,
			Column.SourceName,
		]),
	);
	const [editorRecordId, setEditorRecordId] = useState<number>(0);
	let isEditorOpen: boolean,
		onEditorOpen: () => void,
		onEditorClose: () => void;
	{
		const { isOpen, onOpen, onClose } = useDisclosure();

		isEditorOpen = isOpen;
		onEditorOpen = onOpen;
		onEditorClose = onClose;
	}
	const [expandedField, setExpandedField] = useState<ReactNode>(<></>);
	let isExpandedOpen: boolean,
		onExpandedOpen: () => void,
		onExpandedClose: () => void;
	{
		const { isOpen, onOpen, onClose } = useDisclosure();

		isExpandedOpen = isOpen;
		onExpandedOpen = onOpen;
		onExpandedClose = onClose;
	}
	let filterHandles: FilterHandles;
	{
		const [id, setId] = useState<string>("");
		const [english, setEnglish] = useState<string>("");
		const [language, setLanguage] = useState<string>("");
		const [sonetic, setSonetic] = useState<string>("");
		const [notes, setNotes] = useState<string>("");
		const [sourceId, setSourceId] = useState<string>("");
		const [sourceName, setSourceName] = useState<string>("");
		const [sourceFileName, setSourceFileName] = useState<string>("");
		const [sourceReference, setSourceReference] = useState<string>("");
		const [sourcePublicationType, setSourcePublicationType] =
			useState<string>("");
		const [sourceDocumentType, setSourceDocumentType] =
			useState<string>("");
		const [sourceLocation, setSourceLocation] = useState<string>("");
		const [sourceLanguage, setSourceLanguage] = useState<string>("");
		const [sourceLanguageName, setSourceLanguageName] =
			useState<string>("");
		const [sourceNotes, setSourceNotes] = useState<string>("");

		filterHandles = {
			id,
			setId,
			english,
			setEnglish,
			language,
			setLanguage,
			sonetic,
			setSonetic,
			notes,
			setNotes,
			sourceId,
			setSourceId,
			sourceName,
			setSourceName,
			sourceFileName,
			setSourceFileName,
			sourceReference,
			setSourceReference,
			sourcePublicationType,
			setSourcePublicationType,
			sourceDocumentType,
			setSourceDocumentType,
			sourceLocation,
			setSourceLocation,
			sourceLanguage,
			setSourceLanguage,
			sourceLanguageName,
			setSourceLanguageName,
			sourceNotes,
			setSourceNotes,
		};
	}

	// Prevent SSR Error from Hydration Missmatch
	useEffect(() => {
		setIsClient(true);
	}, []);

	async function refreshSearch() {
		const newWordsList = wordsList.cloneRecordless();
		await newWordsList.runRefresh();

		setWordsList(newWordsList);
	}

	async function deleteRecord(id: number) {
		await deleteEntry(id);
		await refreshSearch();
	}

	function openRecordEditor(id: number) {
		setEditorRecordId(id);
		onEditorOpen();
	}

	function expandField(value: string) {
		setExpandedField(
			<Box backgroundColor="gray.800" rounded="lg" px="3" py="2">
				<Text>{value}</Text>
			</Box>,
		);
		onExpandedOpen();
	}

	async function toggleColumn(column: Column) {
		const newWordsList = wordsList.cloneRecordless();
		newWordsList.toggleColumn(column);
		await newWordsList.runRefresh();
		setWordsList(newWordsList);
	}

	const columns = wordsList
		.getColumns()
		.map((column) => getColumnReadable(column));

	let allColumns = [
		Column.English,
		Column.Language,
		Column.Sonetic,
		Column.Notes,
		Column.SourceId,
		Column.SourceName,
		Column.SourceFileName,
		Column.SourceReference,
		Column.SourcePublicationType,
		Column.SourceDocumentType,
		Column.SourceLocation,
		Column.SourceLanguage,
		Column.SourceLanguageName,
		Column.SourceNotes,
	];

	const records = wordsList.getRecords();

	const headings = (
		<Tr>
			<Th textAlign="center" maxW={15}>
				Scratchpad
			</Th>
			{columns.map((column, i) => (
				<Th key={i}>{column}</Th>
			))}
			<Th textAlign="center" maxW={15}>
				Options
			</Th>
		</Tr>
	);

	const searchInputs = wordsList.getColumns().map((column) => {
		let setter: (value: string) => void;
		let getter: string;

		switch (column) {
			case Column.Id:
				setter = filterHandles.setId;
				getter = filterHandles.id;
				break;
			case Column.English:
				setter = filterHandles.setEnglish;
				getter = filterHandles.english;
				break;
			case Column.Language:
				setter = filterHandles.setLanguage;
				getter = filterHandles.language;
				break;
			case Column.Sonetic:
				setter = filterHandles.setSonetic;
				getter = filterHandles.sonetic;
				break;
			case Column.Notes:
				setter = filterHandles.setNotes;
				getter = filterHandles.notes;
				break;
			case Column.SourceId:
				setter = filterHandles.setSourceId;
				getter = filterHandles.sourceId;
				break;
			case Column.SourceName:
				setter = filterHandles.setSourceName;
				getter = filterHandles.sourceName;
				break;
			case Column.SourceFileName:
				setter = filterHandles.setSourceFileName;
				getter = filterHandles.sourceFileName;
				break;
			case Column.SourceReference:
				setter = filterHandles.setSourceReference;
				getter = filterHandles.sourceReference;
				break;
			case Column.SourcePublicationType:
				setter = filterHandles.setSourcePublicationType;
				getter = filterHandles.sourcePublicationType;
				break;
			case Column.SourceDocumentType:
				setter = filterHandles.setSourceDocumentType;
				getter = filterHandles.sourceDocumentType;
				break;
			case Column.SourceLocation:
				setter = filterHandles.setSourceLocation;
				getter = filterHandles.sourceLocation;
				break;
			case Column.SourceLanguage:
				setter = filterHandles.setSourceLanguage;
				getter = filterHandles.sourceLanguage;
				break;
			case Column.SourceLanguageName:
				setter = filterHandles.setSourceLanguageName;
				getter = filterHandles.sourceLanguageName;
				break;
			case Column.SourceNotes:
				setter = filterHandles.setSourceNotes;
				getter = filterHandles.sourceNotes;
				break;
		}

		function completeSet(value: string) {
			const newWordsList = wordsList.cloneRecordless();
			let filters = newWordsList.getFilters();

			if (column == Column.Id) filters.Id = value;
			if (column == Column.English) filters.English = value;
			if (column == Column.Language) filters.Language = value;
			if (column == Column.Sonetic) filters.Sonetic = value;
			if (column == Column.Notes) filters.Notes = value;
			if (column == Column.SourceId) filters.SourceId = value;
			if (column == Column.SourceName) filters.SourceName = value;
			if (column == Column.SourceFileName) filters.SourceFileName = value;
			if (column == Column.SourceReference)
				filters.SourceReference = value;
			if (column == Column.SourcePublicationType)
				filters.SourcePublicationType = value;
			if (column == Column.SourceDocumentType)
				filters.SourceDocumentType = value;
			if (column == Column.SourceLocation) filters.SourceLocation = value;
			if (column == Column.SourceLanguage) filters.SourceLanguage = value;
			if (column == Column.SourceLanguageName)
				filters.SourceLanguageName = value;
			if (column == Column.SourceNotes) filters.SourceNotes = value;

			newWordsList.setFilters(filters);
			setWordsList(newWordsList);
			setter(value);
		}

		keyHelper++;
		return (
			<SearchInput
				key={keyHelper}
				w={40}
				placeholder={getColumnReadable(column)}
				setValue={completeSet}
			/>
		);
	});

	async function toggleScratchpadRecord(id: number) {
		const newScratchpad = scratchpad.cloneRecordless();
		newScratchpad.addRecord(id);
		await newScratchpad.refreshRecords();
		setScratchpad(newScratchpad);
	}

	async function dragStart(
		e: React.DragEvent<HTMLTableRowElement>,
		id: string,
	) {
		e.dataTransfer.setData("text/plain", id);
	}

	return (
		<>
			{isClient ? (
				<>
					<TableColumnToggle
						columns={allColumns}
						activeColumns={wordsList.getColumns()}
						toggleColumn={toggleColumn}
					/>

					<hr />

					<SearchParams>{searchInputs}</SearchParams>

					<Button onClick={refreshSearch} py={5} mt={3}>
						Refresh
					</Button>

					<MainTableContainer total={records.length}>
						<Thead>{headings}</Thead>

						<Tbody>
							{records.map((record) => {
								keyHelper++;
								return (
									<Tr
										key={keyHelper}
										draggable="true"
										onDragStart={(e) =>
											dragStart(e, record[0])
										}
									>
										<Td>
											<HStack justifyContent="center">
												<Button
													size="xs"
													background="green.600"
													onClick={(e) =>
														toggleScratchpadRecord(
															parseInt(record[0]),
														)
													}
												>
													+
												</Button>
											</HStack>
										</Td>
										{record.map((value) => {
											keyHelper++;
											return (
												<TData
													key={keyHelper}
													onClick={(e) =>
														expandField(value)
													}
												>
													{value}
												</TData>
											);
										})}
										<Td maxW={15}>
											<HStack
												spacing="2"
												justifyContent="center"
											>
												<Button
													size="xs"
													background="purple.600"
													onClick={(e) =>
														openRecordEditor(
															parseInt(record[0]),
														)
													}
												>
													/
												</Button>
												<Button
													size="xs"
													background="red.600"
													onClick={(e) =>
														deleteRecord(
															parseInt(record[0]),
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

					<EditWordModal
						isOpen={isEditorOpen}
						onClose={onEditorClose}
						refreshSearch={refreshSearch}
						id={editorRecordId}
					/>
					<SimpleModal
						isOpen={isExpandedOpen}
						onClose={onExpandedClose}
						title={"Expanded Field"}
					>
						{expandedField}
					</SimpleModal>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}
