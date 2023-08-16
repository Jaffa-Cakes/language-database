import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import SimpleModal from "@/components/SimpleModal";
import Field from "./../Field";
import Drop from "./../Drop";
import { ReactNode, useEffect, useState } from "react";
import Variant from "./Variant";
import { IVariant } from "@/actions/newLexiconWord";

export interface Props {
	value: IVariant[];
	set: (value: IVariant[]) => void;
	close: () => void;
}

export default function Component(props: Props) {
	const [selectedVariant, setSelectedVariant] = useState<IVariant | null>(
		null,
	);
	const [variantDrop, setVariantDrop] = useState<string>("");

	useEffect(() => {
		if (variantDrop === "") {
			setSelectedVariant(null);
			return;
		}

		for (let i = 0; i < props.value.length; i++) {
			if (props.value[i].variantForm === variantDrop) {
				setSelectedVariant(props.value[i]);
				return;
			}
		}
	}, [variantDrop]);

	async function saveVariant(newVariant: IVariant) {
		if (selectedVariant === null) return;

		let newVariants = [...props.value];

		newVariants[newVariants.indexOf(selectedVariant)] = newVariant;

		props.set(newVariants);
	}

	let displayedVariant: ReactNode;

	switch (selectedVariant) {
		case null:
			displayedVariant = <></>;
			break;
		default:
			displayedVariant = (
				<>
					<hr />
					<Variant value={selectedVariant} save={saveVariant} />
				</>
			);
			break;
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
			<Drop label="Variant" value={variantDrop} set={setVariantDrop}>
				{props.value.map((variant, index) => {
					return (
						<option key={index} value={variant.variantForm}>
							{variant.variantForm}
						</option>
					);
				})}
			</Drop>

			{displayedVariant}

			<hr />

			<Button onClick={() => props.close()}>Close</Button>
		</Stack>
	);
}
