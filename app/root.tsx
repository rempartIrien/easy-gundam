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
import { i18n } from "./i18n.server";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";

type LoaderData = { locale: string };

export let loader: LoaderFunction = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  return json<LoaderData>({ locale });
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Easy Gundam",
  viewport: "width=device-width,initial-scale=1",
});

export default function Root() {
  // Get the locale from the loader
  let { locale } = useLoaderData<LoaderData>();

  let { i18n } = useTranslation();

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
