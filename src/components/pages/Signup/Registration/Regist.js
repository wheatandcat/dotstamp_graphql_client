// @flow
import React, { Component } from "react"
import styled from "styled-components"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import Button from "material-ui/Button"

type Props = {
  email: string,
  mutate: *,
  password: string,
  disabled: boolean
}

const RegistButton = styled(Button)`
  margin: 2rem 0;
`

class NewEntry extends Component<Props> {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    this.props
      .mutate({
        variables: {
          email: this.props.email,
          password: this.props.password
        }
      })
      .then(({ data }) => {
        console.log("got data", data)
      })
      .catch((error) => {
        console.log("there was an error sending the query", error)
      })
  }

  render () {
    return (
      <RegistButton raised color='accent' disabled={this.props.disabled} onClick={this.onClick}>
        利用規約に同意して登録
      </RegistButton>
    )
  }
}

const submitRepository = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(
      email: $email,
      password: $password
    ) {
      id
      name
      email
    }
  }
`

const NewEntryWithData = graphql(submitRepository)(NewEntry)

export default NewEntryWithData
