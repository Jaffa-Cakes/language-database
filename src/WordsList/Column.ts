enum Column {
	Id,
	English,
	Language,
	Sonetic,
	Notes,
	SourceId,
	SourceName,
	SourceFileName,
	SourceReference,
	SourcePublicationType,
	SourceDocumentType,
	SourceLocation,
	SourceLanguage,
	SourceLanguageName,
	SourceNotes,
}

export default Column;

export function getColumnReadable(column: Column): string {
	switch (column) {
		case Column.Id:
			return "Id";
		case Column.English:
			return "English";
		case Column.Language:
			return "Language";
		case Column.Sonetic:
			return "Sonetic";
		case Column.Notes:
			return "Notes";
		case Column.SourceId:
			return "Source Id";
		case Column.SourceName:
			return "Source Name";
		case Column.SourceFileName:
			return "Source File Name";
		case Column.SourceReference:
			return "Source Reference";
		case Column.SourcePublicationType:
			return "Source Publication Type";
		case Column.SourceDocumentType:
			return "Source Document Type";
		case Column.SourceLocation:
			return "Source Location";
		case Column.SourceLanguage:
			return "Source Language";
		case Column.SourceLanguageName:
			return "Source Language Name";
		case Column.SourceNotes:
			return "Source Notes";
	}
}

export function getColumnEnum(column: string): Column {
	switch (column) {
		case "Id":
			return Column.Id;
		case "English":
			return Column.English;
		case "Language":
			return Column.Language;
		case "Sonetic":
			return Column.Sonetic;
		case "Notes":
			return Column.Notes;
		case "Source Id":
			return Column.SourceId;
		case "Source Name":
			return Column.SourceName;
		case "Source File Name":
			return Column.SourceFileName;
		case "Source Reference":
			return Column.SourceReference;
		case "Source Publication Type":
			return Column.SourcePublicationType;
		case "Source Document Type":
			return Column.SourceDocumentType;
		case "Source Location":
			return Column.SourceLocation;
		case "Source Language":
			return Column.SourceLanguage;
		case "Source Language Name":
			return Column.SourceLanguageName;
		case "Source Notes":
			return Column.SourceNotes;
		default:
			throw new Error(`Unknown column: ${column}`);
	}
}