"use client";

import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	Text,
	Button,
	Box,
	Flex,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import ScratchpadContext from "@/components/Scratchpad/Context";

export interface Props {
	headings: string[];
	data: string[][];
}

export default function Component(props: Props) {
	let { headings, data } = props;
	const [toggled, setToggled] = useState<string[]>([]);
	const { scratchpad, setScratchpad } = useContext(ScratchpadContext);

	const hideScrollbar = {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	};

	async function toggle(id: string) {
		let newScratchpad = scratchpad.data;
		newScratchpad.push(data.find((row) => row[0] === id) as string[]);
		setScratchpad({
			data: newScratchpad,
		});

		if (toggled.includes(id)) {
			setToggled(toggled.filter((item) => item !== id));
		} else {
			setToggled([...toggled, id]);
		}
	}

	let headingElements = headings.map((heading) => (
		<Th key={heading}>{heading}</Th>
	));

	let dataElements = data.map((row) => {
		let color = toggled.includes(row[0]) ? "green.800" : "";

		return (
			<Tr
				key={row[0]}
				onClick={(e) => toggle(row[0])}
				backgroundColor={color}
				cursor="pointer"
			>
				{row.map((cell) => (
					<Td
						key={cell}
						maxW={40}
						overflowX="auto"
						css={hideScrollbar}
					>
						{cell}
					</Td>
				))}
				<Td>
					<Button size="xs">E</Button>
				</Td>
			</Tr>
		);
	});

	return (
		<Flex flexGrow="1" flexDir="column" minH="0" overflow="hidden" rounded="xl" mt="5">
			<Box
				backgroundColor="blackAlpha.100"
				rounded="lg"
				py="3"
				px="3"
				shadow="xl"
				overflowY="auto"
				minH="0"
				pb="10"
			>
				<Flex justifyContent="center">
					<Text color="whiteAlpha.400">{data.length} Results</Text>
				</Flex>
				<TableContainer mt={3} maxW="100vw">
					<Table size="sm">
						<Thead>
							<Tr>
								{headingElements}
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							{dataElements}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</Flex>
	);
}
