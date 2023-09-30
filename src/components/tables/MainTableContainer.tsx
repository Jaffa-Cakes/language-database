"use client";

import {
	Table,
	TableContainer,
	Box,
	Flex,
	Text,
	Button,
} from "@chakra-ui/react";
import { type } from "os";
import { ReactNode } from "react";

export interface Props {
	total: {
		start: number;
		end: number;
		total: number;
	};
	children: ReactNode;
	nextPage?: () => void;
	previousPage?: () => void;
}

export default function Component(props: Props) {
	const { total, children, nextPage, previousPage } = props;

	return (
		<Flex
			flexDir="column"
			minH="0"
			overflow="hidden"
			rounded="xl"
			mt="5"
			shadow="xl"
			backgroundColor="panel.100"
		>
			<Box
				rounded="lg"
				py="3"
				px="3"
				shadow="xl"
				overflowY="auto"
				minH="0"
			>
				<TotalResults
					start={total.start}
					end={total.end}
					total={total.total}
					nextPage={nextPage}
					previousPage={previousPage}
				/>

				<TableContainer my={3} maxW="100vw">
					<Table size="sm">{children}</Table>
				</TableContainer>

				<TotalResults
					start={total.start}
					end={total.end}
					total={total.total}
					nextPage={nextPage}
					previousPage={previousPage}
				/>
			</Box>
		</Flex>
	);
}

interface TotalResultsProps {
	start: number;
	end: number;
	total: number;
	nextPage?: () => void;
	previousPage?: () => void;
}

function TotalResults(props: TotalResultsProps) {
	const { start, end, total, nextPage, previousPage } = props;

	const nextButton = () => {
		if (nextPage !== undefined) {
			const enabled = end !== total;
			const onClick = () => {
				if (enabled) nextPage();
			};
			const color = enabled ? "orange.600" : "panel.300";

			return (
				<Button onClick={onClick} size="xs" backgroundColor={color}>
					Next Page
				</Button>
			);
		}
	};

	const previousButton = () => {
		if (previousPage !== undefined) {
			const enabled = start !== 0;
			const onClick = () => {
				if (enabled) previousPage();
			};
			const color = enabled ? "orange.600" : "panel.300";

			return (
				<Button onClick={onClick} size="xs" backgroundColor={color}>
					Previous Page
				</Button>
			);
		}
	};

	return (
		<Flex justifyContent="space-between" px={5}>
			{previousButton()}
			<Text color="whiteAlpha.400">
				Showing {start}-{end} of {total} Results
			</Text>
			{nextButton()}
		</Flex>
	);
}
