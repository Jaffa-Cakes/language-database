"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<>
			<Flex
				w="100vw"
				bottom={0}
				direction={expanded ? "column" : "column-reverse"}
			>
				<Box
					pl={3}
					pr={4}
					pt={3}
					pb={2}
					roundedTopRight="2xl"
					background="gray.700"
					w="fit-content"
					onClick={(e) => setExpanded(!expanded)}
					cursor="pointer"
				>
					<Text>Lexicon</Text>
				</Box>

				<Box
					h="23vh"
					flexGrow={1}
					bottom={0}
					background="gray.900"
					p={3}
					display={expanded ? "block" : "none"}
				></Box>
			</Flex>
		</>
	);
}
