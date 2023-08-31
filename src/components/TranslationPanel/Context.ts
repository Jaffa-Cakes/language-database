import { createContext } from "react";

export interface TranslationPanel {
    editId?: number;
}

interface TranslationPanelContext {
	translationPanel: TranslationPanel;
	setTranslationPanel: (translationPanel: TranslationPanel) => void;
}

const Context = createContext<TranslationPanelContext>({
	translationPanel: {},
	setTranslationPanel: () => {},
});

export default Context;
