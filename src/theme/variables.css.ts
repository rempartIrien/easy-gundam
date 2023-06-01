import { createThemeContract } from "@vanilla-extract/css";

const vars = createThemeContract({
	color: {
		background: { main: null, emphasis: null, button: null },
		text: { main: null, disabled: null },
		primary: { main: null, text: null, background: null },
		secondary: { main: null, text: null, background: null },
		info: { main: null, text: null, background: null },
		success: { main: null, text: null, background: null },
		warning: { main: null, text: null, background: null },
		error: { main: null, text: null, background: null },
		toaster: { error: null, info: null, success: null, warning: null },
	},
	font: {
		title: { family: null, size: null, lineHeight: null },
		subtitle: { family: null, size: null, lineHeight: null },
		bigText: { family: null, size: null, lineHeight: null },
		normalText: { family: null, size: null, lineHeight: null },
		smallText: { family: null, size: null, lineHeight: null },
	},
	space: {
		fixed: null,
		relative: null,
		sectionBottom: null,
		midSectionBottom: null,
	},
	borderRadius: {
		base: null,
		round: null,
	},
	boxShadow: {
		base: null,
		header: null,
	},
	border: {
		base: null,
	},
});

export default vars;
