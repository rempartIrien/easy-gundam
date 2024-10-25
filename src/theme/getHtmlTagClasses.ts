import clsx from "clsx";

import { ThemeName } from "./ThemeName";

function getHtmlTagClasses(themeName?: ThemeName | null) {
	return clsx([
		"text-100% h-[100vh]",
		// https://aykevl.nl/2014/09/fix-jumping-scrollbar
		"min-[960px]:mr-0 min-[960px]:ml-[calc(100w-100%)]",
		themeName === ThemeName.Dark && ThemeName.Dark,
		themeName === ThemeName.Light && ThemeName.Light,
	]);
}

export default getHtmlTagClasses;
