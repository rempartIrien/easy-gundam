const emojiFontStack =
	"'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

// See https://github.com/system-fonts/modern-font-stacks#geometric-humanist
export const sansSerifFontStack =
	`system-ui, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif, ${emojiFontStack}` as const;

// See https://github.com/system-fonts/modern-font-stacks#didone
export const serifFontStack =
	`Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif, ${emojiFontStack}` as const;

// See https://github.com/system-fonts/modern-font-stacks#monospace-code
export const monoFontStack =
	`ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace, ${emojiFontStack}` as const;

type FontFamily =
	| typeof sansSerifFontStack
	| typeof serifFontStack
	| typeof monoFontStack;

interface FontVariables {
	family: FontFamily;
	size: `${number}rem`;
	lineHeight: `${number}`;
}

export const fonts: Record<
	"title" | "subtitle" | "bigText" | "normalText" | "smallText",
	FontVariables
> = {
	title: {
		family: sansSerifFontStack,
		size: "4rem",
		lineHeight: "1.3",
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
