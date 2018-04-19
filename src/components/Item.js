import React from 'react';

/*
    Todo item component
 */
export default (props) => (
  <li className={props.item.completed ? 'list-item completed' : 'list-item'} >
      <label id="text">{props.item.name}</label>
      {!props.item.complete ?
          // click to complete
          <button id="complete" onClick={props.completeItem(props.item.id)}>O</button> :
          null
      }
      <button id="delete" onClick={props.deleteItem(props.item.id)}>X</button>
  </li>
)







