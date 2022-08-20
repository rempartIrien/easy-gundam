import { gql } from "graphql-request";

import { BASE_TIMELINE_FRAGMENT } from "./fragments";

export const LIST_TIMELINES_QUERY = gql`
  query listTimelines($language: String!) {
    timelines {
      ...timelineBase
    }
  }
  ${BASE_TIMELINE_FRAGMENT}
`;

export const GET_TIMELINE_BY_CODE_QUERY = gql`
  query gettimelineByCode($code: String!, $language: String!) {
    timelines(limit: 1, filter: { code: { _eq: $code } }) {
      ...timelineBase
    }
  }
  ${BASE_TIMELINE_FRAGMENT}
`;
