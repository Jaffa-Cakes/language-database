import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		panel: {
			100: "#1C1C1C",
			200: "#242424",
			300: "#2C2C2C",
			600: "#A1A195",
		},
		heading: {
			50: "#BAA16E",
			100: "#EBCB8B",
			200: "#FFF2CF",
		},
		text: {
			100: "#FFFFF3",
		},
	},

	styles: {
		global: {
			body: {
				bg: "panel.200",
				color: "text.100",
			},
		},
	},
});

export default theme;
