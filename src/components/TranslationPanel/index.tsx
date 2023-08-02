"use client";

import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Field from "./Field";

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<Flex direction={expanded ? "row" : "row-reverse"}>
			<Box
				background="gray.700"
				h="100%"
				w={expanded ? "1" : "4"}
				onClick={(e) => setExpanded(!expanded)}
				cursor="pointer"
				placeSelf="center"
				_hover={
					{
						background: "gray.600",
					}
				}
			></Box>

			<Box
				h="100%"
				flexGrow={1}
				background="gray.900"
				display={expanded ? "block" : "none"}
			>
				<Flex background="gray.700" placeContent="center" py="2" onClick={(e) => setExpanded(!expanded)} cursor="pointer" _hover={
					{
						background: "gray.600",
					}
				}>
					<Text fontWeight="medium">Translation Panel</Text>
				</Flex>

				<Box 
				px="3"
				py="2">
					<form>
						<Stack spacing="2" mt="4" h="100%">
							<Field label="Lexeme Form" />
							<Field label="Morph Type" />
							<Field label="Dialect Labels" />
							<Field label="Variant of" />
							<Field label="Pronounciation" />
							
							<Button>Senses</Button>
							<Button>Variants</Button>
							<hr />
							<Button backgroundColor="green.700" type="submit">Save</Button>
							<Button backgroundColor="red.700">Delete</Button>
						</Stack>
					</form>
				</Box>
			</Box>
		</Flex>
	);
}