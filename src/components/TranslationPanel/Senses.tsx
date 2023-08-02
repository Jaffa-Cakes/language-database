import { Text } from "@chakra-ui/react";
import SimpleModal from "@/components/SimpleModal";

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
			<Text>Hello from Senses</Text>
		</SimpleModal>
	);
}
