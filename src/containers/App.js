import React from 'react';
import '../styles/app.css';

import TitleComponent from '../components/Title';
import Input from './Input';
import ToDoList from './ToDoList';

export default class TodoApp extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          items: []
      }
  }

    /*
      add todo item to list
      */
  addItem = item =>{
      console.log(item)
    return this.setState(prev =>
        ({items: [...prev.items, item]})
    )
  }
  /*
   find out which item should be deleted then delete
   */
  deleteItem =
    id =>
      () =>
        this.setState(prev =>
            ({
              items: prev.items.filter(
                item => item.id !== id
              )
            })
        )

  /*
    find out which item should be completed then complete
  */
  completeItem =
    id =>
      () =>
        this.setState(prev => {
            prev.items.forEach(item =>
                item.id === id ? item.completed = true : null
            );
            return prev;
          }
        )
    /*
       complete all items by click one time
     */
  completeAll = () =>
    this.setState(
      prev => {prev.items.forEach(item => item.completed = true)
        return prev;
      }
    )

    /*
       remove all items by click one time
     */
  clearCompleted = () =>
    this.setState(
      prev => ({items: prev.items.filter(item => !item.completed)})
    )

  render (){
    return <div>
          <TitleComponent title='To-Do'/>
          <Input addItem={this.addItem}/>
          <ToDoList items={this.state.items}
                    deleteItem={this.deleteItem}
                    completeItem={this.completeItem}
                    completeAll={this.completeAll}
                    clearCompleted={this.clearCompleted}/>
      </div>
  }
}