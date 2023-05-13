import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';
import Alphabet from './alphabet';
import SearchButton from './searchbutton';

// This is the Menu component

export default function Menu() {
    return (
        <div>
            <header className="bg-red-800">
                <div className="flex items-center justify-center">
                    <button className="hover:bg-red-900 text-white font-bold font-sans align-middle px-4 py-6 text-lg">Home</button>
                    <button className="hover:bg-red-900 text-white font-bold font-sans align-middle px-4 py-6 text-lg">Advanced Search</button>
                    <form method="GET" action="/api/search"></form>
                    <label>
                        <FontAwesomeIcon icon={fa.faMagnifyingGlass} size="xl" className="inline-flex w-8 mr-2" />
                        <input type="search" id="normal-search" name="normal-search" placeholder="Search for a word/term.." className="w-96 h-12 px-2 rounded-xl" />
                    </label>
                    <div className="p-2">
                    <SearchButton  />
                    </div>
                    <div className="flex flex-col text-sm font-bold font-sans ml-1">
                        <label><input type="radio" id="etoww" name="radio" defaultChecked /> E - WW</label>
                        <label><input type="radio" id="wwtoe" name="radio" /> WW - E</label>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Alphabet content="A" />
                    <Alphabet content="B" />
                    <Alphabet content="C" />
                    <Alphabet content="D" />
                    <Alphabet content="E" />
                    <Alphabet content="F" />
                    <Alphabet content="G" />
                    <Alphabet content="H" />
                    <Alphabet content="I" />
                    <Alphabet content="J" />
                    <Alphabet content="K" />
                    <Alphabet content="L" />
                    <Alphabet content="M" />
                    <Alphabet content="N" />
                    <Alphabet content="O" />
                    <Alphabet content="P" />
                    <Alphabet content="Q" />
                    <Alphabet content="R" />
                    <Alphabet content="S" />
                    <Alphabet content="T" />
                    <Alphabet content="U" />
                    <Alphabet content="V" />
                    <Alphabet content="W" />
                    <Alphabet content="X" />
                    <Alphabet content="Y" />
                    <Alphabet content="Z" />
                </div>
            </header>
        </div>
    )
}
