"use client"

import { ReactNode } from "react"
import { HStack } from "@chakra-ui/react"

interface Props {
    children: ReactNode
}

export default function Component(props: Props) {
    const { children } = props

    return (
        <HStack wrap="wrap" spacing={4} p={4} justifyContent="center" alignItems="start">
            {children}
        </HStack>
    )
}