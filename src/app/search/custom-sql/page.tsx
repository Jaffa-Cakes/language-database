'use client'

import { Button, HStack, Input, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

import searchCustomSql from '@/actions/searchCustomSql';

export default function Page() {
    const [sql, setSql] = useState<string>('');

    const [results, setResults] = useState<unknown[]>([]);

    async function doSearch() {
        const newResults = await searchCustomSql(sql);

        setResults(newResults);
    }

    const hideScrollbar = {
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    };

    return (
        <>
            <Input w="100%" placeholder="SQL" onChange={(e) => setSql(e.target.value)}/>

            <Button onClick={doSearch}>Search</Button>

            <TableContainer mt={10}>
                <Table size='sm'>
                    <Thead>
                        {
                            results.map((result, index) => {

                                if (index !== 0) {
                                    return;
                                }

                                const tableHeadings = [];

                                Object.keys(result as Object).forEach((key) => {
                                    tableHeadings.push(
                                        (
                                            <Th>{key}</Th>
                                        )
                                    );
                                });

                                return (
                                    <Tr>
                                        {tableHeadings}
                                    </Tr>
                                )
                            })
                        }
                    </Thead>
                    <Tbody>
                        {
                            results.map((result) => {

                                const tableDatas = [];

                                Object.keys(result as Object).forEach((key) => {
                                    tableDatas.push(
                                        (
                                            <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result[key]}</Td>
                                        )
                                    );
                                });

                                return (
                                    <Tr>
                                        {tableDatas}
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                    <Tfoot>
                        {
                            results.map((result, index) => {

                                if (index !== 0) {
                                    return;
                                }

                                const tableHeadings = [];

                                Object.keys(result as Object).forEach((key) => {
                                    tableHeadings.push(
                                        (
                                            <Th>{key}</Th>
                                        )
                                    );
                                });

                                return (
                                    <Tr>
                                        {tableHeadings}
                                    </Tr>
                                )
                            })
                        }
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}