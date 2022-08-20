import type { Language } from "../i18n/i18n.config";

import type { InlineTranslatedPropertyObject } from "./formatter.seerver";
import { format } from "./formatter.seerver";
import type {
  ListTimelinesQuery,
  ListTimelinesQueryVariables,
} from "./generated/types";
import graphQLClient from "./graphql-client.server";
import { LIST_TIMELINES_QUERY } from "./timelines/queries";

export async function listTimelines(
  language: Language,
): Promise<InlineTranslatedPropertyObject<ListTimelinesQuery["timelines"]>> {
  const variables = { language };

  const { timelines } = await graphQLClient.request<
    ListTimelinesQuery,
    ListTimelinesQueryVariables
  >(LIST_TIMELINES_QUERY, variables);

  return format(timelines);
}
