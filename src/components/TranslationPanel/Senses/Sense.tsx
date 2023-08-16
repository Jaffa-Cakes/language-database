import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Field from "./../Field";
import Drop from "./../Drop";
import { useState } from "react";

export interface ISense {
	gloss: string;
}

export interface Props {
	sense: ISense;
	save: (newVariant: ISense) => void;
}

export default function Component(props: Props) {
	const { sense, save } = props;

	const [gloss, setGloss] = useState<string>(sense.gloss || "");

	async function saveChanges() {
		save({
			gloss,
		});
	}

	return (
		<Stack direction="column" spacing="2">
			<Field label="Gloss" value={gloss} set={setGloss} />

			<Button colorScheme="blue" onClick={saveChanges}>
				Save
			</Button>
		</Stack>
	);
}
