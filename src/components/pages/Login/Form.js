// @flow
import React, { Fragment } from "react"
import { compose, withState, type HOC } from "recompose"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import ReCAPTCHA from "react-google-recaptcha"
import { Login } from "./"

type Props = {}

type State = {
  check: boolean,
  email: string,
  password: string,
  setCheck: (check: boolean) => void,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
}

const Recaptcha = styled.div`
  padding: 2rem 0;
`

const enhance: HOC<State, Props> = compose(
  withState("email", "setEmail", ""),
  withState("password", "setPassword", ""),
  withState("check", "setCheck", false)
)

const Plain = ({
  email,
  password,
  check,
  setCheck,
  setEmail,
  setPassword,
}: State) => (
  <Fragment>
    <TextField
      id="email"
      label="メールアドレス"
      margin="normal"
      fullWidth
      onChange={event => setEmail(event.target.value)}
    />

    <TextField
      id="password"
      label="パスワード"
      type="password"
      margin="normal"
      onChange={event => setPassword(event.target.value)}
    />

    <Recaptcha>
      <ReCAPTCHA
        sitekey="6Ld3Wz0UAAAAANyEca8DU8Flb_DbPb58F1NqsTDi"
        onChange={value => {
          setCheck(true)
        }}
      />
    </Recaptcha>
    <div>
      <Login disabled={!check} email={email} password={password} />
      パスワードをお忘れの方
    </div>
  </Fragment>
)

export default enhance(Plain)
