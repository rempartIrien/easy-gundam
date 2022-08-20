import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";

import config from "./i18n/i18n.config";
import i18Next from "./i18n/i18n.server";

interface LoaderData {
  locale: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18Next.getLocale(request);
  return json<LoaderData>({ locale });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Easy Gundam",
  viewport: "width=device-width,initial-scale=1",
});

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: config.defaultNS,
};

export default function Root(): ReactElement {
  // Get the locale from the loader
  const { locale } = useLoaderData<LoaderData>();

  const { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
