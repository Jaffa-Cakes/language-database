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
	HStack,
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
					<HStack spacing="2" justifyContent="right">
						<Button size="xs" background="purple.600">E</Button>
						<Button size="xs" background="red.600" >X</Button>
					</HStack>
				</Td>
			</Tr>
		);
	});

	return (
		<Flex
			flexDir="column"
			minH="0"
			overflow="hidden"
			rounded="xl"
			mt="5"
			shadow="xl"
			backgroundColor="blackAlpha.100"
		>
			<Box
				rounded="lg"
				py="3"
				px="3"
				shadow="xl"
				overflowY="auto"
				minH="0"
			>
				<TotalResults total={data.length} />

				<TableContainer my={3} maxW="100vw">
					<Table size="sm">
						<Thead>
							<Tr>
								{headingElements}
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>{dataElements}</Tbody>
						<Tfoot>
							<Tr>
								{headingElements}
								<Th></Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>

				<TotalResults total={data.length} />
			</Box>
		</Flex>
	);
}

interface TotalResultsProps {
	total: number;
}

function TotalResults(props: TotalResultsProps) {
	const { total } = props;
	
	return (
		<Flex justifyContent="center">
			<Text color="whiteAlpha.400">{total} Results</Text>
		</Flex>
	);
}