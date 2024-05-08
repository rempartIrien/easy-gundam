import type { RouteDefinition } from "@solidjs/router";
import { action, createAsync, redirect } from "@solidjs/router";
import { Show } from "solid-js";
import { getRequestEvent } from "solid-js/web";

import Breadcrumb from "~/components/Breadcrumb";
import Button from "~/components/Button";
import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import List from "~/components/List";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import useAppName from "~/hooks/useAppName";
import useTranslation from "~/hooks/useTranslation";
import { deleteLocale, getLocaleToken } from "~/i18n/i18n.cookie";
import { deleteColorScheme, getColorSchemeToken } from "~/theme/theme.cookie";

import { buttonStyles } from "./cookies.css";

const buttonName = "deleteCookie";
const allCookie = "all" as const;
const languageCookie = "language" as const;
const themeCookie = "theme" as const;
type DeleteCookie =
	| typeof allCookie
	| typeof languageCookie
	| typeof themeCookie;

export function routeData() {
	"use server";
	const event = getRequestEvent();
	if (!event) {
		return { locale: false, theme: false };
	}
	const { nativeEvent } = event;
	return {
		locale: !!getLocaleToken(nativeEvent),
		theme: !!getColorSchemeToken(nativeEvent),
	};
}

function loadFunction() {
	return Promise.resolve(routeData());
}

export const route = {
	load: () => loadFunction(),
} satisfies RouteDefinition;

const updateCookies = action(async (form: FormData) => {
	"use server";

	const event = await Promise.resolve(getRequestEvent());
	if (!event) {
		return new Error("No event"); // TODO: oops do something
	}
	const { request, nativeEvent } = event;

	const deleteCookie = form.get(buttonName) as DeleteCookie;
	const redirectTo: string = request.headers.get("Referer") ?? "/";

	switch (deleteCookie) {
		case languageCookie:
			deleteLocale(nativeEvent);
			break;
		case themeCookie:
			deleteColorScheme(nativeEvent);
			break;
		default:
			deleteColorScheme(nativeEvent);
			deleteLocale(nativeEvent);
	}

	throw redirect(redirectTo);
});

export default function Cookies() {
	const t = useTranslation();
	const appName = useAppName();
	const cookies = createAsync(() => loadFunction());
	return (
		<>
			<DocumentTitle content={t("cookies.documentTitle")} />
			<form action={updateCookies} method="post">
				<Breadcrumb items={[{ text: t("navigation.cookies") }]} />
				<Heading variant="title">{t("cookies.title")}</Heading>
				<Show when={cookies()}>
					<Section>
						<Paragraph>{t("cookies.list.text", { appName })}</Paragraph>
						<List>
							<li>{t("cookies.list.language")}</li>
							<li>{t("cookies.list.theme")}</li>
						</List>
						<Paragraph>{t("cookies.text")}</Paragraph>
						<Button
							class={buttonStyles}
							type="submit"
							name={buttonName}
							value={allCookie}
						>
							{t("cookies.actions.deleteAll")}
						</Button>
					</Section>
					<Section>
						<Heading variant="subtitle">{t("cookies.language.title")}</Heading>
						<Paragraph>{t("cookies.language.text")}</Paragraph>
						<Show
							when={cookies()?.locale}
							fallback={<Paragraph>{t("cookies.noCookie")}</Paragraph>}
						>
							<Button
								class={buttonStyles}
								type="submit"
								name={buttonName}
								value={languageCookie}
							>
								{t("cookies.actions.deleteLanguage")}
							</Button>
						</Show>
					</Section>
					<Section>
						<Heading variant="subtitle">{t("cookies.theme.title")}</Heading>
						<Paragraph>{t("cookies.theme.text")}</Paragraph>
						<Show
							when={cookies()?.theme}
							fallback={<Paragraph>{t("cookies.noCookie")}</Paragraph>}
						>
							<Button
								class={buttonStyles}
								type="submit"
								name={buttonName}
								value={themeCookie}
							>
								{t("cookies.actions.deleteTheme")}
							</Button>
						</Show>
					</Section>
				</Show>
			</form>
		</>
	);
}
