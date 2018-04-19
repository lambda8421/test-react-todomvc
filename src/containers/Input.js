import React from 'react';
import InputText from '../components/InputText';

export default class Input extends React.Component {

  inputRef = ref => this.input = ref;

  addItem = (e) => {
    console.log(this.input.value)
    e.preventDefault();  // prevent page reload
    const text = this.input.value.trim();
    if (!text) return; // if the input has no value then exit
    const todo = {
      id: Math.random() * 1000, // better way to handle this in the future
      name: text,
      completed: false
    };
    this.props.addItem(todo);
    this.input.value = ''; // clear the input field
  }
  
  render() {
    console.log(this.props)
    return <InputText
        inputRef={this.inputRef}
        addItem={this.addItem}
        showbtn={false}
    />
  }
}