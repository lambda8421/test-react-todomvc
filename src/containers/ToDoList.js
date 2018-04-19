import React from 'react';
import List from '../components/List';


export default class ToDoList extends React.Component {
  render(){
    return <List {...this.props} />
  }
}