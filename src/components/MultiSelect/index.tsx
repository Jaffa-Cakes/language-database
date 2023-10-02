import { Stack, FormLabel, Box, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

export interface Props {
	label: string;
	options: string[];
	value: string[];
	set: (value: string[]) => void;
}

export default function Component(props: Props) {
	const { label, options, value, set } = props;

	const [expanded, setExpanded] = useState(false);

	async function addOption(option: string) {
		set([...value, option]);
	}

	async function removeOption(option: string) {
		set(value.filter((value) => value !== option));
	}

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
				<Flex
					justifyContent="space-between"
					placeContent="space-between"
				>
					<Box>{label}</Box>
					<Button
						size="xs"
						fontWeight="extrabold"
						onClick={(e) => setExpanded(!expanded)}
					>
						{expanded ? "↑" : "↓"}
					</Button>
				</Flex>
			</FormLabel>

			<Box
				backgroundColor="panel.300"
				borderStyle="solid"
				borderColor="panel.300"
				borderWidth="thin"
				display={expanded ? "block" : "none"}
			>
				<Box
					borderStyle="solid"
					borderColor="panel.200"
					borderWidth="thin"
				/>
				<Flex px="1" py="0.5" wrap="wrap">
					{options.map((option, index) => (
						<Button
							key={index}
							m="1"
							size="xs"
							onClick={(e) => addOption(option)}
						>
							{option}
						</Button>
					))}
				</Flex>
			</Box>

			<Flex
				roundedTop="none"
				roundedBottom="md"
				p="1"
				mt="0"
				minH="3rem"
				backgroundColor="panel.200"
				borderWidth="thin"
				borderStyle="solid"
				borderColor="panel.300"
				wrap="wrap"
				_hover={{
					backgroundColor: "panel.100",
				}}
				_focus={{
					backgroundColor: "panel.100",
				}}
			>
				{value.map((value, index) => (
					<Button
						key={index}
						size="sm"
						onClick={(e) => removeOption(value)}
						m="1"
					>
						{value}
					</Button>
				))}
			</Flex>
		</Stack>
	);
}
