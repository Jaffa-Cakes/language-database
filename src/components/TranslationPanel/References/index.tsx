import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Drop from "./../Drop";
import { DragEventHandler, ReactNode, useEffect, useState } from "react";
import Reference, { IReference } from "./Reference";
import getEntryById from "@/actions/getEntryById";

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
		setReferenceDrop("");
		setSelectedReference(null);
		set([
			...value,
			{
				spelling: "New Reference",
				entry: -1,
			},
		]);
		setReferenceDrop(value.length.toString());
	}

	const handleDrop: DragEventHandler<HTMLDivElement> = async (e) => {
		e.preventDefault();

		if (e.dataTransfer === null) return;

		const data = e.dataTransfer.getData("text/plain");

		if (data === "") return;

		const entryId = parseInt(data);

		const entry = await getEntryById(entryId);

		setReferenceDrop("");
		setSelectedReference(null);
		set([
			...value,
			{
				spelling: entry.language,
				entry: entryId,
			},
		]);
		setReferenceDrop(value.length.toString());
	};

	const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
	};

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

			<Flex
				py={2}
				px={2}
				minH={32}
				background="black"
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				direction="column"
				placeContent="center"
				placeItems="center"
			>
				<Text fontSize="xs" userSelect="none">
					Drag &apos;n Drop Entry
				</Text>
			</Flex>
		</Stack>
	);
}
