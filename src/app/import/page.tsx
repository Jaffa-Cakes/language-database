'use client'

import CsvImport from '@/components/CsvImport';
import { Box, Button } from '@chakra-ui/react';
import runImport, { CsvData, CsvLexicon, CsvSource } from '@/actions/runImport';

import {useState} from 'react'

export default function Page() {
    const [sources, setSources] = useState<CsvSource[]>([])
    const [lexicon, setLexicon] = useState<CsvLexicon[]>([])
    const [data, setData] = useState<CsvData[]>([])

    async function onImport() {
        await runImport(sources, lexicon, data);
    }

    return (
        <Box pt={2.5} px={5}>
            <CsvImport name="Sources" setData={setSources}/>
            <CsvImport name="Lexicon" setData={setLexicon}/>
            <CsvImport name="Data" setData={setData}/>

            <Button onClick={onImport}>Import</Button>
        </Box>
    )
}