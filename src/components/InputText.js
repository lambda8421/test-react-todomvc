import React from 'react';

export default ({addItem, inputRef, showAddBtn, inputID, inputValue}) => (
  <form className='input-form' onSubmit={addItem} >
    <input
      id={inputID}
      className='input-text'
      placeholder={showAddBtn ? '' : 'New'}
      autoFocus={true}
      ref={inputRef}
      defaultValue={inputValue}
    />
    {!showAddBtn ? <input type='submit' className='add-btn' value='+' /> : null}
  </form>
);