import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface Props {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title: string;
}

export default function Component(props: Props) {
	const { isOpen, onClose, children, title } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent backgroundColor="panel.300">
				<ModalHeader color="heading.100">{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>

				<ModalFooter>
					<Button
						backgroundColor="panel.100"
						mr={3}
						onClick={onClose}
					>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
