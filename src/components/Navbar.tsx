"use client";

import { Box, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation"

export default function Component() {
	return (
		<HStack spacing={4} background="gray.900" px={4} py={2} shadow="base">
			<NavButton href="/search/words" name="Words" />
			<NavButton href="/search/sources" name="Sources" />
			<NavButton href="/search/custom-sql" name="Custom SQL" />

			<Box flexGrow={1} />

			<NavButton href="/import" name="Import" />
		</HStack>
	);
}

interface NavButtonProps {
	href: string;
	name: string;
}

function NavButton(props: NavButtonProps) {
	const { href, name } = props;

	const pathname = usePathname();

	return (
		<Link
			as={NextLink}
			href={href}
			borderWidth="thin"
			borderStyle="solid"
			borderColor="whiteAlpha.100"
			backgroundColor={pathname == href ? "whiteAlpha.100" : "transparent"}
			rounded="lg"
			py="1"
			px="2"
			_hover={{
				textDecoration: "none",
				backgroundColor: "whiteAlpha.200",
			}}
		>
			{name}
		</Link>
	);
}
