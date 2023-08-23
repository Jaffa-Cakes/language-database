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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import getWordById from "@/actions/getWordById";
import updateWordById from "@/actions/updateWordById";

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
            getWordById(id).then((word) => {
                setEnglish(word.english);
                setLanguage(word.language);
                setSonetic(word.sonetic);
                setNotes(word.notes);
            });
        }
    }, [id, isOpen]);

    async function save() {
        await updateWordById(id, {
            english,
            language,
            sonetic,
            notes,
        });
        refreshSearch();
        onClose();
    }

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
                    <Text>English</Text>
                    <Input value={english} onChange={(e) => setEnglish(e.target.value)} />

                    <Text>Language</Text>
                    <Input value={language} onChange={(e) => setLanguage(e.target.value)} />

                    <Text>Sonetic</Text>
                    <Input value={sonetic} onChange={(e) => setSonetic(e.target.value)} />

                    <Text>Notes</Text>
                    <Input value={notes} onChange={(e) => setNotes(e.target.value)} />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={save}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
