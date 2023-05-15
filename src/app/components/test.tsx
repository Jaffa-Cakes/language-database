"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faShare } from '@fortawesome/free-solid-svg-icons';

// Test page 

export default function ResultContainer() {
    const [extraOptions, setExtraOptions] = useState({
        fuzzyForms: false,
        somaticTransliteration: false,
        shortId: false,
        publicationStatus: false,
        documentType: false,
        collector: false,
        languageName: false
    });

    const handleExtraOptionChange = (option) => {
        setExtraOptions((prevOptions) => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));
    };

    const renderExtraOptions = () => {
        return (
            <div className="grid grid-cols-8 gap-1 mt-8 mx-4">
                {Object.entries(extraOptions).map(([option, isChecked]) => (
                    isChecked && (
                        <div key={option} className="font-bold">
                            {option}
                        </div>
                    )
                ))}
            </div>
        );
    };

    return (
        <div className="flex">
            <div className="w-3/4 bg-zinc-800">
                <div className="grid grid-cols-8 gap-1 mt-8 mx-4">
                    <div className="font-bold">Source Name</div>
                    <div className="font-bold">Original</div>
                    <div className="font-bold">Translation</div>
                    <div className="font-bold">Date</div>
                    <div className="font-bold">Location</div>
                    {renderExtraOptions()}
                </div>
            </div>
            <div className="w-1/4 bg-zinc-900">
                <div className="bg-zinc-900 h-screen px-8">
                    <div className="bg-zinc-900 py-10 flex justify-center">
                        <h1 className="text-red-700 font-bold text-3xl font-sans">EXTRA OPTIONS</h1>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="fuzzyFormsCheckbox"
                                checked={extraOptions.fuzzyForms}
                                onChange={() => handleExtraOptionChange('fuzzyForms')}
                            />
                            <label htmlFor="fuzzyFormsCheckbox" className="ml-2 text-white">
                                Fuzzy Forms
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="somaticTransliterationCheckbox"
                                checked={extraOptions.somaticTransliteration}
                                onChange={() => handleExtraOptionChange('somaticTransliteration')}
                            />
                            <label htmlFor="somaticTransliterationCheckbox" className="ml-2 text-white">
                                Somatic Transliteration
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="shortIdCheckbox"
                                checked={extraOptions.shortId}
                                onChange={() => handleExtraOptionChange('shortId')}
                            />
                            <label htmlFor="shortIdCheckbox" className="ml-2 text-white">
                                Short ID
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="publicationStatusCheckbox"
                                checked={extraOptions.publicationStatus}
                                onChange={() => handleExtraOptionChange('publicationStatus')}
                            />
                            <label htmlFor="publicationStatusCheckbox" className="ml-2 text-white">
                                Publication Status
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="documentTypeCheckbox"
                                checked={extraOptions.documentType}
                                onChange={() => handleExtraOptionChange('documentType')}
                            />
                            <label htmlFor="documentTypeCheckbox" className="ml-2 text-white">
                                Document Type
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="collectorCheckbox"
                                checked={extraOptions.collector}
                                onChange={() => handleExtraOptionChange('collector')}
                            />
                            <label htmlFor="collectorCheckbox" className="ml-2 text-white">
                                Collector
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="languageNameCheckbox"
                                checked={extraOptions.languageName}
                                onChange={() => handleExtraOptionChange('languageName')}
                            />
                            <label htmlFor="languageNameCheckbox" className="ml-2 text-white">
                                Language Name
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

<div><FontAwesomeIcon icon={fa.faPenToSquare} size="sm" className="inline-flex w-6 mr-2" /><FontAwesomeIcon icon={fa.faShare} size="sm" className="inline-flex w-6 mr-2" />