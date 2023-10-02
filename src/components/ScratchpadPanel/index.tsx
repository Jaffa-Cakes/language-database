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
	Tfoot,
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
				<Td borderColor="panel.300">
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
						borderColor="panel.300"
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
				background="panel.100"
				w="100%"
				h="4"
				cursor="pointer"
				onClick={toggle}
				display={show ? "none" : "block"}
				_hover={{
					background: "panel.300",
				}}
			></Box>

			<Box
				backgroundColor="panel.100"
				flexGrow={1}
				h="100%"
				w="100%"
				display={show ? "block" : "none"}
			>
				<Flex
					background="panel.200"
					borderTopColor="panel.100"
					borderTopWidth="medium"
					borderTopStyle="solid"
					placeContent="center"
					py="2"
					onClick={toggle}
					cursor="pointer"
					_hover={{
						background: "panel.300",
					}}
				>
					<Text fontWeight="medium" color="heading.100">
						Scratchpad Panel
					</Text>
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
									<Th
										borderColor="panel.300"
										color="heading.100"
									>
										Remove
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										ID
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										English
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Language
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Sonetic
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Notes
									</Th>
								</Tr>
							</Thead>
							<Tbody>{dataElements}</Tbody>
							<Tfoot>
								<Tr>
									<Th
										borderColor="panel.300"
										color="heading.100"
									>
										Remove
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										ID
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										English
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Language
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Sonetic
									</Th>
									<Th
										borderColor="panel.300"
										color="heading.200"
									>
										Notes
									</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</VStack>
	);
}
