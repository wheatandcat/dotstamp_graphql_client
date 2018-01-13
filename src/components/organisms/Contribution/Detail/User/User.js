import React from "react"
import styled from "styled-components"
import { compose, withState, type HOC } from "recompose"
import classNames from "classnames"
import Paper from "material-ui/Paper"
import { MenuItem, MenuList } from "material-ui/Menu"
import { Manager, Target, Popper as MuiPopper } from "react-popper"
import Button from "material-ui/Button"
import MoreHoriz from "material-ui-icons/MoreHoriz"
import Avatar from "material-ui/Avatar"
import ClickAwayListener from "material-ui/utils/ClickAwayListener"
import Grow from "material-ui/transitions/Grow"
import { withStyles } from "material-ui/styles"
import Tooltip from "material-ui/Tooltip"

type Props = {
  avatarUrl: string,
  name: string,
  classes: *,
}

type State = {
  open: boolean,
  setOpen: (open: boolean) => void,
}

const styles = {
  popperClose: {
    pointerEvents: "none",
  },
}

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

const Popper = styled(MuiPopper)`
  z-index: 2;
`

const enhance: HOC<State, Props> = compose(withState("open", "setOpen", false))

const Plain = ({ avatarUrl, name, open, setOpen, classes }: State & Props) => (
  <Root>
    <div>
      <Avatar alt="Avatar" src={avatarUrl} />
    </div>
    <NameBlock>{name}</NameBlock>
    <DateBlock>2015年11月09日に更新</DateBlock>
    <Actions>
      <Manager>
        <Target>
          <Tooltip id="tooltip-icon" placement="left" title="メニュー">
            <Button aria-label="menu" onClick={() => setOpen(true)}>
              <MoreHoriz />
            </Button>
          </Tooltip>
        </Target>
        <Popper
          placement="bottom-end"
          eventsEnabled={open}
          className={classNames({ [classes.popperClose]: !open })}
        >
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
              <Paper>
                <MenuList role="menu">
                  <MenuItem>この記事を通報する</MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          </ClickAwayListener>
        </Popper>
      </Manager>
    </Actions>
  </Root>
)

export default withStyles(styles)(enhance(Plain))
