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
		<Box
			mb={2}
			borderWidth="thin"
			borderStyle="solid"
			borderColor="gray.600"
			rounded="md"
			overflow="hidden"
		>
			<Box backgroundColor="gray.700" px="2" py="1">
				<Text fontWeight="medium">{name}</Text>
			</Box>
			<Flex px="3" py="2">
				<input type="file" accept=".csv" onChange={handleFileSelect} />
				<Box background="purple.700" rounded="md" px={2} py={1}>
					{lines} Lines
				</Box>
			</Flex>
		</Box>
	);
}
