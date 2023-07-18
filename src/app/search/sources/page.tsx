'use client'

import { Button, HStack, Input, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react";

import searchSources, { Source } from '@/actions/searchSources';

export default function Page() {
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [fileName, setFileName] = useState<string>('');
    const [reference, setReference] = useState<string>('');
    const [publicationType, setPublicationType] = useState<string>('');
    const [documentType, setDocumentType] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [sourceLangName, setSourceLangName] = useState<string>('');
    const [langName, setLangName] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    const [results, setResults] = useState<Source[]>([]);

    async function doSearch() {
        const newResults = await searchSources({
            id,
            name,
            fileName,
            reference,
            publicationType,
            documentType,
            location,
            sourceLangName,
            langName,
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
                <Input w={40} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <Input w={40} placeholder="File Name" onChange={(e) => setFileName(e.target.value)}/>
                <Input w={40} placeholder="Reference" onChange={(e) => setReference(e.target.value)}/>
                <Input w={40} placeholder="Publication Type" onChange={(e) => setPublicationType(e.target.value)}/>
                <Input w={40} placeholder="Document Type" onChange={(e) => setDocumentType(e.target.value)}/>
                <Input w={40} placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
                <Input w={40} placeholder="Source Language Name" onChange={(e) => setSourceLangName(e.target.value)}/>
                <Input w={40} placeholder="Language Name" onChange={(e) => setLangName(e.target.value)}/>
                <Input w={80} placeholder="Notes" onChange={(e) => setNotes(e.target.value)}/>
            </HStack>

            <Button onClick={doSearch}>Search</Button>

            <TableContainer mt={10}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>File Name</Th>
                            <Th>Reference</Th>
                            <Th>Publication Type</Th>
                            <Th>Document Type</Th>
                            <Th>Location</Th>
                            <Th>Source Language Name</Th>
                            <Th>Language Name</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            results.map((result) => (
                                <Tr key={result.id}>
                                    <Td>{result.id}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.name}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.fileName}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.reference}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.publicationType}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.documentType}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.location}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.sourceLangName}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.langName}</Td>
                                    <Td maxW={40} overflowX="auto" css={hideScrollbar}>{result.notes}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>File Name</Th>
                            <Th>Reference</Th>
                            <Th>Publication Type</Th>
                            <Th>Document Type</Th>
                            <Th>Location</Th>
                            <Th>Source Language Name</Th>
                            <Th>Language Name</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    )
}