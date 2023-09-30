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

	let keyHelper = 0;

	return (
		<Flex justifyContent="center" wrap="wrap">
			{columns.map((column) => {
				keyHelper++;

				return (
					<StyledCheckbox
						key={keyHelper}
						column={column}
						activeColumns={activeColumns}
						toggleColumn={toggleColumn}
					/>
				);
			})}
		</Flex>
	);
}

interface IStyledCheckboxProps {
	column: Column;
	activeColumns: Column[];
	toggleColumn: (column: Column) => void;
}

function StyledCheckbox(props: IStyledCheckboxProps) {
	const { column, activeColumns, toggleColumn } = props;

	const active = activeColumns.includes(column);
	const [isChecked, setIsChecked] = useState<boolean>(active);

	return (
		<Box
			backgroundColor={active ? "panel.300" : "panel.100"}
			px="1.5"
			py="0.5"
			mx="1.5"
			my="1"
			rounded="lg"
			border="1px"
			borderColor="panel.100"
		>
			<Checkbox
				size="sm"
				key={column}
				defaultChecked={active}
				onChange={() => {
					toggleColumn(column);
					setIsChecked(!isChecked);
				}}
			>
				{getColumnReadable(column)}
			</Checkbox>
		</Box>
	);
}
