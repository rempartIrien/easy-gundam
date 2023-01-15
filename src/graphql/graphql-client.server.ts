import { GraphQLClient } from "graphql-request";

import { API } from "../constants.server";

const client = new GraphQLClient(`${API}/graphql`, { headers: {} });

export default client;
