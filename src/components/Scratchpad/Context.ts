import { createContext } from "react";

export interface Scratchpad {
    data: string[][];
}

interface ScratchpadContext {
    scratchpad: Scratchpad;
    setScratchpad: (scratchpad: Scratchpad) => void;
}

const Context = createContext<ScratchpadContext>({
    scratchpad: {
        data: []
    },
    setScratchpad: () => {}
});

export default Context;