import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Field from "./../Field";
import Drop from "./../Drop";
import { useState } from "react";

export interface ISense {
	gloss: string;
	reversalEntries?: string;
	definition?: string;
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

	async function saveChanges() {
		save({
			gloss,
			reversalEntries:
				reversalEntries === "" ? undefined : reversalEntries,
			definition: definition === "" ? undefined : definition,
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

			<Button colorScheme="blue" onClick={saveChanges}>
				Save
			</Button>
		</Stack>
	);
}
