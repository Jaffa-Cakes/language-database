"use client";

import { useState } from 'react';
import Menu from './../components/menu';
import SourceSelect from './../components/dropdown';
import SearchButton from './../components/searchbutton';

export default function AdvancedSearch() {
  return (
    <div>
      <Menu />
      <div className="bg-zinc-900 h-screen px-24">
        <div className="bg-zinc-900 py-10 flex justify-center">
          <h1 className="text-red-700 font-bold text-3xl font-sans">
            ADVANCED SEARCH
          </h1>
        </div>
        <form method="GET" action="/api/advancedsearch">
        <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Source ID:
              </p>
              <input
                type="search"
                id="adv-search-3"
                name="adv-search-3"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 w-auto flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Language Form - English:
              </p>
              <input
                type="search"
                id="adv-search"
                name="adv-search"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Language Form - Woi Wurrung:
              </p>
              <input
                type="search"
                id="adv-search-2"
                name="adv-search-2"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Language Form - Fuzzy Forms:
              </p>
              <input
                type="search"
                id="adv-search-2"
                name="adv-search-2"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Excluding these English words:
              </p>
              <input
                type="search"
                id="adv-search-3"
                name="adv-search-3"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Sonetic Transliterian:
              </p>
              <input
                type="search"
                id="adv-search-3"
                name="adv-search-3"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 w-full inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Entry Type:
              </p>
              <input
                type="search"
                id="adv-search-3"
                name="adv-search-3"
                placeholder="Any word/term..."
                className="w-full h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-center">
            <SearchButton />
          </div>
          <div className="bg-zinc-900 py-5 w-screen"></div>
          <div></div>
        </form>
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
