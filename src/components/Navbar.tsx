'use client'

import { Box, HStack, Link, Spacer } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function Component() {
    return (
        <HStack spacing={4} background="red.700" px={4} py={2} mb={2}>
            <Link as={NextLink} href="/">Home</Link>
            <Link as={NextLink} href="/import">Import</Link>

            <Box w={1} h={3} background="red.900" roundedTop="full" roundedBottom="full"/>

            <Link as={NextLink} href="/search/sources">Sources</Link>
            <Link as={NextLink} href="/search/individuals">Individuals</Link>
            <Link as={NextLink} href="/search/words">Words</Link>
        </HStack>
    )
}