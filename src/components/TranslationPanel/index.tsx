"use client";

import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import Field from "./Field";
import Drop from "./Drop";
import Senses from "./Senses";
import Variants from "./Variants";
import { IVariant } from "@/actions/newLexiconWord";

import { MorphType, DialectLabel } from "@prisma/client";

import newLexiconWord from "@/actions/newLexiconWord";
import { match } from "assert";

enum SubPanel {
	None,
	Senses,
	Variants,
}

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [subPanel, setSubPanel] = useState<SubPanel>(SubPanel.None);

	// Values
	const [lexemeForm, setLexemeForm] = useState<string>("");
	const [morphType, setMorphType] = useState<string>("");
	const [dialectLabels, setDialectLabels] = useState<string>("");
	const [variantOf, setVariantOf] = useState<string>("");
	const [pronounciation, setPronounciation] = useState<string>("");
	// Variants
	const [variantsDefinition, setVariantsDefinition] = useState<IVariant[]>([
		{
			variantForm: "coolguy",
			dialectLabels: "",
			variantType: "",
			comment: "",
		},
	]);

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

	async function closeSubPanel() {
		setSubPanel(SubPanel.None);
	}

	let subPanelDisplay: ReactNode;

	switch (subPanel) {
		case SubPanel.Senses:
			subPanelDisplay = <Senses />;
			break;
		case SubPanel.Variants:
			subPanelDisplay = (
				<Variants
					value={variantsDefinition}
					set={setVariantsDefinition}
					close={closeSubPanel}
				/>
			);
			break;
		default:
			subPanelDisplay = <></>;
			break;
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
							<Stack direction="row" spacing="2" h="100%">
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
										{Object.keys(MorphType).map((key) => (
											<option value={key}>{key}</option>
										))}
									</Drop>
									<Drop
										label="Dialect Labels"
										value={dialectLabels}
										set={setDialectLabels}
									>
										{Object.keys(DialectLabel).map(
											(key) => (
												<option value={key}>
													{key}
												</option>
											),
										)}
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

									<Button
										onClick={() =>
											setSubPanel(SubPanel.Senses)
										}
									>
										Senses
									</Button>
									<Button
										onClick={() =>
											setSubPanel(SubPanel.Variants)
										}
									>
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

								{subPanelDisplay}
							</Stack>
						</form>
					</Box>
				</Box>
			</Flex>
		</>
	);
}
