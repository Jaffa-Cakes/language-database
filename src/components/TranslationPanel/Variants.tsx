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
			title="Translation Variants"
		>
			<Flex>
				<Stack direction="column" spacing="2" pr="2" borderRight="2px" borderColor="gray.800">
					<Button>Variant 1</Button>
					<Button>Variant 2</Button>
					<Button>Variant 3</Button>
				</Stack>
				<Stack direction="column" spacing="2" flexGrow="1" pl="2">
					<Field label="Variant Form" />
					<Field label="Dialect Labels" />
					<Field label="Variant Type" />
					<Field label="Comment" />
				</Stack>
			</Flex>
		</SimpleModal>
	);
}
