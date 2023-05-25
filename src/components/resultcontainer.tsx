"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";



export default function ResultContainer() {
  return (
    <div className="flex">
      <div className="w-full bg-zinc-800">
        <div className="grid grid-cols-6 gap-1 mt-8 mx-4">
          <div className="font-bold">#</div>
          <div className="font-bold">Source ID</div>
          <div className="font-bold">LF: Translation</div>
          <div className="font-bold">LF: Original</div>
          <div className="font-bold">Fuzzy Forms</div>
          <div className="font-bold">Sonetic Transliteriation</div>
        </div>
      </div>
    </div>
  );
}