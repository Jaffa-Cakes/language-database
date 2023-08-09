import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import SimpleModal from "@/components/SimpleModal";
import Field from "./../Field";
import Drop from "./../Drop";
import { useState } from "react";
import Variant from "./Variant";
import { IVariant } from "@/actions/newLexiconWord";

export interface Props {
	isOpen: boolean;
	onClose: () => void;
	value: IVariant[];
	set: (value: IVariant[]) => void;
}

export default function Component(props: Props) {
	const { isOpen, onClose, value, set } = props;
	const selectedVariant = props.value[0];
	console.log(selectedVariant)

	async function setSelectedVariant(value: IVariant) {
		// check if variant already exists
		// if it does, update it
		let newValue = [...props.value];
		
		for (let i = 0; i < newValue.length; i++) {
			if (newValue[i].variantForm === value.variantForm) {
				newValue[i] = value;
				set(newValue);
				return;
			}
		}
	}

	return (
		<SimpleModal
			isOpen={isOpen}
			onClose={onClose}
			title="Translation Variants"
		>
			<Flex>
				<Stack
					direction="column"
					spacing="2"
					pr="2"
					borderRight="2px"
					borderColor="gray.800"
				>
					<Button>Variant 1</Button>
					<Button>Variant 2</Button>
					<Button>Variant 3</Button>
				</Stack>
				<Variant value={selectedVariant} set={setSelectedVariant}/>
			</Flex>
		</SimpleModal>
	);
}
