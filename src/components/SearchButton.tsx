"use client";

import { Button, Flex } from "@chakra-ui/react";

interface Props {
	doSearch: () => void;
}

export default function Component(props: Props) {
	const { doSearch } = props;

	return (
		<Flex justifyContent="center">
			<Button onClick={doSearch} type="submit" w="48">
				Search
			</Button>
		</Flex>
	);
}
