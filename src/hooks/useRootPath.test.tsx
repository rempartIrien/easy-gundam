import { createSignal } from "solid-js";
import { cleanup, render, screen } from "solid-testing-library";

import { LocaleContext } from "~/contexts/LocaleContext";
import { Language } from "~/i18n/i18n.config";

import useRootPath from "./useRootPath";

function LocaleConsumer() {
	const rootPath = useRootPath();
	return <p>Root path is: {rootPath()}</p>;
}

describe("useRootPath", () => {
	afterEach(() => {
		cleanup();
	});

	it("should exist", () => {
		expect(useRootPath).toBeDefined();
	});

	describe("when LocaleContext has a value", () => {
		it("should return the root suffixed by the current locale", () => {
			const [language, setLanguage] = createSignal<Language | undefined>(
				Language.English,
			);
			render(() => (
				<LocaleContext.Provider value={[language, setLanguage]}>
					<LocaleConsumer />
				</LocaleContext.Provider>
			));
			expect(screen.getByText(/^Root path is:/)).toHaveTextContent(
				"Root path is: /en-US/",
			);
		});
	});

	describe("when LocaleContext does not have any value", () => {
		it("should return the root", () => {
			const [language, setLanguage] = createSignal<Language | undefined>();
			render(() => (
				<LocaleContext.Provider value={[language, setLanguage]}>
					<LocaleConsumer />
				</LocaleContext.Provider>
			));
			expect(screen.getByText(/^Root path is:/)).toHaveTextContent(
				"Root path is: /",
			);
		});
	});
});
