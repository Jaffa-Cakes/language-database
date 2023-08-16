export default function dialectLabelPretty(dialectLabel: string): string {
	switch (dialectLabel) {
		case "ONE":
			return "One";
		case "TWO":
			return "Two";
		case "THREE":
			return "Three";
		default:
			return "Unknown";
	}
}
