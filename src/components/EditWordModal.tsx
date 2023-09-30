"use client";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Button,
	Text,
	Input,
	VStack,
	Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import getEntryById from "@/actions/getEntryById";
import updateEntryById from "@/actions/updateEntryById";

export interface Props {
	isOpen: boolean;
	onClose: () => void;
	refreshSearch: () => void;
	id: number;
}

export default function Component(props: Props) {
	const { isOpen, onClose, refreshSearch, id } = props;
	const [english, setEnglish] = useState<string>("");
	const [language, setLanguage] = useState<string>("");
	const [sonetic, setSonetic] = useState<string>("");
	const [notes, setNotes] = useState<string>("");

	useEffect(() => {
		if (id !== 0 && isOpen) {
			getEntryById(id).then((word) => {
				setEnglish(word.english);
				setLanguage(word.language);
				setSonetic(word.sonetic);
				setNotes(word.notes);
			});
		}
	}, [id, isOpen]);

	async function save() {
		await updateEntryById(id, {
			english,
			language,
			sonetic,
			notes,
		});
		refreshSearch();
		onClose();
	}

	const inputBackgroundColor = "blackAlpha.300";
	const inputHover = {
		backgroundColor: "blackAlpha.500",
	};
	const inputFocus = {
		backgroundColor: "blackAlpha.500",
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent backgroundColor="panel.300">
				<ModalHeader color="heading.100">Edit Entry</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack spacing={4} align="left">
						<Box>
							<Text>English</Text>
							<Input
								mt="2"
								value={english}
								onChange={(e) => setEnglish(e.target.value)}
								backgroundColor={inputBackgroundColor}
								_hover={inputHover}
								_focus={inputFocus}
							/>
						</Box>

						<Box>
							<Text>Language</Text>
							<Input
								mt="2"
								value={language}
								onChange={(e) => setLanguage(e.target.value)}
								backgroundColor={inputBackgroundColor}
								_hover={inputHover}
								_focus={inputFocus}
							/>
						</Box>

						<Box>
							<Text>Sonetic</Text>
							<Input
								mt="2"
								value={sonetic}
								onChange={(e) => setSonetic(e.target.value)}
								backgroundColor={inputBackgroundColor}
								_hover={inputHover}
								_focus={inputFocus}
							/>
						</Box>

						<Box>
							<Text>Notes</Text>
							<Input
								mt="2"
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								backgroundColor={inputBackgroundColor}
								_hover={inputHover}
								_focus={inputFocus}
							/>
						</Box>
					</VStack>
				</ModalBody>

				<ModalFooter>
					<Button backgroundColor="panel.100" mr={3} onClick={save}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
