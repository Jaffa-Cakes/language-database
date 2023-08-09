"use client";

import LexiconDownloader from "@/components/LexiconDownloader";
import { Box, Flex } from "@chakra-ui/react";

export default function Page() {
	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			h="100%"
			w="100%"
		>
			<LexiconDownloader />
		</Flex>
	);
}
