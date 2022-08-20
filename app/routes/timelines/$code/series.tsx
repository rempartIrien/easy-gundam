import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ReactElement } from "react";

import { listSeries } from "~/graphql/series.server";
import type { Language } from "~/i18n/i18n.config";
import i18Next from "~/i18n/i18n.server";

interface LoaderData {
  series: Awaited<ReturnType<typeof listSeries>>;
}

export const loader: LoaderFunction = async (args) => {
  const locale = await i18Next.getLocale(args.request);
  const series = await listSeries(args.params.code || "", locale as Language);
  return json<LoaderData>({ series } as LoaderData);
};

export default function Timeline(): ReactElement {
  const { series } = useLoaderData() as LoaderData;
  return (
    <ol>
      {series.map((s) => (
        <li key={s.code}>{s.title}</li>
      ))}
    </ol>
  );
}
