import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

export const graphqlClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/graphql'
  }),
  cache: new InMemoryCache()
});