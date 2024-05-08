import type { Language } from "../i18n/i18n.config";

import { LIST_ADAPTATION_QUERY } from "./adaptations/queries";
import type { InlineTranslatedPropertyObject } from "./formatter.server";
import { format } from "./formatter.server";
import type {
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
	const variables = { seriesCode, language };

	const { adaptations } = await graphQLClient.request<
		ListAdaptationsQuery,
		ListAdaptationsQueryVariables
	>(LIST_ADAPTATION_QUERY, variables);

	return format(adaptations);
}
