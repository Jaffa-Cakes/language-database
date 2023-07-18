'use client'

import { Button, HStack, Input, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

import searchWords, { Data } from '@/actions/searchWords';

export default function Page() {
    const [id, setId] = useState<string>('');
    const [sourceId, setSourceId] = useState<string>('');
    const [english, setEnglish] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [sonetic, setSonetic] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    const [results, setResults] = useState<Data[]>([]);

    async function doSearch() {
        const newResults = await searchWords({
            id,
            sourceId,
            english,
            language,
            sonetic,
            notes
        });

        setResults(newResults);
    }

    const hideScrollbar = {
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    };

    return (
        <>
            <HStack wrap="wrap" spacing={4} p={4}>
                <Input w={20} placeholder="ID" onChange={(e) => setId(e.target.value)}/>
                <Input w={20} placeholder="Source ID" onChange={(e) => setSourceId(e.target.value)}/>
                <Input w={40} placeholder="English" onChange={(e) => setEnglish(e.target.value)}/>
                <Input w={40} placeholder="Language" onChange={(e) => setLanguage(e.target.value)}/>
                <Input w={40} placeholder="Sonetic" onChange={(e) => setSonetic(e.target.value)}/>
                <Input w={80} placeholder="Notes" onChange={(e) => setNotes(e.target.value)}/>
            </HStack>

            <Button onClick={doSearch}>Search</Button>

            <TableContainer mt={10}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Source ID</Th>
                            <Th>English</Th>
                            <Th>Language</Th>
                            <Th>Sonetic</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            results.map((result) => (
                                <Tr key={result.id}>
                                    <Td>{result.id}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.sourceId}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.english}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.language}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.sonetic}</Td>
                                    <Td maxW={80} overflowX="auto" css={hideScrollbar}>{result.notes}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                        <Th>ID</Th>
                            <Th>Source ID</Th>
                            <Th>English</Th>
                            <Th>Language</Th>
                            <Th>Sonetic</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}