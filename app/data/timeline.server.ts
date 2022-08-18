import type { InlineTranslatedPropertyObject } from "../graphql/formatter.seerver";
import { format } from "../graphql/formatter.seerver";
import type {
  ListTimelinesQuery,
  ListTimelinesQueryVariables,
} from "../graphql/generated/types";
import graphQLClient from "../graphql/graphql-client.server";
import { LIST_TIMELINES_QUERY } from "../graphql/timelines/queries";
import type { Language } from "../i18n/i18n.config";

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
