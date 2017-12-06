// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import MuiAppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import MuiTypography from "material-ui/Typography"
import MuiButton from "material-ui/Button"
import Input from "material-ui/Input"
import MuiSearchIcon from "material-ui-icons/Search"
import Logo from "./logo.png"

export type Props = {
  children?: Node,
  title: string
}

const Root = styled.div`
  width: 100%;
`

const Search = styled.div`
  display: flex;

  > label:nth-child(1) {
    padding-top: 1rem !important;
    padding-right: 0.5rem !important;
  }

  > div {
    height: 2.6rem !important;

    > input {
      padding-top: 1em !important;
      width: 10rem;
    }
  }
`
const AppBar = styled(MuiAppBar)`
  background-color: #efdda0 !important;
  color: #000 !important;
`

const Button = styled(MuiButton)`
  margin 0 0.25rem;
`

const Typography = styled(MuiTypography)`
  flex: 1;
  height: 3.25rem;
`
const SearchIcon = styled(MuiSearchIcon)`
  padding-left: 2.5rem;
`

const Contents = styled.div`
  padding-top: 1rem;
`

export default ({ title, children }: Props) => (
  <Root>
    <AppBar position='static'>
      <Toolbar>
        <img src={Logo} alt='カエルのイラスト' title='雨の日のカエル' />
        <Typography type='search' color='inherit'>
          <Search>
            <label htmlFor='app_text'>
              <SearchIcon />
            </label>
            <Input placeholder='キーワードを入力' id='app_text' />
          </Search>
        </Typography>
        <div>
          <Button color='accent' raised>
            お試し投稿
          </Button>
          <Button color='primary' raised>
            ユーザ登録
          </Button>
          <Button>ログインする</Button>
        </div>
      </Toolbar>
    </AppBar>
    <Contents>{children}</Contents>
  </Root>
)
