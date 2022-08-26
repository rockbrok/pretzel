import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.REACT_APP_BACKEND_URI || "http://localhost:1337";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  proxy: true,
  uri: `${API_URL}/graphql`
});