"use client";

import { useState } from "react";

import ScratchpadContext, {
	Scratchpad,
} from "@/components/ScratchpadPanel/Context";
import TranslationPanelContext, {
	TranslationPanel,
} from "@/components/TranslationPanel/Context";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
	const [scratchpad, setScratchpad] = useState<Scratchpad>(new Scratchpad());
	const [translationPanel, setTranslationPanel] = useState<TranslationPanel>(
		{},
	);

	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>
				<ScratchpadContext.Provider
					value={{ scratchpad, setScratchpad }}
				>
					<TranslationPanelContext.Provider
						value={{ translationPanel, setTranslationPanel }}
					>
						{children}
					</TranslationPanelContext.Provider>
				</ScratchpadContext.Provider>
			</ChakraProvider>
		</CacheProvider>
	);
}
