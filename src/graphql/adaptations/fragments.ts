import { gql } from "graphql-request";

export const BASE_ADAPTATION_FRAGMENT = gql`
	fragment adaptationBase on adaptations {
		code
		dateCreated: date_created
		format
		episodeNumber: episode_number
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			title
		}
		image {
			id
			description
		}
	}
`;

export const FULL_ADAPTATION_FRAGMENT = gql`
	fragment adaptationFull on adaptations {
		code
		dateCreated: date_created
		series {
			code
		}
		format
		episodeNumber: episode_number
		parutionDate: parution_date
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			title
			description
		}
		image {
			id
			description
		}
	}
`;
