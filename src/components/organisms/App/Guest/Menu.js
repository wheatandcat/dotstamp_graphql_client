// @flow
import React from "react"
import styled, { css } from "styled-components"
import MuiButton from "material-ui/Button"
import { Link } from "react-router-dom"

export type Props = {
  open: boolean,
}

const Button = styled(MuiButton)`
  margin 0 0.25rem;
`

const ButtonGroup = styled.div`
  min-width 30rem !important;
  transition: 0.25s;

  ${props =>
    props.open
      ? css`
          margin-right: 14.1rem;
        `
      : css`
          margin-right: 0;
        `};
`

const Plain = ({ open }: Props) => (
  <ButtonGroup open={open}>
    <Button color="accent" raised>
      お試し投稿
    </Button>
    <Link to="/signup">
      <Button color="primary" raised>
        会員登録
      </Button>
    </Link>

    <Link to="/login">
      <Button>ログインする</Button>
    </Link>
  </ButtonGroup>
)

export default Plain
