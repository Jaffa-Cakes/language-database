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
	Modal,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Checkbox,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import ScratchpadContext from "@/components/ScratchpadPanel/Context";
import SimpleModal from "@/components/SimpleModal";

export interface Props {
	headings: string[];
	data: string[][];
}

export default function Component(props: Props) {
	let { headings, data } = props;
	const { scratchpad, setScratchpad } = useContext(ScratchpadContext);
	const [modal, setModal] = useState<string>("");
	const { isOpen, onOpen, onClose } = useDisclosure();

	async function toggle(row: string[]) {
		console.log("start");
		let newScratchpad = scratchpad.data;
		newScratchpad.push(row);

		setScratchpad({
			data: newScratchpad,
		});
		console.log("end");
	}

	async function expand(e: React.MouseEvent<HTMLTableCellElement>) {
		e.stopPropagation();

		let contents = e.currentTarget.innerText;

		setModal(contents);

		onOpen();
	}

	let headingElements = headings.map((heading) => (
		<Th key={heading}>{heading}</Th>
	));

	let rowKey = 0;
	let cellKey = 0;

	let dataElements = data.map((row) => {
		rowKey++;

		return (
			<Tr key={rowKey} cursor="pointer" _hover={
				{
					backgroundColor: "whiteAlpha.50",
				}
			}>
				<Td>
					<Checkbox onChange={(e) => toggle(row)} />
				</Td>
				{row.map((cell) => {
					cellKey++;

					return (
						<Td
							key={cellKey}
							maxW={40}
							overflowX="auto"
							css={{
								overflowX: "hidden",
								textOverflow: "ellipsis",
							}}
							onClick={expand}
							_hover={
								{
									backgroundColor: "whiteAlpha.100",
								}
							}
						>
							{cell}
						</Td>
					);
				})}
				<Td>
					<HStack spacing="2" justifyContent="right">
						<Button size="xs" background="purple.600">
							E
						</Button>
						<Button size="xs" background="red.600">
							X
						</Button>
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
								<Th></Th>
								{headingElements}
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>{dataElements}</Tbody>
						<Tfoot>
							<Tr>
								<Th></Th>
								{headingElements}
								<Th></Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>

				<TotalResults total={data.length} />
			</Box>

			<SimpleModal isOpen={isOpen} onClose={onClose} title="Expanded Field">
				<Box
					backgroundColor="gray.800"
					rounded="lg"
					px="3"
					py="2"
				>
					<Text>{modal}</Text>
				</Box>
			</SimpleModal>
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
