"use client";

import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import Field from "./Field";
import Drop from "./Drop";
import Senses from "./Senses";
import { ISense } from "./Senses/Sense";
import References from "./References";
import { IReference } from "./References/Reference";

import newLexiconWord from "@/actions/newLexiconWord";
import { MorphType, DialectLabel } from "@prisma/client";
import {
	getMorphType,
	morphTypePretty,
	getDialectLabel,
	dialectLabelPretty,
} from "@/utils";
// import { MultiSelect, Option } from "chakra-multiselect";
import MultiSelect from "@/components/MultiSelect";

import TranslationPanelContext from "@/components/TranslationPanel/Context";

import getLexiconWord from "@/actions/getLexiconWord";

import { useContext } from "react";
import deleteWord from "@/actions/deleteWord";

enum SubPanel {
	None,
	Senses,
	References,
}

export default function Component() {
	// Context
	const { translationPanel, setTranslationPanel } = useContext(
		TranslationPanelContext,
	);

	// Panels
	const [expanded, setExpanded] = useState<boolean>(false);
	const [subPanel, setSubPanel] = useState<SubPanel>(SubPanel.None);

	// Values
	const [spelling, setSpelling] = useState<string>("");
	const [morphType, setMorphType] = useState<string>("");
	const [dialectLabels, setDialectLabels] = useState<string[]>([]);
	const [pronunciation, setPronunciation] = useState<string>("");
	const [senses, setSenses] = useState<ISense[]>([]);
	const [references, setReferences] = useState<IReference[]>([]);

	async function setEditValues(id: number) {
		const lexiconWord = await getLexiconWord(id);

		const morphTypeNew = lexiconWord.morphType
			? morphTypePretty(lexiconWord.morphType)
			: "";
		const dialectLabelsNew = lexiconWord.dialectLabels
			? lexiconWord.dialectLabels.map((dialectLabel) =>
					dialectLabelPretty(dialectLabel),
			  )
			: [];

		setSpelling(lexiconWord.spelling);
		setMorphType(morphTypeNew);
		setDialectLabels(dialectLabelsNew);
		setPronunciation(lexiconWord.pronunciation ?? "");
		setSenses(lexiconWord.senses);
		setReferences(lexiconWord.references);
	}

	useEffect(() => {
		if (translationPanel.editId !== undefined) {
			setEditValues(translationPanel.editId);
		}
	}, [translationPanel]);

	function resetForm() {
		// Reset Sub Panels
		setSubPanel(SubPanel.None);

		// Reset values
		setSpelling("");
		setMorphType("");
		setDialectLabels([]);
		setPronunciation("");
		setSenses([]);
		setReferences([]);

		// Reset edit id
		setTranslationPanel({
			editId: undefined,
		});
	}

	async function handleSave() {
		const realDialectLabels = dialectLabels.map(
			(dialectLabel) => getDialectLabel(dialectLabel) as DialectLabel,
		);

		if (translationPanel.editId !== undefined) {
			await deleteWord(translationPanel.editId);
		}

		await newLexiconWord({
			id: translationPanel.editId,
			spelling,
			morphType: getMorphType(morphType),
			dialectLabels: realDialectLabels,
			pronunciation: pronunciation !== "" ? pronunciation : undefined,
			references: references,
			senses: senses,
		});

		resetForm();
	}

	async function closeSubPanel() {
		setSubPanel(SubPanel.None);
	}

	let subPanelDisplay: ReactNode;

	switch (subPanel) {
		case SubPanel.Senses:
			subPanelDisplay = (
				<Senses value={senses} set={setSenses} close={closeSubPanel} />
			);
			break;
		case SubPanel.References:
			subPanelDisplay = (
				<References
					value={references}
					set={setReferences}
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
					background="panel.100"
					h="100%"
					w={expanded ? "1" : "4"}
					onClick={(e) => setExpanded(!expanded)}
					cursor="pointer"
					placeSelf="center"
					_hover={{
						background: "panel.300",
					}}
				></Box>

				<Box
					h="100%"
					flexGrow={1}
					background="panel.100"
					display={expanded ? "block" : "none"}
				>
					<Flex
						background="panel.200"
						placeContent="center"
						py="2"
						onClick={(e) => setExpanded(!expanded)}
						cursor="pointer"
						_hover={{
							background: "panel.300",
						}}
					>
						<Text fontWeight="medium" color="heading.100">
							Translation Panel
						</Text>
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
										label="Dialect Labels"
										options={Object.keys(DialectLabel)}
										value={dialectLabels}
										set={setDialectLabels}
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
											setSubPanel(SubPanel.References)
										}
									>
										References
									</Button>
									<hr />
									<Button
										backgroundColor={
											translationPanel.editId !==
											undefined
												? "yellow.700"
												: "green.700"
										}
										type="submit"
									>
										{translationPanel.editId !== undefined
											? "Update #" +
											  translationPanel.editId
											: "Create"}
									</Button>
									<Button
										backgroundColor="red.700"
										onClick={resetForm}
									>
										Reset
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
