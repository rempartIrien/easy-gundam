import { ThemeName, getNewColorScheme } from "./ThemeName";

describe("getNewColorScheme", () => {
	it("should exist", () => {
		expect(getNewColorScheme).toBeDefined();
	});

	it("should return light if input is dark", () => {
		expect(getNewColorScheme(ThemeName.Dark, true)).toBe(ThemeName.Light);
		expect(getNewColorScheme(ThemeName.Dark, false)).toBe(ThemeName.Light);
	});

	it("should return dark if input is light", () => {
		expect(getNewColorScheme(ThemeName.Light, true)).toBe(ThemeName.Dark);
		expect(getNewColorScheme(ThemeName.Light, false)).toBe(ThemeName.Dark);
	});

	describe("when no theme is defined", () => {
		it("should return light if preferred color scheme is dark", () => {
			expect(getNewColorScheme(null, true)).toBe(ThemeName.Light);
			expect(getNewColorScheme(null, true)).toBe(ThemeName.Light);
		});

		it("should return dark if preferred color scheme is light", () => {
			expect(getNewColorScheme(null, false)).toBe(ThemeName.Dark);
			expect(getNewColorScheme(null, false)).toBe(ThemeName.Dark);
		});
	});
});
