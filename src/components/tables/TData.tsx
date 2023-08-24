"use client";

import { Td } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface Props {
	children: ReactNode;
	onClick?: (e: React.MouseEvent<HTMLTableCellElement>) => void;
}

export default function Component(props: Props) {
	const { onClick, children } = props;

	return (
		<Td
			maxW={40}
			overflowX="auto"
			css={{
				overflowX: "hidden",
				textOverflow: "ellipsis",
				cursor: onClick === undefined ? "default" : "pointer",
			}}
			onClick={onClick}
			_hover={{
				backgroundColor: "whiteAlpha.100",
			}}
		>
			{children}
		</Td>
	);
}
