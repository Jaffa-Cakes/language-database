'use client'

import { Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";

export default function Component() {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <>
            <Box h={expanded ? "25vh" : "44px"} mt={3}/>

            <Flex h="25vh" w="100vw" position="fixed" bottom={0} direction={expanded ? "column" : "column-reverse"}>
                <Box pl={3} pr={4} pt={3} pb={2} roundedTopRight="2xl" background="gray.700" w="fit-content" onClick={(e) => setExpanded(!expanded)} cursor="pointer">
                    <Text>LIFT Exporter</Text>
                </Box>

                <Box flexGrow={1} bottom={0} background="gray.900" p={3} display={expanded ? "block" : "none"}>
                    
                </Box>
            </Flex>
        </>
    )
}