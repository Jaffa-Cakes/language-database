import { Inter } from 'next/font/google'

export default function Dashboard() {
    return (
        <div>
            <header className="bg-black shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                Home
                            </button>
                            <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                A-Z
                            </button>
                            <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                WW-E
                            </button>
                            <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                Settings
                            </button>
                        </div>
                        <div>
                            <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                                Account
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="bg-gray-300">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <input type="text" className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-10 pr-12 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Search for a word or term" />
                        <button className="absolute right-3 top-3 mt-2.5 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                            Search
                        </button>
                        <button className="absolute right-16 top-3 mt-2.5 mr-3 text-gray-500">
                            Filters
                        </button>
                        <button className="absolute left-3 top-3 mt-2.5 ml-3 text-gray-500">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
            <main className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">WOI WURRUNG DATABASE</h1>
            
                    <div className="flex flex-col mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recently Searched</h2>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 1
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 2
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 3
                        </button>
                    </div>
            
                    <div className="flex flex-col mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recently Edited</h2>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 1
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 2
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 3
                        </button>
                    </div>
            
                    <div className="flex flex-col mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Recently Imported</h2>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 1
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 2
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-2">
                            Item 3
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}