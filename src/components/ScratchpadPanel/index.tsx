"use client";

import {
	Box,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
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

	async function remove(row: string[]) {
		let newData = scratchpad.data.filter((r) => {
			if (r.length !== row.length) return true;

			let match = true;

			for (let index = 0; index < r.length; index++) {
				if (r[index] !== row[index]) {
					match = false;
					break;
				}
			}

			return !match;
		});
		setScratchpad({ data: newData });
	}

	let dataElements = scratchpad.data.map((row) => {
		return (
			<Tr key={row[0]} onClick={(e) => remove(row)}>
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
				w="100%"
				h="4"
				cursor="pointer"
				onClick={toggle}
				display={show ? "none" : "block"}
				_hover={{
					background: "gray.600",
				}}
			></Box>

			<Box
				backgroundColor="gray.900"
				flexGrow={1}
				h="100%"
				w="100%"
				display={show ? "block" : "none"}
			>
				<Flex
					background="gray.700"
					placeContent="center"
					py="2"
					onClick={toggle}
					cursor="pointer"
					_hover={{
						background: "gray.600",
					}}
				>
					<Text fontWeight="medium">Scratchpad Panel</Text>
				</Flex>

				<Box px="3" py="2">
					<TableContainer
						mt={3}
						maxW="100vw"
						maxH="250px"
						overflowY="auto"
					>
						<Table size="sm">
							<Tbody>{dataElements}</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</VStack>
	);
}
