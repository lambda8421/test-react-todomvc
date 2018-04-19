import React from 'react';

export default ({addItem, inputRef, showAddBtn}) => (
  <form className='input-form' onSubmit={addItem} >
    <input
      className='input-text'
      autoFocus={true}
      ref={inputRef}
      placeholder={showAddBtn ? '' : 'New'}
    />
    {!showAddBtn ? <input type='submit' className='add-btn' value='+' /> : null}
  </form>
)