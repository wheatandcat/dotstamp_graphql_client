// @flow
import React, { type Node } from "react"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
import { persistCache } from "apollo-cache-persist"

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage
})

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${window.location.origin}/graphql`
  }),
  cache
})

export default ({ children }: { children: Node }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
