"use client"

import { Select } from "@chakra-ui/react"

export enum Mode {
    Containes,
    Regex,
    Levenshtein
}

interface Props {
    w: number
}

export default function Component(props: Props) {
    const { w } = props

    return (
        <Select w={w} roundedTop="none" borderTop="none">
            <option value={Mode.Containes} selected>Contains</option>
            <option value={Mode.Regex}>Regex</option>
            <option value={Mode.Levenshtein}>Levenshtein</option>
        </Select>
    )
}