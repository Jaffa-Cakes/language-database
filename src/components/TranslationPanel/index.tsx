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
// import Variants from "./Variants";

import newLexiconWord from "@/actions/newLexiconWord";
import { match } from "assert";
import { MorphType, DialectLabel } from "@prisma/client";
import {
	getMorphType,
	morphTypePretty,
	getDialectLabel,
	dialectLabelPretty,
} from "@/utils";
import { MultiSelect, Option } from "chakra-multiselect";

enum SubPanel {
	None,
	Senses,
	Variants,
}

export default function Component() {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [subPanel, setSubPanel] = useState<SubPanel>(SubPanel.None);

	// Values
	const [spelling, setSpelling] = useState<string>("");
	const [morphType, setMorphType] = useState<string>("");
	const [dialectLabels, setDialectLabels] = useState<string[]>([]);
	const [pronunciation, setPronunciation] = useState<string>("");
	// Variants
	// const [variantsDefinition, setVariantsDefinition] = useState<IVariant[]>([
	// 	{
	// 		variantForm: "coolguy",
	// 		dialectLabels: "",
	// 		variantType: "",
	// 		comment: "",
	// 	},
	// ]);

	async function handleSave() {
		const realDialectLabels = dialectLabels.map(
			(dialectLabel) => getDialectLabel(dialectLabel) as DialectLabel,
		);

		await newLexiconWord({
			spelling,
			morphType: getMorphType(morphType),
			dialectLabels: realDialectLabels,
			pronunciation: pronunciation !== "" ? pronunciation : undefined,
			references: [],
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
			// subPanelDisplay = (
			// 	<Variants
			// 		value={variantsDefinition}
			// 		set={setVariantsDefinition}
			// 		close={closeSubPanel}
			// 	/>
			// );
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
										value={spelling}
										set={setSpelling}
									/>
									<Drop
										label="Morph Type"
										value={morphType}
										set={setMorphType}
									>
										{Object.keys(MorphType).map((key) => (
											<option key={key} value={key}>
												{morphTypePretty(key)}
											</option>
										))}
									</Drop>
									<MultiSelect
										options={Object.keys(DialectLabel).map(
											(key) => ({
												label: dialectLabelPretty(key),
												value: dialectLabelPretty(key),
											}),
										)}
										value={dialectLabels}
										onChange={(e) =>
											setDialectLabels(e as string[])
										}
										label="Dialect Labels"
									/>
									<Field
										label="Pronunciation"
										value={pronunciation}
										set={setPronunciation}
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
