import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Field from "./../Field";
import Drop from "./../Drop";
import { useState } from "react";
import { GrammaticalInfo } from "@prisma/client";
import { getGrammaticalInfo } from "@/utils";
import grammaticalInfoPretty from "@/utils/grammaticalInfoPretty";

export interface ISense {
	gloss: string;
	reversalEntries?: string;
	definition?: string;
	grammaticalInfo?: GrammaticalInfo;
}

export interface Props {
	sense: ISense;
	save: (newVariant: ISense) => void;
}

export default function Component(props: Props) {
	const { sense, save } = props;

	const [gloss, setGloss] = useState<string>(sense.gloss || "");
	const [reversalEntries, setReversalEntries] = useState<string>(
		sense.reversalEntries || "",
	);
	const [definition, setDefinition] = useState<string>(
		sense.definition || "",
	);
	const [grammaticalInfo, setGrammaticalInfo] = useState<string>(
		sense.grammaticalInfo || "",
	);

	async function saveChanges() {
		save({
			gloss,
			reversalEntries:
				reversalEntries === "" ? undefined : reversalEntries,
			definition: definition === "" ? undefined : definition,
			grammaticalInfo:
				grammaticalInfo === ""
					? undefined
					: getGrammaticalInfo(grammaticalInfo),
		});
	}

	return (
		<Stack direction="column" spacing="2">
			<Field label="Gloss" value={gloss} set={setGloss} />
			<Field
				label="Reversal Entries"
				value={reversalEntries}
				set={setReversalEntries}
			/>
			<Field label="Definition" value={definition} set={setDefinition} />
			<Drop
				label="Grammatical Info"
				value={grammaticalInfo}
				set={setGrammaticalInfo}
			>
				{Object.keys(GrammaticalInfo).map((key) => (
					<option key={key} value={key}>
						{grammaticalInfoPretty(key)}
					</option>
				))}
			</Drop>

			<Button colorScheme="blue" onClick={saveChanges}>
				Save
			</Button>
		</Stack>
	);
}
