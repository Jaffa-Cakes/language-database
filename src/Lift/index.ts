import Word from "./Word";

export default class Lift {
	words: Word[];

	constructor(words: Word[]) {
		this.words = words;
	}

	toXml(): string {
		let result = "";

		result += '<?xml version="1.0"?>';
		result += '<lift version="0.13">';

		this.words.forEach((word) => {
			result += "<entry>";

			result += "<lexical-unit>";
			result += '<form lang="en">';
			result += "<text>" + word.lexemeForm + "</text>";
			result += "</form>";
			result += "</lexical-unit>";

            if (word.pronounciation !== undefined) {
                result += "<pronunciation>";
                result += '<form lang="en">';
                result += "<text>" + word.pronounciation + "</text>";
                result += "</form>";
                result += "</pronunciation>";
            }

            if (word.morphType !== undefined) {
                result += '<trait name="morph-type" value="' + word.morphType + '"/>';
            }

            if (word.dialectLabels !== undefined) {
                result += '<trait name="dialect-labels" value="' + word.dialectLabels + '"/>';
            }

			if (word.variants !== undefined) {
				word.variants.forEach((variant) => {
					result += "<variant>";
					result += '<form lang="en">';
					result += "<text>" + variant.variantForm + "</text>";
					result += "</form>";
					result += "</variant>";
				});
			}

			result += "</entry>";
		});

		result += "</lift>";

		return result;
	}
}
