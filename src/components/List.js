import React from 'react';
import ItemComponent from './Item';

/*
    Todo List Component
 */
export default (props) => (
    props.items.length > 0 ?
    <div className="list-container">
        <ul className='list-body'>
            {props.items.map(item =>
                <ItemComponent key={item.id} item={item} {...props} />
            )}
        </ul>
        <FooterItem {...props} />
    </div>:null
)

/*
    Show COMPLETED ALL/REMOVE COMPLETED/COUNT in the bottom of TodoList
 */
const FooterItem = ({completeAll, items, clearCompleted}) => (
    <div className="list-footer">
      <BottomOfListClickText
        action={completeAll}
        actionName="COMPLETED ALL"
      />
      {
          items.some(item => item.completed)? // if has completed items,show remove
          <BottomOfListClickText
              action={clearCompleted}
              actionName="REMOVE COMPLETED"
          /> :
          null
      }
        <p className="list-count">
            COUNT:<strong>{items.length}</strong>
        </p>
    </div>
);

const BottomOfListClickText = ({action, actionName}) =>
  <p className="list-feature" onClick={action}>{actionName}</p>;

