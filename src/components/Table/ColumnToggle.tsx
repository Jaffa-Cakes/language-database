"use client";

import { Box, Checkbox, Flex } from "@chakra-ui/react";

import { Column, getColumnReadable } from "@/WordsList";
import { useState } from "react";

interface IProps {
	columns: Column[];
	activeColumns: Column[];
	toggleColumn: (column: Column) => void;
}

export default function Component(props: IProps) {
	const { columns, activeColumns, toggleColumn } = props;

	return (
		<Flex justifyContent="center" wrap="wrap">
			{columns.map((column) => {
				const active = activeColumns.includes(column);
				const [isChecked, setIsChecked] = useState<boolean>(active);

				return (
					<Box
					backgroundColor={active ? "gray.700" : "gray.900"}
					
					px="1.5" py="0.5" mx="1.5" my="1" rounded="lg" border="1px"

					borderColor={active ? "gray.900" : "gray.700"}

					>
						<Checkbox
							size="sm"
							key={column}
							defaultChecked={active}
							onChange={() => { toggleColumn(column); setIsChecked(!isChecked); }}
						>
							{getColumnReadable(column)}
						</Checkbox>
					</Box>
				);
			})}
		</Flex>
	);
}
