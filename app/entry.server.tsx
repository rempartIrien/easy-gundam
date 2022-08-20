import { resolve } from "node:path";

import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/server-runtime";
import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { renderToString } from "react-dom/server";
import { I18nextProvider, initReactI18next } from "react-i18next";

import config, { namespaceLoadPath } from "./i18n/i18n.config";
import i18Next from "./i18n/i18n.server";
import { getCssText } from "./stitches.config";

export default async function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext,
): Promise<Response> {
  // First, we create a new instance of i18next so every request will have a
  // completely unique instance and not share any state
  const instance = createInstance();

  // Then we could detect locale from the request
  const lng = await i18Next.getLocale(request);
  // And here we detect what namespaces the routes about to render want to use
  const ns = i18Next.getRouteNamespaces(context);

  await instance
    .use(initReactI18next) // Tell our instance to use react-i18next
    .use(Backend) // Setup our backend
    .init({
      ...config, // spread the configuration
      lng, // The locale we detected above
      ns, // The namespaces the routes about to render wants to use
      backend: {
        loadPath: resolve(`./public/${namespaceLoadPath}`),
      },
    });

  // Then you can render your app wrapped in the I18nextProvider as in the
  // entry.client file
  const markup = renderToString(
    <I18nextProvider i18n={instance}>
      <RemixServer context={context} url={request.url} />
    </I18nextProvider>,
  ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`);

  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: statusCode,
    headers: headers,
  });
}
