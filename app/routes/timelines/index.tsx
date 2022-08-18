import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { ReactElement } from "react";

import { listTimelines } from "../../data/timeline.server";
import type { Language } from "../../i18n/i18n.config";
import { i18n } from "../../i18n/i18n.server";

interface LoaderData {
  timelines: Awaited<ReturnType<typeof listTimelines>>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request);
  const timelines = await listTimelines(locale as Language);
  return json<LoaderData>({ timelines } as LoaderData);
};

export default function Timelines(): ReactElement {
  const { timelines } = useLoaderData() as LoaderData;

  return (
    <ul>
      {timelines.map((t) => (
        <li key={t.code}>
          <Link to={`/timelines/${t.code}`}>
            {t.name} created at {t.dateCreated}
          </Link>
        </li>
      ))}
    </ul>
  );
}
