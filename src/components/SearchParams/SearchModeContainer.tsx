"use client";

import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
	children: ReactNode;
}

export default function Component(props: Props) {
	const { children } = props;

	return <Flex flexDir="column">{children}</Flex>;
}
