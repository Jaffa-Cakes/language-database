"use client";

import { FormLabel, Input, Stack } from "@chakra-ui/react";

export interface FieldProps {
	label: string;
	value?: string;
	set?: (value: string) => void;
}

export default function Component(props: FieldProps) {
	const { label, value, set } = props;

	return (
		<Stack spacing="0">
			<FormLabel
				backgroundColor="gray.700"
				px="2"
				py="1"
				roundedTop="md"
				m="0"
				borderWidth="thin"
				borderBottomWidth="inherit"
				borderStyle="solid"
				borderColor="gray.600"
			>
				{label}
			</FormLabel>

			<Input
				type="text"
				roundedTop="none"
				roundedBottom="md"
				mt="0"
				backgroundColor="gray.800"
				borderWidth="thin"
				borderTopWidth="inherit"
				borderStyle="solid"
				borderColor="gray.600"
				placeholder="Type here..."
				_hover={{
					backgroundColor: "gray.900",
				}}
				_focus={{
					backgroundColor: "gray.900",
				}}
				value={value}
				onChange={(e) => {
					if (set !== undefined) set(e.target.value);
				}}
			/>
		</Stack>
	);
}
