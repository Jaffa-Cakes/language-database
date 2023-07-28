"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Papa from "papaparse";
import { useState } from "react";

interface Props<T> {
	setData: (data: T) => void;
	name: string;
}

export default function Component<T>(props: Props<T>) {
	const { setData, name } = props;

	const [lines, setLines] = useState<number>(0);

	function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];

		Papa.parse(file, {
			header: true,
			dynamicTyping: false,
			complete: function (results: { data: T }) {
				setData(results.data);
				setLines(results.data.length);
			},
		});
	}

	return (
		<Box mb={5}>
			<Text mb={2}>{name}:</Text>

			<Flex>
				<input type="file" accept=".csv" onChange={handleFileSelect} />
				<Box background="red.900" rounded="full" px={2} py={1}>
					{lines} Lines
				</Box>
			</Flex>
		</Box>
	);
}
