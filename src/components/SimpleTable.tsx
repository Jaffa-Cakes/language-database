'use client'

import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Text } from "@chakra-ui/react"
import { useState } from "react";

export interface Props {
    headings: string[];
    data: string[][];
}

export default function Component(props: Props) {
    let { headings, data } = props;
    let [toggled, setToggled] = useState<string[]>([]);

    const hideScrollbar = {
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    };

    async function toggle(id: string) {
        if (toggled.includes(id)) {
            setToggled(toggled.filter((item) => item !== id));
        } else {
            setToggled([...toggled, id]);
        }
    }

    let headingElements = headings.map((heading) => (
        <Th key={heading}>{heading}</Th>
    ));

    let dataElements = data.map((row) => {

        let color = toggled.includes(row[0]) ? 'green.800' : '';

        return (
            <Tr key={row[0]} onClick={(e) => toggle(row[0])} backgroundColor={color} cursor="pointer">
                {
                    row.map((cell) => (
                        <Td key={cell} maxW={40} overflowX="auto" css={hideScrollbar}>{cell}</Td>
                    ))
                }
            </Tr>
        );
    });

    return (
        <>
            <Text align="center" mt={5}>{data.length} Results</Text>
            <TableContainer mt={3} maxW="100vw">
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            {headingElements}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataElements}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            {headingElements}
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}