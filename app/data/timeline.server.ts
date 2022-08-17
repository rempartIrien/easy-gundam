import { format } from "../graphql/formatter.seerver";
import type { ListTimelinesQuery } from "../graphql/generated/types";
import graphQLClient from "../graphql/graphql-client.server";
import { LIST_TIMELINES_QUERY } from "../graphql/timelines/queries";
import type { Language } from "../i18n/i18n.config";

export async function listTimelines(language: Language): Promise<unknown> {
  const variables = { language };

  return graphQLClient
    .request<ListTimelinesQuery>(LIST_TIMELINES_QUERY, variables)
    .then(({ timelines }) => format(timelines));
}
