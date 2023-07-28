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
		<Flex flexDir="column" justifyContent="center">
			<HStack spacing={0} h={show ? "100%" : "fit-content"}>
				<Flex
					direction="column"
					placeSelf="start"
					cursor="pointer"
					onClick={toggle}
				>
					<Box
						background="gray.700"
						roundedTopLeft="2xl"
						py={2}
						px={1}
						borderBottomColor="black"
						borderBottomStyle="solid"
						borderBottomWidth={1}
					>
						<Text style={vertical as any}>PAD</Text>
					</Box>
					<Box
						background="gray.700"
						roundedBottomLeft="2xl"
						pb={2}
						pt={1}
						px={1}
					>
						<Text style={vertical as any}>
							{scratchpad.data.length}
						</Text>
					</Box>
				</Flex>

				<Box
					backgroundColor="black"
					flexGrow={1}
					h="100%"
					w="15vw"
					roundedBottomLeft="2xl"
					display={show ? "block" : "none"}
				>
					<TableContainer mt={3} maxW="100vw">
						<Table size="sm">
							<Tbody>{dataElements}</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</HStack>
		</Flex>
	);
}
