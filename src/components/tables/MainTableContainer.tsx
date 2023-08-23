"use client";

import { Table, TableContainer, Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface Props {
	total: number;
	children: ReactNode;
}

export default function Component(props: Props) {
	const { total, children } = props;

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
				<TotalResults total={total} />

				<TableContainer my={3} maxW="100vw">
					<Table size="sm">{children}</Table>
				</TableContainer>

				<TotalResults total={total} />
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
