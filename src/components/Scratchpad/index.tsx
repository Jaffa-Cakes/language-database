"use client";

import {
	Box,
	Flex,
	HStack,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tfoot,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";

import { useContext, useState } from "react";

import ScratchpadContext from "./Context";

export default function Component() {
	const { scratchpad, setScratchpad } = useContext(ScratchpadContext);
	const [show, setShow] = useState<boolean>(false);

	const hideScrollbar = {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	};

	let dataElements = scratchpad.data.map((row) => {
		return (
			<Tr key={row[0]}>
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
			</Tr>
		);
	});

	const vertical = {
		textOrientation: "upright",
		writingMode: "vertical-rl",
	};

	async function toggle() {
		setShow(!show);
	}

	return (
			<VStack spacing={0} h={show ? "100%" : "fit-content"}>
				<Box
					background="gray.700"
					w="14"
					h="6"
					roundedTop="full"
					borderBottomColor="black"
					borderBottomStyle="solid"
					borderBottomWidth={1}
					cursor="pointer"
					onClick={toggle}
				>
				</Box>

				<Box
					backgroundColor="gray.900"
					flexGrow={1}
					h="100%"
					w="100%"
					display={show ? "block" : "none"}
					px="3"
					py="2"
				>
					<Text>Scratchpad</Text>
					<TableContainer mt={3} maxW="100vw" maxH="250px" overflowY="auto">
						<Table size="sm">
							<Tbody>{dataElements}</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</VStack>
	);
}
