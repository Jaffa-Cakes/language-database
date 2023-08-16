import grammaticalInfoPretty from "@/utils/grammaticalInfoPretty";
import Word from "./Word";
import { dialectLabelPretty, morphTypePretty } from "@/utils";

export default class Lift {
	words: Word[];

	constructor(words: Word[]) {
		this.words = words;
	}

	toXml(): string {
		let result = "";

		result += '<?xml version="1.0"?>';
		result += '<lift version="0.13">';

		let uid = 0;

		this.words.forEach((word) => {
			uid += 1;

			const wordId = uid;

			// Word Entry
			result += '<entry id="' + wordId + '" guid="' + wordId + '">';
			{
				result += "<lexical-unit>";
				{
					result += '<form lang="en">';
					{
						result += "<text>" + word.spelling + "</text>";
					}
					result += "</form>";
				}
				result += "</lexical-unit>";

				if (word.morphType !== undefined) {
					result +=
						'<trait name="morph-type" value="' +
						morphTypePretty(word.morphType) +
						'"/>';
				}

				word.dialectLabels.forEach((dialectLabel) => {
					result +=
						'<trait name="dialect-labels" value="' +
						dialectLabelPretty(dialectLabel) +
						'"/>';
				});

				if (word.pronunciation !== undefined) {
					result += "<pronunciation>";
					result += '<form lang="en">';
					result += "<text>" + word.pronunciation + "</text>";
					result += "</form>";
					result += "</pronunciation>";
				}

				// Senses
				{
					let senseIndex = 1;
					word.senses.forEach((sense) => {
						uid += 1;

						const senseId = uid;

						result +=
							'<sense id="' +
							senseId +
							'" order="' +
							senseIndex +
							'">';
						{
							result += '<gloss lang="en">';
							{
								result += "<text>" + sense.gloss + "</text>";
							}
							result += "</gloss>";
						}

						console.log(sense.reversalEntries);

						if (sense.reversalEntries !== undefined) {
							result += '<reversal type="en">';
							{
								result += '<form lang="en">';
								{
									result +=
										"<text>" +
										sense.reversalEntries +
										"</text>";
								}
								result += "</form>";
							}
							result += "</reversal>";
						}

						if (sense.definition !== undefined) {
							result += "<definition>";
							{
								result += '<form lang="en">';
								{
									result +=
										"<text>" + sense.definition + "</text>";
								}
								result += "</form>";
							}
							result += "</definition>";
						}

						if (sense.grammaticalInfo !== undefined) {
							result +=
								'<grammatical-info value="' +
								grammaticalInfoPretty(sense.grammaticalInfo) +
								'">';
							result += "</grammatical-info>";
						}

						result += "</sense>";

						senseIndex += 1;
					});
				}
			}
			result += "</entry>";

			// Reference Entries
			{
				let referenceIndex = 1;
				word.references.forEach((reference) => {
					uid += 1;

					const referenceId = uid;

					result +=
						'<entry id="' +
						referenceId +
						'" guid="' +
						referenceId +
						'">';
					{
						result += "<lexical-unit>";
						{
							result += '<form lang="en">';
							{
								result +=
									"<text>" + reference.spelling + "</text>";
							}
							result += "</form>";
						}
						result += "</lexical-unit>";

						result +=
							'<relation type="_component-lexeme" ref="' +
							wordId +
							'" order="' +
							referenceIndex +
							'">';
						{
							result +=
								'<trait name="variant-type" value="' +
								reference.source +
								":" +
								reference.entry +
								'"/>';
							result +=
								'<trait name="hide-minor-entry" value="1"/>';
						}
						result += "</relation>";
					}
					result += "</entry>";

					referenceIndex += 1;
				});
			}
		});

		result += "</lift>";

		return result;
	}
}
