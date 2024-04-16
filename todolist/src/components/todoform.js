import React from 'react'
import '../../src/App.scss'
const todoform = () => {
  return (

  <form className='todo-form'> 
      <div className='todo-header'>To do list</div>
    <br></br>
    <div className='todo-inpuit'>
        <input
          className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-pink-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-pink-400"
          autocomplete="off"
          placeholder="Enter your text..."
          name="text"
          type="text"
        ></input>{/* Celej input */}
        <button
          title="Add New"
          class="group cursor-pointer outline-none hover:rotate-90 duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            class="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button> {/* Celej button */}
    </div>
    </form>
  )
}

export default todoform