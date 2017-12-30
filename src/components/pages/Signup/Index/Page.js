// @flow
import React from "react"
import styled, { css } from "styled-components"
import { withStyles } from "material-ui/styles"
import Divider from "material-ui/Divider"
import MuiEmailIcon from "material-ui-icons/Email"
import Button from "material-ui/Button"
import MuiPaper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import FontAwesome from "react-fontawesome"

type Props = {
  classes: *
}

const Root = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width 100%;
`
const PlatformButton = styled(({ backgroundColor, children, ...rest }) => (
  <Button {...rest}>{children}</Button>
))`
  margin: 1rem 0;
  width 100%;
  text-transform: none !important;
  ${props => css`
    background-color: ${props.backgroundColor} !important;
  `}
  color #fff !important;
`

const LoginButton = styled(Button)`
  margin:  1rem 0 2rem 0;
  width 100%;
  color: #000 !important;
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

const EmailIcon = styled(MuiEmailIcon)`
  width 1.5rem;
`

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  }
})

const Plain = ({ classes }: Props) => (
  <Root>
    <Paper>
      <Title>
        <Typography type='display1' gutterBottom>
          新規会員登録
        </Typography>
      </Title>
      <Divider />
      <Container>
        <PlatformButton raised backgroundColor='#D75452'>
          <FontAwesome name='google' className={classes.leftIcon} />Googleでログイン
        </PlatformButton>
        <PlatformButton raised backgroundColor='#5FC0DD'>
          <FontAwesome name='twitter' className={classes.leftIcon} />Twitterでログイン
        </PlatformButton>
        <PlatformButton raised backgroundColor='#377BB5'>
          <FontAwesome name='facebook' className={classes.leftIcon} />facebookでログイン
        </PlatformButton>
      </Container>
      <Divider />
      <Container>
        <LoginButton raised color='contrast'>
          <EmailIcon className={classes.leftIcon} /> メールアドレスで登録
        </LoginButton>
      </Container>
    </Paper>
  </Root>
)

export default withStyles(styles)(Plain)
