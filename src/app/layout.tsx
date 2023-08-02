"use client";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Lexicon from "@/components/Lexicon";
import Scratchpad from "@/components/Scratchpad";
import { Box, Flex } from "@chakra-ui/react";

export const metadata = {
	title: "Woi Wurrung Language App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const h = "100vh";
	const w = "100vw";
	return (
		<html lang="en-AU">
			<body>
				<Providers>
					<Flex
						h={h}
						maxH={h}
						w={w}
						maxW={w}
						overflow="hidden"
						flexDir="column"
					>
						<Box>
							<Navbar />
						</Box>
						<Flex flexGrow="1" minH="0px">
							<Flex
								flexGrow="1"
								py="2.5"
								px="5"
								minH="0px"
								maxH="100%"
								flexDir="column"
							>
								{children}
							</Flex>
							<Lexicon />
						</Flex>
						<Box>
							<Scratchpad />
						</Box>
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
