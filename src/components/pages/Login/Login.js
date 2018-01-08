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

const LoginButton = styled(Button)`
  margin:  1rem 0 2rem 0;
  width 100%;
`

const ErrorMessage = styled.div`
 font-size 1.5rem;
 color: red;
`

const OkMessage = styled.div`
 font-size 1.5rem;
`

class UserLogin extends Component<Props, State> {
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
        console.log(data.login.key)
        window.localStorage.setItem("token", data.login.key)
        this.setState({
          ok: true,
          error: "",
        })
        window.location.href = window.location.origin
      })
      .catch(() => {
        this.setState({
          ok: false,
          error: "ログインに失敗しました。",
        })
      })
  }

  render() {
    if (this.state.ok) {
      return (
        <OkMessage>
          ログインに成功しました。TOPに移動する<br />
          <br />
        </OkMessage>
      )
    }

    return (
      <Fragment>
        {this.state.error !== "" ? (
          <ErrorMessage>{this.state.error}</ErrorMessage>
        ) : (
          ""
        )}
        <LoginButton
          raised
          color="accent"
          disabled={this.props.disabled}
          onClick={this.onClick}
        >
          ログイン
        </LoginButton>
      </Fragment>
    )
  }
}

const submitLogin = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      key
    }
  }
`

export default graphql(submitLogin)(UserLogin)
