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
