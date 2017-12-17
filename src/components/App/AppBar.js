// @flow
import React, { type Node } from "react"
import { compose, withState, type HOC } from "recompose"
import styled, { css } from "styled-components"
import MuiAppBar from "material-ui/AppBar"
import MuiToolbar from "material-ui/Toolbar"
import MuiTypography from "material-ui/Typography"
import MuiButton from "material-ui/Button"
import Input from "material-ui/Input"
import MuiSearchIcon from "material-ui-icons/Search"
import MuiDrawer from "material-ui/Drawer"
import Divider from "material-ui/Divider"
import IconButton from "material-ui/IconButton"
import ChevronLeftIcon from "material-ui-icons/ChevronLeft"
import ChevronRighttIcon from "material-ui-icons/ChevronRight"
import ListIcon from "material-ui-icons/List"
import MenuIcon from "material-ui-icons/Menu"
import EmailIcon from "material-ui-icons/Email"
import InfoIcon from "material-ui-icons/Info"
import LabelIcon from "material-ui-icons/Label"
import MuiList, {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText as MuiListItemText
} from "material-ui/List"
import MuiFontAwesome from "react-fontawesome"
import Logo from "./logo.png"

export type Props = {
  children?: Node,
  title: string
}

type State = {
  open: boolean,
  setOpen: (open: boolean) => void
}

const Root = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`

const AppFrame = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`

const Search = styled.div`
  display: flex;

  > label:nth-child(1) {
    padding-top: 1rem !important;
    padding-right: 0.5rem !important;
  }

  > div {
    height: 3rem !important;

    > input {
      padding-top: 1.5em !important;
      width: 10rem;
    }
  }
`
const AppBar = styled(MuiAppBar)`
  z-index: 1301 !important;
  position: absolute !important;
  background-color: #efdda0 !important;
  color: #000 !important;
  transition: 0.25s;

  ${props =>
    (props.open
      ? css`
          margin-left: 14.1rem;
        `
      : css`
          margin-left: 0;
        `)};
`

const Drawer = styled(MuiDrawer)`
  z-index: 1300 !important;
  overflow-x: hidden;

  ul {
    width: 14rem;
  }

  > div {
    transition: 0.25s;

    ${props =>
    (props.open
      ? css`
            width: 14rem;
          `
      : css`
            width: 5.5rem;
          `)};
  }
`

const Button = styled(MuiButton)`
  margin 0 0.25rem;
`

const List = styled(MuiList)`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`

const ListItem = styled(MuiListItem)`
  height: 2rem !important;
`

const Toolbar = styled(MuiToolbar)`
  padding-left: 0.3rem !important;
`

const Typography = styled(MuiTypography)`
  flex: 1;
  height: 3.25rem;
`
const SearchIcon = styled(MuiSearchIcon)`
  padding-left: 2.5rem;
`

const Undo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 65px;
`

const ButtonGroup = styled.div`
  transition: 0.25s;

  ${props =>
    (props.open
      ? css`
          margin-right: 14.1rem;
        `
      : css`
          margin-right: 0;
        `)};
`

const Contents = styled.div`
  padding-top: 8.5rem;
  transition: 0.25s;

  ${props =>
    (props.open
      ? css`
          margin-left: 15rem;
        `
      : css`
          margin-left: 7rem;
        `)};
`

const Img = styled.img`
  padding-left: 1.5rem;
`

const FontAwesome = styled(MuiFontAwesome)`
  font-size: 2.5rem;
  padding-left: 0.2rem;
`

const ListItemText = styled(MuiListItemText)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`

const enhance: HOC<State, Props> = compose(withState("open", "setOpen", false))

const Plain = ({
  title, children, open, setOpen
}: Props & State) => (
  <Root style={{ backgroundColor: "#F5F4F5" }}>
    <AppFrame open>
      <AppBar position='static' open={open}>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>

          <Img src={Logo} alt='logo' title='logo' />
          <Typography type='search' color='inherit'>
            <Search>
              <label htmlFor='app_text'>
                <SearchIcon />
              </label>
              <Input placeholder='キーワードを入力' id='app_text' />
            </Search>
          </Typography>
          <ButtonGroup open={open}>
            <Button color='accent' raised>
              お試し投稿
            </Button>
            <Button color='primary' raised>
              ユーザ登録
            </Button>
            <Button>ログインする</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Drawer type='permanent' open={open}>
        <div>
          <Undo>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? <ChevronLeftIcon /> : <ChevronRighttIcon />}
            </IconButton>
          </Undo>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary='新着投稿' />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary='タグフィード' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary='問い合わせ' />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='利用規約' />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <FontAwesome name='github' />
              </ListItemIcon>
              <ListItemText primary='GitHub' />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main style={{ width: "95%" }}>
        <Contents open={open}>{children}</Contents>
      </main>
    </AppFrame>
  </Root>
)

export default enhance(Plain)
