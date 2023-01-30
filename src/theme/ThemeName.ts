export enum ThemeName {
	Dark = "dark",
	Light = "light",
}

export function getNewColorScheme(
	currentTheme: ThemeName | null,
	prefersDarkMode: boolean,
) {
	if (currentTheme === ThemeName.Light) {
		return ThemeName.Dark;
	} else if (currentTheme === ThemeName.Dark) {
		return ThemeName.Light;
	} else if (prefersDarkMode) {
		return ThemeName.Light;
	} else {
		return ThemeName.Dark;
	}
}
