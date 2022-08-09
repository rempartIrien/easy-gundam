import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ReactElement } from "react";

import { API } from "~/constants.server";

interface LoaderData {
  timelines: { id: string; code: string }[];
}

export const loader: LoaderFunction = () => {
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
        timelines {
          id
          code
        }
      }`,
    }),
  })
    .then((r) => r.json())
    .then(({ data }) => {
      return json<LoaderData>(data as LoaderData);
    });
};

export default function Timelines(): ReactElement {
  const { timelines } = useLoaderData() as LoaderData;
  return (
    <ul>
      {timelines.map((t) => (
        <li key={t.id}>{t.code}</li>
      ))}
    </ul>
  );
}
