import clsx from "clsx";

import { ThemeName } from "./ThemeName";

function getHtmlTagClasses(themeName?: ThemeName | null) {
	return clsx([
		"h-[100vh] text-[100%]",
		// https://aykevl.nl/2014/09/fix-jumping-scrollbar
		"scroll-jump-fix",
		themeName === ThemeName.Dark && ThemeName.Dark,
		themeName === ThemeName.Light && ThemeName.Light,
	]);
}

export default getHtmlTagClasses;
