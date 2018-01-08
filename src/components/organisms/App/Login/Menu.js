import React from "react"
import { compose, withState, type HOC } from "recompose"
import styled, { css } from "styled-components"
import MuiButton from "material-ui/Button"
import MuiMenu, { MenuItem as MuiMenuItem } from "material-ui/Menu"

type Props = {
  open: boolean,
  name: string,
}

type State = {
  openMenu: boolean,
  anchorEl: *,
  setOpenMenu: (openMenu: boolean) => void,
  setAnchorEl: (openMenu: *) => void,
}

const Menu = styled(MuiMenu)`
  z-index: 1305 !important;
`

const MenuItem = styled(MuiMenuItem)`
  margin 0 0.25rem;
  width: 10rem;
`

const Button = styled(MuiButton)`
  margin 0 0.25rem;
`

const MyMenu = styled(MuiButton)`
  max-width: 15rem;

  > span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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

const enhance: HOC<State, Props> = compose(
  withState("openMenu", "setOpenMenu", false),
  withState("anchorEl", "setAnchorEl", null)
)

const Plain = ({
  name,
  anchorEl,
  open,
  openMenu,
  setOpenMenu,
  setAnchorEl,
}: Props & State) => (
  <ButtonGroup open={open}>
    <Button color="primary" raised>
      フォローした投稿
    </Button>

    <Button color="accent" raised>
      投稿する
    </Button>

    <MyMenu
      aria-owns={openMenu ? "simple-menu" : null}
      aria-haspopup="true"
      onClick={event => {
        setOpenMenu(true)
        setAnchorEl(event.currentTarget)
      }}
    >
      {name}
    </MyMenu>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={openMenu}
      onClose={() => setOpenMenu(false)}
    >
      <MenuItem onClick={() => setOpenMenu(false)}>マイページ</MenuItem>
      <MenuItem onClick={() => setOpenMenu(false)}>下書き一覧</MenuItem>
      <MenuItem onClick={() => setOpenMenu(false)}>投稿一覧</MenuItem>
      <MenuItem onClick={() => setOpenMenu(false)}>ヘルプ</MenuItem>
      <MenuItem
        onClick={() => {
          setOpenMenu(false)
          window.localStorage.removeItem("token")
          window.location.href = window.location.origin
        }}
      >
        ログアウト
      </MenuItem>
    </Menu>
  </ButtonGroup>
)

export default enhance(Plain)
