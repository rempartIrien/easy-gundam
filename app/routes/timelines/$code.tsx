import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import invariant from "tiny-invariant";

import { getTimelineByCode } from "../../graphql/timeline.server";
import type { Language } from "../../i18n/i18n.config";
import { i18n } from "../../i18n/i18n.server";

interface LoaderData {
  timeline: Awaited<ReturnType<typeof getTimelineByCode>>;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const locale = await i18n.getLocale(request);
  const { code } = params;
  invariant(code, "Code is required");

  return getTimelineByCode(code, locale as Language).then((timeline) => {
    return json<LoaderData>({
      timeline,
    });
  });
};

export default function Timelines(): ReactElement {
  const { t } = useTranslation();
  const { timeline } = useLoaderData() as LoaderData;

  return <div>{t("timeline", { code: timeline.code })}</div>;
}
