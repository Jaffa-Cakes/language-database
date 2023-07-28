"use client";

import { Select } from "@chakra-ui/react";

export enum Mode {
	Containes,
	Regex,
	Levenshtein,
}

interface Props {
	w: number;
}

export default function Component(props: Props) {
	const { w } = props;

	return (
		<Select
			w={w}
			roundedTop="none"
			borderTop="none"
			backgroundColor="blackAlpha.100"
			borderColor="whiteAlpha.200"
			cursor="pointer"
            _hover={{
                backgroundColor: "blackAlpha.300",
            }}
            _focus={{
                backgroundColor: "blackAlpha.300",
            }}
			defaultValue={Mode.Containes}
		>
			<option value={Mode.Containes}>
				Contains
			</option>
			<option value={Mode.Regex}>Regex</option>
			<option value={Mode.Levenshtein}>Levenshtein</option>
		</Select>
	);
}
