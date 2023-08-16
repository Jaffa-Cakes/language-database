import { Button, Stack } from "@chakra-ui/react";
import Drop from "./../Drop";
import { ReactNode, useEffect, useState } from "react";
import Reference, { IReference } from "./Reference";

interface Props {
	value: IReference[];
	set: (value: IReference[]) => void;
	close: () => void;
}

export default function Component(props: Props) {
	const { value, set, close } = props;

	const [selectedReference, setSelectedReference] = useState<number | null>(
		null,
	);
	const [referenceDrop, setReferenceDrop] = useState<string>("");

	useEffect(() => {
		if (referenceDrop === "") {
			setSelectedReference(null);
			return;
		}

		setSelectedReference(parseInt(referenceDrop));
	}, [referenceDrop, value, selectedReference]);

	async function saveReference(newReference: IReference) {
		if (selectedReference === null) return;

		let newReferences = [...value];

		newReferences[selectedReference] = newReference;

		set(newReferences);
	}

	let displayedReference: ReactNode;

	switch (selectedReference) {
		case null:
			displayedReference = <></>;
			break;
		default:
			displayedReference = (
				<>
					<hr />
					<Reference
						reference={value[selectedReference]}
						save={saveReference}
					/>
				</>
			);
			break;
	}

	async function blankReference() {
		set([
			...value,
			{
				spelling: "New Reference",
				entry: -1,
			},
		]);
		setReferenceDrop(value.length.toString());
	}

	return (
		<Stack
			direction="column"
			spacing="2"
			pl="2"
			borderLeft="2px"
			borderColor="gray.800"
			mt="4"
		>
			<Drop
				label="Reference"
				value={referenceDrop}
				set={setReferenceDrop}
			>
				{value.map((reference, index) => {
					return (
						<option key={index} value={index}>
							{reference.spelling}
						</option>
					);
				})}
			</Drop>

			{displayedReference}

			<hr />

			<Button onClick={() => close()}>Close</Button>
			<Button onClick={() => blankReference()}>Add Reference</Button>
		</Stack>
	);
}
