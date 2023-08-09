import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Field from "./../Field";
import Drop from "./../Drop";
import { useState } from "react";
import { IVariant } from "@/actions/newLexiconWord";

export interface Props {
	value: IVariant;
	set: (value: IVariant) => void;
}

export default function Component(props: Props) {
	const [variantForm, setVariantForm] = useState<string>("");
	const [dialectLabels, setDialectLabels] = useState<string>("");
	const [variantType, setVariantType] = useState<string>("");
	const [comment, setComment] = useState<string>("");

    async function saveChanges() {
        props.set({
            variantForm,
            dialectLabels,
            variantType,
            comment,
        });
    }

	return (
        <Stack direction="column" spacing="2" flexGrow="1" pl="2">
            <Field label="Variant Form" value={variantForm} set={setVariantForm}/>
            <Drop
                label="Dialect Labels"
                value={dialectLabels}
                set={setDialectLabels}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </Drop>
            <Field label="Variant Type" value={variantType} set={setVariantType} />
            <Field label="Comment" value={comment} set={setComment}/>

            <Button colorScheme="blue" onClick={saveChanges}>Save</Button>
        </Stack>
	);
}
