"use client";

import { useState } from "react";
import Menu from "./../components/menu";
import SourceSelect from "./../components/dropdown";
import SearchButton from "./../components/searchbutton";

export default function AdvancedSearch() {
  return (
    <div>
      <Menu />
      <div className="bg-zinc-900 h-screen px-96 ml-48">
        <div className="bg-zinc-900 py-10 flex justify-center">
          <h1 className="text-red-700 font-bold text-3xl font-sans">
            ADVANCED SEARCH
          </h1>
        </div>
        <form method="GET" action="/api/advancedsearch">
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Including these Words:
              </p>
              <input
                type="search"
                id="adv-search"
                name="adv-search"
                placeholder="Any word/term..."
                className="w-96 h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Woi Wurrung:
              </p>
              <input
                type="search"
                id="adv-search-2"
                name="adv-search-2"
                placeholder="Any word/term..."
                className="w-96 h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                Excluding these Words:
              </p>
              <input
                type="search"
                id="adv-search-3"
                name="adv-search-3"
                placeholder="Any word/term..."
                className="w-96 h-12 px-2"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <label className="px-2 inline-block">
              <p className="text-white font-bold text-sm font-sans inline-block mr-2">
                From this Year:
              </p>
              <input
                type="search"
                id="adv-search-4"
                name="adv-search-4"
                placeholder="Example: 1840"
                className="w-96 h-12 px-2 inline justify-end"
              />
            </label>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <p className="text-white font-bold text-sm font-sans mr-4 mt-4">
              From this Source:
            </p>
            <SourceSelect />
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <p className="text-white font-bold text-sm font-sans mr-4 mt-4">
              Regular Expressions:
            </p>
            <input
              type="checkbox"
              id="adv-search-6"
              name="adv-search-6"
              className="mt-4"
            ></input>
          </div>
          <div className="bg-zinc-900 py-8 pb-0 flex justify-start">
            <SearchButton />
          </div>
          <div className="bg-zinc-900 py-5 w-screen"></div>
          <div></div>
        </form>
      </div>
      <footer className="bg-red-900 flex py-10 justify-center">
        <p className="font-bold font-sans text-md">
          Developed by Woi Wurrung Warriors
        </p>
      </footer>
    </div>
  );
}
