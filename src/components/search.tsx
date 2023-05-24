import React, { useState, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const [results, setResults] = useState<string[]>([]); // replace any with the actual data type you're expecting

  const apiUrl = 'http://localhost:3000/api/advanced-search';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleGet = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${apiUrl}/${inputValue}`);
      setResults(prevResults => [...prevResults, response.data]);
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
      <ul>
        {results.map(result => <li>{result.id}</li>)}
      </ul>
    </div>
  );
}
