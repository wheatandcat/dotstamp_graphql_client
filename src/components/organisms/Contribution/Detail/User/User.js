// @flow
import React from "react"
import styled from "styled-components"
import Button from "material-ui/Button"
import MoreHoriz from "material-ui-icons/MoreHoriz"
import Avatar from "material-ui/Avatar"

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 40rem;

  > div {
    padding 1rem;
  }
`

const NameBlock = styled.div`
  min-width: 5rem;
`

const DateBlock = styled.div`
  min-width: 20rem;
`

const Actions = styled.div`
  width: 100%;
  text-align: right;
`

export default () => (
  <Root>
    <div>
      <Avatar alt="Avatar" src="https://dotstamp.com/static/files/icon/4.jpg" />
    </div>
    <NameBlock>麦と猫</NameBlock>
    <DateBlock>2015年11月09日に更新</DateBlock>
    <Actions>
      <Button aria-label="menu">
        <MoreHoriz />
      </Button>
    </Actions>
  </Root>
)
