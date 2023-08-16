import { DialectLabel } from "@prisma/client";

export default function getDialectLabel(
	dialectLabel: string,
): DialectLabel | undefined {
	switch (dialectLabel) {
		case "ONE":
			return DialectLabel.ONE;
		case "One":
			return DialectLabel.ONE;
		case "TWO":
			return DialectLabel.TWO;
		case "Two":
			return DialectLabel.TWO;
		case "THREE":
			return DialectLabel.THREE;
		case "Three":
			return DialectLabel.THREE;
		default:
			return undefined;
	}
}
