"use client";

import { useState } from "react";

import ScratchpadContext, { Scratchpad } from "@/components/Scratchpad/Context";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [scratchpad, setScratchpad] = useState<Scratchpad>({
		data: [],
	});

	return (
		<CacheProvider>
			<ChakraProvider>
				<ScratchpadContext.Provider
					value={{ scratchpad, setScratchpad }}
				>
					{children}
				</ScratchpadContext.Provider>
			</ChakraProvider>
		</CacheProvider>
	);
}
