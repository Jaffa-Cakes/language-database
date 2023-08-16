"use client";

import LexiconDownloader from "@/components/LexiconDownloader";
import SearchButton from "@/components/SearchButton";
import SearchParams from "@/components/SearchParams";
import SearchInput from "@/components/SearchParams/SearchInput";
import SearchMode from "@/components/SearchParams/SearchMode";
import SearchModeContainer from "@/components/SearchParams/SearchModeContainer";
import SimpleTable from "@/components/SimpleTable";
import searchLexiconWords, { Data } from "@/actions/searchLexiconWords";
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

export default function Page() {
	// const [id, setId] = useState<string>("");
	// const [lexemeForm, setLexemeForm] = useState<string>("");
	// const [morphType, setMorphType] = useState<string>("");
	// const [dialectLabels, setDialectLabels] = useState<string>("");
	// const [variantOf, setVariantOf] = useState<string>("");
	// const [pronounciation, setPronounciation] = useState<string>("");

	// const [results, setResults] = useState<Data[]>([]);

	// // async function doSearch() {
	// // 	const newResults = await searchLexiconWords({
	// // 		id,
	// // 		lexemeForm,
	// // 		morphType,
	// // 		dialectLabels,
	// // 		variantOf,
	// // 		pronounciation,
	// // 	});

	// // 	setResults(newResults);
	// // }

	// // useEffect(() => {
	// // 	(async () => {
	// // 		const newResults = await searchLexiconWords({
	// // 			id: "",
	// // 			lexemeForm: "",
	// // 			morphType: "",
	// // 			dialectLabels: "",
	// // 			variantOf: "",
	// // 			pronounciation: "",
	// // 		});
	// // 		setResults(newResults);
	// // 	})();
	// // }, []);

	// let data: string[][] = results.map((result) => {
	// 	let id = result.id.toString();

	// 	let lexemeForm = "";
	// 	if (result.lexemeForm !== undefined) lexemeForm = result.lexemeForm.toString();

	// 	let morphType = "";
	// 	if (result.morphType !== undefined)
	// 		morphType = result.morphType.toString();

	// 	let dialectLabels = "";
	// 	if (result.dialectLabels !== undefined) dialectLabels = result.dialectLabels;

	// 	let pronounciation = "";
	// 	if (result.pronounciation !== undefined) pronounciation = result.pronounciation;

	// 	return [id,
	// 		lexemeForm,
	// 		morphType,
	// 		dialectLabels,
	// 		pronounciation];
	// });

	return (
		<>
			{/* <form action={doSearch}>
				<SearchParams>
					<SearchInput w={20} placeholder="ID" setValue={setId} />
					<SearchModeContainer>
						<SearchInput
							w={40}
							placeholder="Lexeme Form"
							setValue={setLexemeForm}
							roundedBottom="none"
							borderBottom="none"
						/>
						<SearchMode w={40} />
					</SearchModeContainer>
					<SearchInput
						w={40}
						placeholder="Morphe Type"
						setValue={setMorphType}
					/>
					<SearchInput
						w={40}
						placeholder="Dialect Labels"
						setValue={setDialectLabels}
					/>
					<SearchInput
						w={40}
						placeholder="Variant Of"
						setValue={setVariantOf}
					/>
					<SearchInput
						w={40}
						placeholder="Pronounciation"
						setValue={setPronounciation}
					/>
				</SearchParams>

				<SearchButton doSearch={doSearch} />
			</form> */}

			<Flex flexDir="row" w="full" justifyContent="center" mt="5">
				<LexiconDownloader />
			</Flex>

			{/* <SimpleTable
				headings={[
					"ID",
					"Lexeme Form",
					"Morph Type",
					"Dialect Labels",
					"Pronunciation",
				]}
				data={data}
			/> */}
		</>
	);
}
