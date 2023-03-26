import type { Language } from "../i18n/i18n.config";

import {
	GET_ADAPTATION_BY_CODE_QUERY,
	LIST_ADAPTATION_QUERY,
} from "./adaptations/queries";
import type { InlineTranslatedPropertyObject } from "./formatter.server";
import { format } from "./formatter.server";
import type {
	GetAdaptationByCodeQuery,
	GetAdaptationByCodeQueryVariables,
	ListAdaptationsQuery,
	ListAdaptationsQueryVariables,
} from "./generated/types";
import graphQLClient from "./graphql-client.server";

export async function listAdaptations(
	seriesCode: string,
	language: Language,
): Promise<
	InlineTranslatedPropertyObject<ListAdaptationsQuery["adaptations"]>
> {
	const variables = { seriesCode: seriesCode, language };

	const { adaptations } = await graphQLClient.request<
		ListAdaptationsQuery,
		ListAdaptationsQueryVariables
	>(LIST_ADAPTATION_QUERY, variables);

	return format(adaptations);
}

export async function getAdaptationByCode(
	code: string,
	language: Language,
): Promise<
	InlineTranslatedPropertyObject<
		GetAdaptationByCodeQuery["adaptations"][number]
	>
> {
	const variables = { language, code };

	const { adaptations } = await graphQLClient.request<
		GetAdaptationByCodeQuery,
		GetAdaptationByCodeQueryVariables
	>(GET_ADAPTATION_BY_CODE_QUERY, variables);

	if (!adaptations[0]) {
		throw new Error(`Cannot retrieve any adaptation for code ${code}`);
	}
	if (adaptations.length > 1) {
		throw new Error(`Too many adaptations found for code ${code}`);
	}

	return format(adaptations[0]);
}
