// @flow
import React, { type Node } from "react"
import { ApolloClient, createNetworkInterface } from "apollo-client"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://localhost:3000/graphql"
  })
})

export default ({ children }: { children: Node }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
