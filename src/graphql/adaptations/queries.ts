import { gql } from "graphql-request";

import { FULL_ADAPTATION_FRAGMENT } from "./fragments";

export const LIST_ADAPTATION_QUERY = gql`
	query listAdaptations($seriesCode: String!, $language: String!) {
		adaptations(
			filter: { series: { code: { _eq: $seriesCode } } }
			sort: ["sort", "parution_date"]
		) {
			...adaptationFull
		}
	}
	${FULL_ADAPTATION_FRAGMENT}
`;
