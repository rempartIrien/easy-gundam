import type { Language } from "../i18n/i18n.config";

import type { InlineTranslatedPropertyObject } from "./formatter.server";
import { format } from "./formatter.server";
import type {
	GetMultiTimelinesByCodesQuery,
	GetMultiTimelinesByCodesQueryVariables,
	GetTimelineByCodeQuery,
	GetTimelineByCodeQueryVariables,
	ListTimelinesQuery,
	ListTimelinesQueryVariables,
} from "./generated/types";
import graphQLClient from "./graphql-client.server";
import {
	GET_MULTI_TIMELINES_BY_CODES_QUERY,
	GET_TIMELINE_BY_CODE_QUERY,
	LIST_TIMELINES_QUERY,
} from "./timelines/queries";

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

export async function getTimelineByCode(
	code: string,
	language: Language,
): Promise<
	InlineTranslatedPropertyObject<GetTimelineByCodeQuery["timelines"][number]>
> {
	const variables = { language, code };

	const { timelines } = await graphQLClient.request<
		GetTimelineByCodeQuery,
		GetTimelineByCodeQueryVariables
	>(GET_TIMELINE_BY_CODE_QUERY, variables);

	if (!timelines[0]) {
		throw new Error(`Cannot retrieve any timeline for code ${code}`);
	}
	if (timelines.length > 1) {
		throw new Error(`Too many timelines found for code ${code}`);
	}

	return format(timelines[0]);
}

export async function getMultiTimelinesByCodes(
	codes: string[],
	language: Language,
): Promise<
	InlineTranslatedPropertyObject<GetMultiTimelinesByCodesQuery["timelines"]>
> {
	const variables = { language, codes };

	const { timelines } = await graphQLClient.request<
		GetMultiTimelinesByCodesQuery,
		GetMultiTimelinesByCodesQueryVariables
	>(GET_MULTI_TIMELINES_BY_CODES_QUERY, variables);

	return format(timelines);
}
