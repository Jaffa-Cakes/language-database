"use client";

import { FormLabel, Input, Stack, Select } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface DropProps {
	label: string;
	value?: string;
	set?: (value: string) => void;
	children: ReactNode;
}

export default function Component(props: DropProps) {
	const { label, children, value, set } = props;

	return (
		<Stack spacing="0">
			<FormLabel
				backgroundColor="panel.300"
				px="2"
				py="1"
				roundedTop="md"
				m="0"
				borderWidth="thin"
				borderBottomWidth="inherit"
				borderStyle="solid"
				borderColor="panel.300"
			>
				{label}
			</FormLabel>

			<Select
				roundedTop="none"
				roundedBottom="md"
				mt="0"
				backgroundColor="panel.200"
				borderWidth="thin"
				borderTopWidth="inherit"
				borderStyle="solid"
				borderColor="panel.300"
				placeholder="Select value..."
				_hover={{
					backgroundColor: "panel.100",
				}}
				_focus={{
					backgroundColor: "panel.100",
				}}
				value={value}
				onChange={(e) => {
					if (set !== undefined) set(e.target.value);
				}}
			>
				{children}
			</Select>
		</Stack>
	);
}
