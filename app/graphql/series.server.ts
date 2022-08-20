import type { Language } from "../i18n/i18n.config";

import type { InlineTranslatedPropertyObject } from "./formatter.seerver";
import { format } from "./formatter.seerver";
import type {
  GetSerieByCodeQuery,
  GetSerieByCodeQueryVariables,
  ListSeriesQuery,
  ListSeriesQueryVariables,
} from "./generated/types";
import graphQLClient from "./graphql-client.server";
import { GET_SERIES_BY_CODE_QUERY, LIST_SERIES_QUERY } from "./series/queries";

export async function listSeries(
  timelineCode: string,
  language: Language,
): Promise<InlineTranslatedPropertyObject<ListSeriesQuery["series"]>> {
  const variables = { timelineCode, language };

  const { series } = await graphQLClient.request<
    ListSeriesQuery,
    ListSeriesQueryVariables
  >(LIST_SERIES_QUERY, variables);

  return format(series);
}

export async function getSeriesByCode(
  code: string,
  language: Language,
): Promise<
  InlineTranslatedPropertyObject<GetSerieByCodeQuery["series"][number]>
> {
  const variables = { language, code };

  const { series } = await graphQLClient.request<
    GetSerieByCodeQuery,
    GetSerieByCodeQueryVariables
  >(GET_SERIES_BY_CODE_QUERY, variables);

  if (!series[0]) {
    throw new Error(`Cannot retrieve any timeline for code ${code}`);
  }
  if (series.length > 1) {
    throw new Error(`Too many series found for code ${code}`);
  }

  return format(series[0]);
}
