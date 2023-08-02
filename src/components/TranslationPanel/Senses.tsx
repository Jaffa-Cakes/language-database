import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import SimpleModal from "@/components/SimpleModal";
import Field from "./Field";

export interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function Component(props: Props) {
	const { isOpen, onClose } = props;

	return (
		<SimpleModal
			isOpen={isOpen}
			onClose={onClose}
			title="Translation Senses"
		>
			<Flex>
				<Stack
					direction="column"
					spacing="2"
					pr="2"
					borderRight="2px"
					borderColor="gray.800"
				>
					<Button>Sense 1</Button>
					<Button>Sense 2</Button>
					<Button>Sense 3</Button>
				</Stack>
				<Stack direction="column" spacing="2" flexGrow="1" pl="2">
					<Field label="Gloss" />
					<Field label="Reversal Entries" />
					<Field label="Definition" />
					<Field label="Grammatical Info" />
					<Field label="Example" />
					<Field label="Translation" />
					<Field label="Reference" />
					<Field label="Scientific Name" />
					<Field label="Bibliography" />
					<Field label="General Note" />
					<Field label="Source" />
					<Field label="Semantic Domains" />
					<Field label="Status" />
				</Stack>
			</Flex>
		</SimpleModal>
	);
}
