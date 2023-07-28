"use client";

import {
	Box,
	Button,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Textarea,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useState } from "react";

import searchCustomSql from "@/actions/searchCustomSql";

import SimpleTable from "@/components/SimpleTable";

export default function Page() {
	const [sql, setSql] = useState<string>("");

	const [results, setResults] = useState<unknown[]>([]);

	async function doSearch() {
		const newResults = await searchCustomSql(sql);

		setResults(newResults);
	}

	const hideScrollbar = {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	};

	let headings: string[] = [];
	let data: string[][] = [];

	if (results.length > 0) {
		headings = Object.keys(results[0] as Object);
		data = results.map((result) => {
			let resultNew = result as any;

			const row: string[] = [];

			Object.keys(resultNew as Object).forEach((key) => {
				let value = "";
				if (resultNew[key] !== null) value = resultNew[key].toString();

				row.push(value);
			});

			return row;
		});
	}

	return (
		<Box>
			<Textarea
				w="100%"
				placeholder="SQL"
				onChange={(e) => setSql(e.target.value)}
			/>

			<Flex justifyContent="center" mt={5}>
				<Button onClick={doSearch}>Search</Button>
			</Flex>

			<SimpleTable headings={headings} data={data} />
		</Box>
	);
}
