import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Field from "./../Field";
import Drop from "./../Drop";
import { ReactNode, useEffect, useState } from "react";
import Sense, { ISense } from "./Sense";

interface Props {
	value: ISense[];
	set: (value: ISense[]) => void;
	close: () => void;
}

export default function Component(props: Props) {
	const { value, set, close } = props;

	const [selectedSense, setSelectedSense] = useState<number | null>(null);
	const [senseDrop, setSenseDrop] = useState<string>("");

	useEffect(() => {
		if (senseDrop === "") {
			setSelectedSense(null);
			return;
		}

		setSelectedSense(parseInt(senseDrop));
	}, [senseDrop, value, selectedSense]);

	async function saveSense(newSense: ISense) {
		if (selectedSense === null) return;

		let newSenses = [...value];

		newSenses[selectedSense] = newSense;

		set(newSenses);
	}

	let displayedSense: ReactNode;

	switch (selectedSense) {
		case null:
			displayedSense = <></>;
			break;
		default:
			displayedSense = (
				<>
					<hr />
					<Sense sense={value[selectedSense]} save={saveSense} />
				</>
			);
			break;
	}

	async function blankSense() {
		set([
			...value,
			{
				gloss: "New Sense",
				reversalEntries: undefined,
				definition: undefined,
			},
		]);
		setSenseDrop(value.length.toString());
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
			<Drop label="Sense" value={senseDrop} set={setSenseDrop}>
				{value.map((sense, index) => {
					return (
						<option key={index} value={index}>
							{sense.gloss}
						</option>
					);
				})}
			</Drop>

			{displayedSense}

			<hr />

			<Button onClick={() => close()}>Close</Button>
			<Button onClick={() => blankSense()}>Add Sense</Button>
		</Stack>
	);
}
