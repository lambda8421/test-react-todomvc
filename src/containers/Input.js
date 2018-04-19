import React from 'react';
import InputText from '../components/InputText';
import uuid from 'uuid';

export default class Input extends React.Component {

  inputRef = ref => this.input = ref;

  addItem = (e) => {
      // preventDefault to avoid page reload
    e.preventDefault();

    //trim input to make sure add valid Todo item
    const text = this.input.value.trim()
    if (!text) return

    //add item
    const todo = {
      id: uuid(text),
      name: text,
      completed: false
    };
    this.props.addItem(todo)

    //reset input value
    this.input.value = ''
  }
  
  render() {
    return <InputText
        inputRef={this.inputRef}
        addItem={this.addItem}
        showbtn={false}
    />
  }
}