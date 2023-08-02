"use client";

import { Input } from "@chakra-ui/react";

interface Props {
	w: number;
	placeholder: string;
	setValue: (value: string) => void;
	roundedBottom?: string;
	borderBottom?: string;
}

export default function Component(props: Props) {
	const { placeholder, setValue, w, roundedBottom, borderBottom } = props;

	return (
		<Input
			w={w}
			placeholder={placeholder}
			onChange={(e) => setValue(e.target.value)}
			roundedBottom={roundedBottom}
			borderBottom={borderBottom}
			backgroundColor="blackAlpha.100"
			borderColor="whiteAlpha.200"
			_hover={{
				backgroundColor: "blackAlpha.300",
			}}
			_focus={{
				backgroundColor: "blackAlpha.300",
			}}
		/>
	);
}
