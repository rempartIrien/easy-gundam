const emojiFontStack =
	"'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

// See https://github.com/system-fonts/modern-font-stacks#system-ui
const sansSerifFontStack =
	`system-ui, 'San Francisco', 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', ${emojiFontStack}` as const;

// See https://github.com/system-fonts/modern-font-stacks#didone
const serifFontStack =
	`Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif, ${emojiFontStack}` as const;

// See https://github.com/system-fonts/modern-font-stacks#monospace-code
const monoFontStack =
	`ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace, ${emojiFontStack}` as const;

type FontFamily =
	| typeof sansSerifFontStack
	| typeof serifFontStack
	| typeof monoFontStack;

type FontVariables = Record<
	"title" | "subtitle" | "bigText" | "normalText" | "smallText",
	{
		family: FontFamily;
		size: `${number}rem`;
		lineHeight: `${number}`;
	}
>;

export const smallScreenFonts: FontVariables = {
	title: {
		family: sansSerifFontStack,
		size: "3rem",
		lineHeight: "1.2",
	},
	subtitle: {
		family: sansSerifFontStack,
		size: "1.8rem",
		lineHeight: "1.35",
	},
	bigText: {
		family: sansSerifFontStack,
		size: "1.25rem",
		lineHeight: "1.7",
	},
	normalText: {
		family: sansSerifFontStack,
		size: "1.125rem",
		lineHeight: "1.7",
	},
	smallText: {
		family: sansSerifFontStack,
		size: "0.9rem",
		lineHeight: "1.7",
	},
};

export const regularScreenFonts: FontVariables = {
	title: {
		family: sansSerifFontStack,
		size: "4rem",
		lineHeight: "1.2",
	},
	subtitle: {
		family: sansSerifFontStack,
		size: "2rem",
		lineHeight: "1.35",
	},
	bigText: {
		family: sansSerifFontStack,
		size: "1.25rem",
		lineHeight: "1.6",
	},
	normalText: {
		family: sansSerifFontStack,
		size: "1rem",
		lineHeight: "1.6",
	},
	smallText: {
		family: sansSerifFontStack,
		size: "0.75rem",
		lineHeight: "1.6",
	},
};
