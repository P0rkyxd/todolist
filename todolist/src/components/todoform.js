import React from 'react'

const todoform = () => {
  return (
    <form className='todo-form'> ToDoForm
        <input type='text' className='todoo-input' placeholder='Co máte v plánu?'></input> 
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}

export default todoform