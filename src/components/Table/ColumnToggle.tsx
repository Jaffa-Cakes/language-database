"use client";

import { Checkbox, Flex } from "@chakra-ui/react";

import { Column, getColumnReadable } from "@/WordsList";

interface IProps {
	columns: Column[];
	activeColumns: Column[];
	toggleColumn: (column: Column) => void;
}

export default function Component(props: IProps) {
	const { columns, activeColumns, toggleColumn } = props;

	return (
		<Flex justifyContent="center">
			{columns.map((column) => {
				const active = activeColumns.includes(column);

				return (
					<Checkbox
						size="sm"
						key={column}
						mr={2}
						defaultChecked={active}
						onChange={() => toggleColumn(column)}
					>
						{getColumnReadable(column)}
					</Checkbox>
				);
			})}
		</Flex>
	);
}
