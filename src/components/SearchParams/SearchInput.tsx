"use client"

import { Input } from "@chakra-ui/react"

interface Props {
    w: number,
    placeholder: string
    setValue: (value: string) => void,
    roundedBottom?: string
}

export default function Component(props: Props) {
    const { placeholder, setValue, w, roundedBottom } = props

    return (
        <Input
            w={w}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            roundedBottom={roundedBottom}
        />
    )
}