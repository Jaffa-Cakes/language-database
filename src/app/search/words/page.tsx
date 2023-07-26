'use client'

import { Button, HStack, Input } from "@chakra-ui/react"
import { useState } from "react";

import searchWords, { Data } from '@/actions/searchWords';

import SimpleTable from '@/components/SimpleTable';

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

    let data: string[][] = results.map((result) => {

        let id = result.id.toString();

        let sourceId = '';
        if (result.sourceId !== null) sourceId = result.sourceId.toString();

        let english = '';
        if (result.english !== null) english = result.english;

        let language = '';
        if (result.language !== null) language = result.language;

        let sonetic = '';
        if (result.sonetic !== null) sonetic = result.sonetic;

        let notes = '';
        if (result.notes !== null) notes = result.notes;
        
        return [
            id,
            sourceId,
            english,
            language,
            sonetic,
            notes
        ];
    });

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

            <SimpleTable headings={['ID', 'Source ID', 'English', 'Language', 'Sonetic', 'Notes']} data={data} />
        </>
    )
}