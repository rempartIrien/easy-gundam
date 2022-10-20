import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import type { PropsWithChildren, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";

import type { ThemeName } from "./cookies";
import { getColorScheme } from "./cookies";
import config from "./i18n/i18n.config";
import i18Next from "./i18n/i18n.server";

interface LoaderData {
  locale: string;
  themeName: ThemeName;
}

export const loader: LoaderFunction = async ({ request }) => {
  const themeName = await getColorScheme(request);
  const locale = await i18Next.getLocale(request);
  return json<LoaderData>({ locale, themeName });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Easy Gundam",
  viewport: "width=device-width,initial-scale=1",
});

export const headers: HeadersFunction = () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
});

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: config.defaultNS,
};

function Head(): ReactElement<"head"> {
  return (
    <head>
      <Meta />
      <Links />
    </head>
  );
}

function Body({
  themeName,
  children,
}: PropsWithChildren<{ themeName?: ThemeName }>): ReactElement<"body"> {
  return (
    <body className={themeName}>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  );
}

export default function Root(): ReactElement {
  // Get the locale from the loader
  const { locale, themeName } = useLoaderData<LoaderData>();

  const { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <Head />
      <Body themeName={themeName}>
        <Outlet />
      </Body>
    </html>
  );
}

export function CatchBoundary(): unknown {
  const caught = useCatch();
  const { t, i18n } = useTranslation();

  return (
    <html lang={i18n.language} dir={i18n.dir()}>
      <Head />
      <Body>
        <p>
          [CatchBoundary]: {caught.status} {caught.statusText}
          <br />
          {t("test")}
        </p>
      </Body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }): unknown {
  const { t, i18n } = useTranslation();

  return (
    <html lang={i18n.language} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <Body>
        <p>
          <p>[ErrorBoundary]: There was an error: {error.message}</p>
          <br />
          {t("test")}
        </p>
      </Body>
    </html>
  );
}
