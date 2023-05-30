"use client";

import { useState } from 'react';
import Menu from './../components/menu';
import SourceSelect from './../components/dropdown';
import SearchButton from './../components/searchbutton';
import Search from '../components/search'

export default function AdvancedSearch() {
  return (
    <div>
      <Menu />
      <div className="bg-zinc-900 min-h-screen px-24">
        <div className="bg-zinc-900 py-10 flex justify-center">
          <h1 className="text-red-700 font-bold text-3xl font-sans">
            ADVANCED SEARCH
          </h1>
        </div>
        <form method="GET">

          <div className="py-2 px-2 flex justify-evenly">
            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">ID:</label>
              <input type="text" name="id" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Source ID:</label>
              <input type="text" name="source_id" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Temp ID:</label>
              <input type="text" name="temp_id" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Entry ID:</label>
              <input type="text" name="entry_id" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Type:</label>
              <input type="text" name="type" className="w-64 p-1 ml-2 rounded" />
            </div>

          </div>

          <div className="py-2 px-2 flex justify-evenly">
            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Gloss Translation In Original:</label>
              <input type="text" name="gloss_translation_in_original" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Language From Original:</label>
              <input type="text" name="language_from_original" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Fuzzy Forms:</label>
              <input type="text" name="fuzzy_forms" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="flex place-items-center flex-col">
              <label className="text-lg font-medium mb-1">Sonetic Transliteration:</label>
              <input type="text" name="sonetic_transliteration" className="w-64 p-1 ml-2 rounded" />
            </div>

            <div className="w-64 ml-2"></div>
          </div>

          <div className="bg-zinc-900 py-8 pb-0 flex justify-center">
            <SearchButton />
          </div>
        </form>

        <hr className="my-4" />

        <Search />
      </div>

      <div className="bg-zinc-900 h-96 px-24 ml-48"></div>
      <footer className="bg-red-900 flex py-10 justify-center">
        <p className="font-bold font-sans text-md">
          Developed by Woi Wurrung Warriors
        </p>
      </footer>
    </div>
  );
}
