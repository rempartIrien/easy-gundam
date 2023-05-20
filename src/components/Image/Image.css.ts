import { style } from "@vanilla-extract/css";

// See https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-dark-mode-images
export const darkModeStyle = style({
	filter: "brightness(.9) contrast(1.1)",
});

export const hiddenFallbackStyle = style({
	visibility: "hidden",
});
