import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import invariant from "tiny-invariant";

import { getTimelineByCode } from "../../graphql/timeline.server";
import type { Language } from "../../i18n/i18n.config";
import i18Next from "../../i18n/i18n.server";

interface LoaderData {
  timeline: Awaited<ReturnType<typeof getTimelineByCode>>;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const locale = await i18Next.getLocale(request);
  const { code } = params;
  invariant(code, "Code is required");

  return getTimelineByCode(code, locale as Language).then((timeline) => {
    return json<LoaderData>({
      timeline: {
        ...timeline,
        description: marked(timeline.description || ""),
      },
    });
  });
};

export default function Timeline(): ReactElement {
  const { t } = useTranslation();
  const { timeline } = useLoaderData() as LoaderData;

  return (
    <>
      <div>{t("timelines.details.labels.code", { code: timeline.code })}</div>
      <ol>
        <li>
          <Link to={`/timelines/${timeline.code}`}>
            {t("timelines.details.links.description")}
          </Link>
        </li>
        <li>
          <Link to={`/timelines/${timeline.code}/series`}>
            {t("timelines.details.links.series")}
          </Link>
        </li>
      </ol>
      <Outlet />
    </>
  );
}
