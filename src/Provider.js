// @flow
import React, { type Node } from "react"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${window.location.origin}/graphql`
  }),
  cache: new InMemoryCache()
})

export default ({ children }: { children: Node }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
