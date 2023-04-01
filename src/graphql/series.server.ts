import type { Language } from "../i18n/i18n.config";

import type { InlineTranslatedPropertyObject } from "./formatter.server";
import { format } from "./formatter.server";
import type {
	GetMultiSeriesByCodesQuery,
	GetMultiSeriesByCodesQueryVariables,
	GetSeriesByCodeQuery,
	GetSeriesByCodeQueryVariables,
	ListSeriesQuery,
	ListSeriesQueryVariables,
} from "./generated/types";
import graphQLClient from "./graphql-client.server";
import {
	GET_MULTI_SERIES_BY_CODES_QUERY,
	GET_SERIES_BY_CODE_QUERY,
	LIST_SERIES_QUERY,
} from "./series/queries";

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
	InlineTranslatedPropertyObject<GetSeriesByCodeQuery["series"][number]>
> {
	const variables = { language, code };

	const { series } = await graphQLClient.request<
		GetSeriesByCodeQuery,
		GetSeriesByCodeQueryVariables
	>(GET_SERIES_BY_CODE_QUERY, variables);

	if (!series[0]) {
		throw new Error(`Cannot retrieve any series for code ${code}`);
	}
	if (series.length > 1) {
		throw new Error(`Too many series found for code ${code}`);
	}

	return format(series[0]);
}

export async function getMultiSeriesByCodes(
	codes: string[],
	language: Language,
): Promise<
	InlineTranslatedPropertyObject<GetMultiSeriesByCodesQuery["series"]>
> {
	const variables = { language, codes };

	const { series } = await graphQLClient.request<
		GetMultiSeriesByCodesQuery,
		GetMultiSeriesByCodesQueryVariables
	>(GET_MULTI_SERIES_BY_CODES_QUERY, variables);

	return format(series);
}
