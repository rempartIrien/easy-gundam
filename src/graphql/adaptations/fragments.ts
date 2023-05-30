import { gql } from "graphql-request";

export const FULL_ADAPTATION_FRAGMENT = gql`
	fragment adaptationFull on adaptations {
		code
		dateCreated: date_created
		format
		episodeNumber: episode_number
		parutionDate: parution_date
		translations(filter: { language_code: { code: { _eq: $language } } }) {
			title
			description
		}
	}
`;
