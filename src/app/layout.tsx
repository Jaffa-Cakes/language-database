"use client";

import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Exporter from "@/components/Exporter";
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
	return (
		<html lang="en-AU">
			<body>
				<Providers>
					<Flex h="100vh" w="100vw" flexDir="column">
						<Box>
							<Navbar />
						</Box>
						<Box flexGrow="1">
							<Flex h="100%">
								<Box flexGrow="1" py="2.5" px="5">
									{children}
								</Box>
								<Scratchpad />
							</Flex>
						</Box>
						<Box>
							<Exporter />
						</Box>
					</Flex>
				</Providers>
			</body>
		</html>
	);
}
