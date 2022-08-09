import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import invariant from "tiny-invariant";

import { i18n } from "../../i18n/i18n.server";

import { API } from "~/constants.server";

interface LoaderData {
  timeline: { id: string; code: string };
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const locale = await i18n.getLocale(request);
  const { code } = params;
  invariant(code, "Code is required");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return fetch(API, {
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
        timelines(limit: 1, filter: { code: { _eq: "${code}" } }) {
          id
          code,
          translations(filter: { language_code: { code: { _starts_with: "${locale}" } } }) {
            name
          }
        }
      }`,
    }),
  })
    .then((r) => r.json())
    .then(({ data }) => {
      return json<LoaderData>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        timeline: data.timelines[0],
      } as LoaderData);
    });
};

export default function Timelines(): ReactElement {
  const { t } = useTranslation();
  const { timeline } = useLoaderData() as LoaderData;

  return <div>{t("timeline", { code: timeline.code })}</div>;
}
