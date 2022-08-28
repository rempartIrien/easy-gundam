import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useMatches, useParams } from "@remix-run/react";
import type { ReactElement } from "react";
import invariant from "tiny-invariant";

import { getTimelineByCode } from "~/graphql/timeline.server";
import type { Language } from "~/i18n/i18n.config";
import i18Next from "~/i18n/i18n.server";

interface LoaderData {
  timeline: Awaited<ReturnType<typeof getTimelineByCode>>;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const locale = await i18Next.getLocale(request);
  const { code } = params;
  invariant(code, "Code is required");

  const timeline = await getTimelineByCode(code, locale as Language);
  if (!timeline) {
    throw new Response("Workshop not found", { status: 404 });
  }

  // notice that the benefit here is that even though the backend needs
  // to read into our database to handle the 404 case, we don't have to send
  // the client the workshop data in this route because we sent that to the client
  // in the parent route already and we can access that data via useMatches.
  return json({});
};

export default function Timeline(): ReactElement {
  const { code } = useParams();
  invariant(code, "Code is required");
  const data = useMatches().find((m) => m.pathname === `/timelines/${code}`)
    ?.data as LoaderData;
  if (!data) {
    throw new Error("This should be impossible.");
  }
  return (
    // eslint-disable-next-line @typescript-eslint/naming-convention
    <p dangerouslySetInnerHTML={{ __html: data.timeline.description || "" }} />
  );
}
