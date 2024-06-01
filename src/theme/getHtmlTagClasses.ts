import clsx from "clsx";

import { htmlRootStyle } from "~/root.css";

import { darkTheme } from "./dark-theme.css";
import { defaultTheme } from "./default-theme.css";
import { lightTheme } from "./light-theme.css";
import { ThemeName } from "./ThemeName";

function getHtmlTagClasses(themeName?: ThemeName | null) {
	return clsx([
		htmlRootStyle,
		themeName === ThemeName.Dark && darkTheme,
		themeName === ThemeName.Light && lightTheme,
		!themeName && defaultTheme,
	]);
}

export default getHtmlTagClasses;
