import React from 'react'
import { space } from '../../assets/css/params';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import SalesPanel from './SalesPanel';
import TodoPanel from './TodoPanel';

const TodoAndSalesPanel = () => {
  return (
    <List theme={{ flowDirection: "row", gap: `${space.space}` }}>
      <ListItem theme={{ flex: 2 }}>
        <TodoPanel />
      </ListItem>
      <ListItem theme={{ flex: 1 }}>
        <SalesPanel />
      </ListItem>
    </List>
  );
}

export default TodoAndSalesPanel