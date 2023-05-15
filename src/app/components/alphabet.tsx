import { Inter } from 'next/font/google'
import React from 'react';

// This is the Alphabet menu component 

const Alphabet = React.memo((props: { content: string; }) => {
    const { content } = props;
    return (
        <button className="hover:bg-red-900 text-white font-bold font-sans align-middle px-2 py-1 text-xs">{content}</button>
    )
})

export default Alphabet;