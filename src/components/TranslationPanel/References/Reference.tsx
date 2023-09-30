import { Button, Stack } from "@chakra-ui/react";
import Field from "./../Field";
import { useState } from "react";

export interface IReference {
	spelling: string;
	entry: number;
}

export interface Props {
	reference: IReference;
	save: (newReference: IReference) => void;
}

export default function Component(props: Props) {
	const { reference, save } = props;

	const [spelling, setSpelling] = useState<string>(reference.spelling || "");
	const [entry, setEntry] = useState<string>(
		(reference.entry as unknown as string) || "",
	);

	async function saveChanges() {
		save({
			spelling,
			entry: parseInt(entry),
		});
	}

	return (
		<Stack direction="column" spacing="2">
			<Field label="Spelling" value={spelling} set={setSpelling} />
			<Field label="Entry" value={entry} set={setEntry} />

			<Button backgroundColor="green.600" onClick={saveChanges}>
				Save
			</Button>
		</Stack>
	);
}
