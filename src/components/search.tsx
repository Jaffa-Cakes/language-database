import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [results, setResults] = useState<string[]>([]); // replace any with the actual data type you're expecting

  const apiUrl = 'http://localhost:3000/api/advanced-search?source_id=Thomas12';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleGet = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}`);
      setResults(prevResults => response.data);
      console.log(results)
    } catch (error) {
      console.error(error);
    }
  }

  return ( 
    <div>
      <form>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleGet}>Get</button>
      </form>
      <table>
        {results.map((result) =>
          <tr>
            <td><input type='checkbox' /></td>
            <td className='px-4 py-1'>{result.id}</td>
            <td className='px-4 py-1 bg-slate-800'>{result.source_id}</td>
            <td className='px-4 py-1'>{result.temp_id}</td>
            <td className='px-4 py-1 bg-slate-800'>{result.gloss_translation_in_original}</td>
            <td className='px-4 py-1'>{result.language_from_original}</td>
          </tr>
          )}
      </table>
    </div>
  );
}
