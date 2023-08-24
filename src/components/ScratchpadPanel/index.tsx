"use client";

import {
	Box,
	Button,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
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

	async function remove(id: string) {
		const newScratchpad = scratchpad.cloneRecordless();
		newScratchpad.removeRecord(parseInt(id));
		await newScratchpad.refreshRecords();

		setScratchpad(newScratchpad);
	}

	async function dragStart(
		e: React.DragEvent<HTMLTableRowElement>,
		id: string,
	) {
		e.dataTransfer.setData("text/plain", id);
	}

	let dataElements = scratchpad.getRecords().map((record) => {
		return (
			<Tr
				key={record[0]}
				draggable="true"
				onDragStart={(e) => dragStart(e, record[0])}
			>
				<Td>
					<Button
						size="xs"
						background="red.600"
						onClick={(e) => remove(record[0])}
					>
						-
					</Button>
				</Td>
				{record.map((cell) => (
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
							<Thead>
								<Tr>
									<Th>Remove</Th>
									<Th>ID</Th>
									<Th>English</Th>
									<Th>Language</Th>
									<Th>Sonetic</Th>
									<Th>Notes</Th>
								</Tr>
							</Thead>
							<Tbody>{dataElements}</Tbody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</VStack>
	);
}
