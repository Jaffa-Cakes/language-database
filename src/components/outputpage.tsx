"use client";

import { useState } from 'react';
import Menu from './menu';
import ResultContainer from './resultcontainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/free-solid-svg-icons';



export default function OutputPage() {
    return (
      <div className="bg-zinc-900 h-screen">
        <Menu />
        <div className="flex justify-center py-4">
        <h1 className="text-red-700 font-bold text-3xl font-sans">SEARCH RESULTS</h1>
        </div>
        <ResultContainer />
      </div>
    )
  }