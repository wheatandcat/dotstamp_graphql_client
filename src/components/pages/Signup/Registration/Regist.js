import React, { Fragment, Component } from "react"
import styled from "styled-components"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import Button from "material-ui/Button"

type State = {
  error: string,
}

type Props = {
  email: string,
  mutate: *,
  password: string,
  disabled: boolean,
}

const RegistButton = styled(Button)`
  margin: 2rem 0;
`

const ErrorMessage = styled.div`
 font-size 1.5rem;
 color: red;
`

class NewEntry extends Component<Props, State> {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  state = {
    ok: false,
    error: "",
  }

  onClick() {
    this.props
      .mutate({
        variables: {
          email: this.props.email,
          password: this.props.password,
        },
      })
      .then(({ data }) => {
        this.setState({
          ok: true,
          error: "",
        })
      })
      .catch(() => {
        this.setState({
          ok: false,
          error: "登録に失敗しました。",
        })
      })
  }

  render() {
    if (this.state.ok) {
      return <div>登録完了しました。TOPに移動する</div>
    }

    return (
      <Fragment>
        {this.state.error !== "" ? (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        ) : (
          ""
        )}
        <RegistButton
          raised
          color="accent"
          disabled={this.props.disabled}
          onClick={this.onClick}
        >
          利用規約に同意して登録
        </RegistButton>
      </Fragment>
    )
  }
}

const submitRepository = gql`
  mutation createUser($email: String, $password: String) {
    createUser(email: $email, password: $password) {
      id
      name
      email
    }
  }
`

const NewEntryWithData = graphql(submitRepository)(NewEntry)

export default NewEntryWithData
