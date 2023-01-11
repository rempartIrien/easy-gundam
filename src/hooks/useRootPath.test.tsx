import { cleanup, render, screen } from "solid-testing-library";

import useRootPath from "./useRootPath";

import { LocaleContext } from "~/contexts/LocaleContext";
import { Language } from "~/i18n/i18n.config";

function LocaleConsumer() {
	const rootPath = useRootPath();
	return <p>Root path is: {rootPath}</p>;
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
			render(() => (
				<LocaleContext.Provider value={Language.English}>
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
			render(() => (
				<LocaleContext.Provider value={undefined}>
					<LocaleConsumer />
				</LocaleContext.Provider>
			));
			expect(screen.getByText(/^Root path is:/)).toHaveTextContent(
				"Root path is: /",
			);
		});
	});
});
