"use client";

import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Field from "./Field";
import Drop from "./Drop";
import Senses from "./Senses";
import Variants from "./Variants";
import { IVariant } from "@/actions/newLexiconWord";

import { MorphType, DialectLabel } from "@prisma/client";

import newLexiconWord from "@/actions/newLexiconWord";

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);

	// Values
	const [lexemeForm, setLexemeForm] = useState<string>("");
	const [morphType, setMorphType] = useState<string>("");
	const [dialectLabels, setDialectLabels] = useState<string>("");
	const [variantOf, setVariantOf] = useState<string>("");
	const [pronounciation, setPronounciation] = useState<string>("");
	// Variants
	const [variantsDefinition, setVariantsDefinition] = useState<IVariant[]>([{
		variantForm: "coolguy",
		dialectLabels: "",
		variantType: "",
		comment: "",
	}]);

	function createDisclosure() {
		const { isOpen, onOpen, onClose } = useDisclosure();

		return { isOpen, onOpen, onClose };
	}

	const senses = createDisclosure();
	const variants = createDisclosure();

	async function handleSave() {
		await newLexiconWord({
			lexemeForm,
			morphType,
			dialectLabels,
			variantOf,
			pronounciation,
			variantsDefinition,
		});
	}

	return (
		<>
			<Flex direction={expanded ? "row" : "row-reverse"}>
				<Box
					background="gray.700"
					h="100%"
					w={expanded ? "1" : "4"}
					onClick={(e) => setExpanded(!expanded)}
					cursor="pointer"
					placeSelf="center"
					_hover={{
						background: "gray.600",
					}}
				></Box>

				<Box
					h="100%"
					flexGrow={1}
					background="gray.900"
					display={expanded ? "block" : "none"}
				>
					<Flex
						background="gray.700"
						placeContent="center"
						py="2"
						onClick={(e) => setExpanded(!expanded)}
						cursor="pointer"
						_hover={{
							background: "gray.600",
						}}
					>
						<Text fontWeight="medium">Translation Panel</Text>
					</Flex>

					<Box px="3" py="2">
						<form action={handleSave}>
							<Stack spacing="2" mt="4" h="100%">
								<Field
									label="Lexeme Form"
									value={lexemeForm}
									set={setLexemeForm}
								/>
								<Drop
									label="Morph Type"
									value={morphType}
									set={setMorphType}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</Drop>
								<Drop
									label="Dialect Labels"
									value={dialectLabels}
									set={setDialectLabels}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</Drop>
								<Field
									label="Variant of"
									value={variantOf}
									set={setVariantOf}
								/>
								<Field
									label="Pronounciation"
									value={pronounciation}
									set={setPronounciation}
								/>

								<Button onClick={senses.onOpen}>Senses</Button>
								<Button onClick={variants.onOpen}>
									Variants
								</Button>
								<hr />
								<Button
									backgroundColor="green.700"
									type="submit"
								>
									Save
								</Button>
								<Button backgroundColor="red.700">
									Delete
								</Button>
							</Stack>
						</form>
					</Box>
				</Box>
			</Flex>

			<Senses isOpen={senses.isOpen} onClose={senses.onClose}/>
			<Variants isOpen={variants.isOpen} onClose={variants.onClose} value={variantsDefinition} set={setVariantsDefinition}/>
		</>
	);
}
