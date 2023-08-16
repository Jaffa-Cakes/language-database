"use client";

import { Checkbox, Flex } from "@chakra-ui/react";

interface IProps {
	columns: string[];
	activeColumns: string[];
	toggleColumn: (column: string) => void;
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
						{column}
					</Checkbox>
				);
			})}
		</Flex>
	);
}
