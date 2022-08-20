import { gql } from "graphql-request";

export const BASE_SERIES_FRAGMENT = gql`
  fragment seriesBase on series {
    code
    dateCreated: date_created
    translations(filter: { language_code: { code: { _eq: $language } } }) {
      title
    }
  }
`;
