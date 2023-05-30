import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
  id?: string
  source_id?: string
  temp_id?: string
  entry_id?: string
  gloss_translation_in_original?: string
  language_from_original?: string
  fuzzy_forms?: string
  sonetic_transliteration?: string
  type?: string
}

export default function Search() {

  const router = useRouter()
  let params: Props = {}
  let query = router.query;
  if (Object.keys(query).length != 0) {
    if (query.id != '') params.id = query.id as string;
    if (query.source_id != '') params.source_id = query.source_id as string;
    if (query.temp_id != '') params.temp_id = query.temp_id as string;
    if (query.entry_id != '') params.entry_id = query.entry_id as string;
    if (query.gloss_translation_in_original != '') params.gloss_translation_in_original = query.gloss_translation_in_original as string;
    if (query.language_from_original != '') params.language_from_original = query.language_from_original as string;
    if (query.fuzzy_forms != '') params.fuzzy_forms = query.fuzzy_forms as string;
    if (query.sonetic_transliteration != '') params.sonetic_transliteration = query.sonetic_transliteration as string;
    if (query.type != '') params.type = query.type as string;
  }

  const [inputValue, setInputValue] = useState<string>('');
  const [results, setResults] = useState<string[]>([]); // replace any with the actual data type you're expecting

  const apiUrl = 'http://localhost:3000/api/advanced-search';

  useEffect(() => {
    async function useMe() {
      console.log(router.query)
      if (Object.keys(query).length === 0) return;
      try {
        const response = await axios.get(`${apiUrl}`, {
          params: params
        });
        setResults(prevResults => response.data);
        console.log(results)
      } catch (error) {
        console.error(error);
      }
    }
    useMe();
  }, [router.query]);

  return ( 
    <table className="w-full border">
      <thead className="border-b">
        <tr>
          <th className="px-4 py-1 bg-slate-800">X</th>
          <th className="px-4 py-1">ID</th>
          <th className="px-4 py-1 bg-slate-800">Source ID</th>
          <th className="px-4 py-1">Temp ID</th>
          <th className="px-4 py-1 bg-slate-800">English</th>
          <th className="px-4 py-1">Woi Wurrung</th>
        </tr>
      </thead>
      {results.map((result) =>
        <tr>
          <td className="px-4 py-1 bg-slate-800"><input type='checkbox' /></td>
          <td className='px-4 py-1'>{result.id}</td>
          <td className='px-4 py-1 bg-slate-800'>{result.source_id}</td>
          <td className='px-4 py-1'>{result.temp_id}</td>
          <td className='px-4 py-1 bg-slate-800'>{result.gloss_translation_in_original}</td>
          <td className='px-4 py-1'>{result.language_from_original}</td>
        </tr>
        )}
    </table>
  );
}
