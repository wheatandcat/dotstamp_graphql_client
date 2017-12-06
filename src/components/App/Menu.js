// @flow
import React from "react"
import ListSubheader from "material-ui/List/ListSubheader"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"

export default () => (
  <div>
    <List
      subheader={
        <Link to='/'>
          <ListSubheader>MENU</ListSubheader>
        </Link>
      }
    >
      <ListItem button>
        <Link to='/contributionList'>
          <ListItemText primary='投稿' />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to='/user'>
          <ListItemText primary='ユーザー' />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to='/problem'>
          <ListItemText primary='通報ログ' />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to='/question'>
          <ListItemText primary='問い合わせログ' />
        </Link>
      </ListItem>
    </List>
  </div>
)
