'use client'

import { Flex, RadioGroup, Stack, Radio } from "@chakra-ui/react"

export default function Component() {
    return (
        <Flex justifyContent="center" mb={3}>
            <RadioGroup defaultValue="1">
                <Stack direction="row">
                    <Radio size="sm" value="1">Contains</Radio>
                    <Radio size="sm" value="2">Regex</Radio>
                    <Radio size="sm" value="3">Levenshtein</Radio>
                </Stack>
            </RadioGroup>
        </Flex>
    )
}