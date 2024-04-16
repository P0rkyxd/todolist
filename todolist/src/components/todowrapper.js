import React from 'react';
import TodoForm from './todoform'; 
import '../../src/App.scss'

function TodoWrapper() { 
  return (
    <div className='todo-wrapper'>
      <TodoForm /> 
    </div>
  );
}

export default TodoWrapper; 
