import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import { cleanup, render, screen } from "@solidjs/testing-library";
import { createSignal } from "solid-js";

import { LocaleContext } from "~/contexts/LocaleContext";
import { Language } from "~/i18n/i18n.config";

import useTranslation from "./useTranslation";

function LocaleConsumer(props: {
	count?: number | string;
	other?: number | string;
}) {
	const [t] = useTranslation();
	return <p>Translation is: '{t("key", props)}'</p>;
}

const testCases = [
	{
		locale: Language.English,
		count: undefined,
		other: undefined,
		expected: "key ",
	},
	{ locale: Language.English, count: 0, other: undefined, expected: "other " },
	{ locale: Language.English, count: 1, other: undefined, expected: "one " },
	{ locale: Language.English, count: 2, other: undefined, expected: "other " },
	{ locale: Language.English, count: 3, other: undefined, expected: "other " },
	{ locale: Language.English, count: 4, other: undefined, expected: "other " },
	{ locale: Language.English, count: 5, other: undefined, expected: "other " },
	{ locale: Language.English, count: 10, other: undefined, expected: "other " },
	{
		locale: Language.English,
		count: 100,
		other: undefined,
		expected: "other ",
	},
	{
		locale: Language.English,
		count: "100",
		other: undefined,
		expected: "other ",
	},
	{
		locale: Language.English,
		count: "bar",
		other: undefined,
		expected: "key ",
	},
	{
		locale: Language.English,
		count: undefined,
		other: "foo",
		expected: "key foo",
	},
	{ locale: Language.English, count: 0, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 1, other: "foo", expected: "one foo" },
	{ locale: Language.English, count: 2, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 3, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 4, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 5, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 10, other: "foo", expected: "other foo" },
	{ locale: Language.English, count: 100, other: "foo", expected: "other foo" },
	{
		locale: Language.English,
		count: "100",
		other: "foo",
		expected: "other foo",
	},
	{ locale: Language.English, count: "bar", other: "foo", expected: "key foo" },
	{
		locale: Language.French,
		count: undefined,
		other: undefined,
		expected: "clé ",
	},
	{ locale: Language.French, count: 0, other: undefined, expected: "un " },
	{ locale: Language.French, count: 1, other: undefined, expected: "un " },
	{ locale: Language.French, count: 2, other: undefined, expected: "autre " },
	{ locale: Language.French, count: 3, other: undefined, expected: "autre " },
	{ locale: Language.French, count: 4, other: undefined, expected: "autre " },
	{ locale: Language.French, count: 5, other: undefined, expected: "autre " },
	{ locale: Language.French, count: 10, other: undefined, expected: "autre " },
	{ locale: Language.French, count: 100, other: undefined, expected: "autre " },
	{
		locale: Language.French,
		count: "100",
		other: undefined,
		expected: "autre ",
	},
	{ locale: Language.French, count: "bar", other: undefined, expected: "clé " },
	{
		locale: Language.French,
		count: undefined,
		other: "foo",
		expected: "clé foo",
	},
	{ locale: Language.French, count: 0, other: "foo", expected: "un foo" },
	{ locale: Language.French, count: 1, other: "foo", expected: "un foo" },
	{ locale: Language.French, count: 2, other: "foo", expected: "autre foo" },
	{ locale: Language.French, count: 3, other: "foo", expected: "autre foo" },
	{ locale: Language.French, count: 4, other: "foo", expected: "autre foo" },
	{ locale: Language.French, count: 5, other: "foo", expected: "autre foo" },
	{ locale: Language.French, count: 10, other: "foo", expected: "autre foo" },
	{ locale: Language.French, count: 100, other: "foo", expected: "autre foo" },
	{
		locale: Language.French,
		count: "100",
		other: "foo",
		expected: "autre foo",
	},
	{ locale: Language.French, count: "bar", other: "foo", expected: "clé foo" },
	{
		locale: undefined, // English by default
		count: 100,
		other: "foo",
		expected: "key foo",
	},
];

describe("useTranslation", () => {
	afterEach(() => {
		cleanup();
	});

	it("should exist", () => {
		expect(useTranslation).toBeDefined();
	});

	describe("when LocaleContext has a value", () => {
		it.each(testCases)(
			"should return $expected with locale '$locale' for count '$count' and with parameters other '$other'",
			({ locale, count, other, expected }) => {
				const [language, setLanguage] = createSignal<Language | undefined>(
					locale,
				);
				const context = createI18nContext(
					{
						/* eslint-disable @typescript-eslint/naming-convention */
						"en-US": {
							key: "key {{ other }}",
							key_zero: "zero {{ other }}",
							key_one: "one {{ other }}",
							key_two: "two {{ other }}",
							key_few: "few {{ other }}",
							key_many: "many {{ other }}",
							key_other: "other {{ other }}",
						},
						"fr-FR": {
							key: "clé {{ other }}",
							key_zero: "zéro {{ other }}",
							key_one: "un {{ other }}",
							key_two: "deux {{ other }}",
							key_few: "quelques {{ other }}",
							key_many: "beaucoup {{ other }}",
							key_other: "autre {{ other }}",
						},
						/* eslint-enable @typescript-eslint/naming-convention */
					},
					locale,
				);
				render(() => (
					<I18nContext.Provider value={context}>
						<LocaleContext.Provider value={[language, setLanguage]}>
							<LocaleConsumer count={count} other={other} />
						</LocaleContext.Provider>
					</I18nContext.Provider>
				));
				expect(screen.getByText(/^Translation is:/)).toHaveTextContent(
					`Translation is: '${expected}'`,
				);
			},
		);
	});
});
