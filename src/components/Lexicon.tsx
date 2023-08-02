"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<Flex
			direction={expanded ? "row" : "row-reverse"}
		>
			<Box
				background="gray.700"
				h="14"
				w="4"
				roundedLeft="full"
				onClick={(e) => setExpanded(!expanded)}
				cursor="pointer"
				placeSelf="center"
			></Box>

			<Box
				h="100%"
				flexGrow={1}
				background="gray.900"
				px="3"
				py="2"
				display={expanded ? "block" : "none"}
			>
				<Text>Lexicon</Text>
			</Box>
		</Flex>
	);
}
