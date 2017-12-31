// @flow
import React from "react"
import styled from "styled-components"
import { compose, withState, type HOC } from "recompose"
import { withStyles } from "material-ui/styles"
import Divider from "material-ui/Divider"
import MuiPaper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import TextField from "material-ui/TextField"
import ReCAPTCHA from "react-google-recaptcha"
import { Regist } from "./"

type Props = {
  classes: *,
}

type State = {
  check: boolean,
  email: string,
  password: string,
  setCheck: (check: boolean) => void,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
}

const Root = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width 100%;
`

const Paper = styled(MuiPaper)`
  width 40%;
  max-width 50rem;
  min-width 40rem;
`

const Container = styled.div`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: center;
  justify-content: center;
`

const Recaptcha = styled.div`
  padding: 3rem 0;
`

const Terms = styled.div`
  padding: 1rem 0;
`

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

const enhance: HOC<State, Props> = compose(
  withState("email", "setEmail", ""),
  withState("password", "setPassword", ""),
  withState("check", "setCheck", false)
)

const Plain = ({
  email,
  password,
  check,
  classes,
  setCheck,
  setEmail,
  setPassword,
}: Props & State) => (
  <Root>
    <Paper>
      <Title>
        <Typography type='display1' gutterBottom>
          会員情報入力
        </Typography>
      </Title>
      <Divider />
      <Container>
        <TextField
          id='email'
          label='メールアドレス'
          margin='normal'
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          id='password'
          label='パスワード'
          type='password'
          margin='normal'
          onChange={event => setPassword(event.target.value)}
        />
        <Recaptcha>
          <ReCAPTCHA
            sitekey='6Ld3Wz0UAAAAANyEca8DU8Flb_DbPb58F1NqsTDi'
            onChange={(value) => {
              setCheck(true)
            }}
          />
        </Recaptcha>

        <Terms>
          利用規約に同意のうえ、「利用規約に同意して登録」ボタンを押してください。
        </Terms>
        <Regist disabled={!check} email={email} password={password} />
      </Container>
    </Paper>
  </Root>
)

const StylesPlain = withStyles(styles)(Plain)

export default enhance(StylesPlain)
