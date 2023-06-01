import { Show } from "solid-js";
import { useRouteData } from "solid-start";
import {
	createServerAction$,
	createServerData$,
	redirect,
} from "solid-start/server";

import Breadcrumb from "~/components/Breadcrumb";
import Button from "~/components/Button";
import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import List from "~/components/List";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";
import { getLocaleToken, localeCookie } from "~/i18n/i18n.cookie";
import { colorSchemeCookie, getColorSchemeToken } from "~/theme/theme.cookie";

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
	const cookies = createServerData$(
		async (_, { request }) =>
			Promise.all([getLocaleToken(request), getColorSchemeToken(request)]).then(
				([locale, theme]) => ({ locale: !!locale, theme: !!theme }),
			),
		{ key: () => ["cookies"] },
	);
	return cookies;
}

export default function Cookies() {
	const [, { Form: CookieForm }] = createServerAction$(
		async (form: FormData, { request }) => {
			const deleteCookie = form.get(buttonName) as DeleteCookie;
			const redirectTo: string = request.headers.get("Referer") ?? "/";

			const setCookies = async () => {
				switch (deleteCookie) {
					case languageCookie:
						return await localeCookie.serialize("", { maxAge: 0 });
					case themeCookie:
						return await colorSchemeCookie.serialize("", { maxAge: 0 });
					default:
						return `${await localeCookie.serialize("", {
							maxAge: 0,
						})}, ${await colorSchemeCookie.serialize("", { maxAge: 0 })}`;
				}
			};

			return redirect(redirectTo, {
				headers: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					"Set-Cookie": await setCookies(),
				},
			});
		},
	);

	const [t] = useTranslation();
	const cookies = useRouteData<typeof routeData>();
	return (
		<>
			<DocumentTitle content={t("cookies.documentTitle")} />
			<CookieForm>
				<Breadcrumb items={[{ text: t("navigation.cookies") }]} />
				<Heading variant="title">{t("cookies.title")}</Heading>
				<Show when={cookies()}>
					<Section>
						<Paragraph>
							{t("cookies.list.text", { appName: t("appName") })}
						</Paragraph>
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
			</CookieForm>
		</>
	);
}
