import React from 'react'

const TodoForm = props => {
  return (
    <form className='card card-body mb-3'>
      <input
        name='todoList'
        onChange={props.handleChange}
        value={props.value}
        className='list-group-item'
        type='text'
        placeholder='Enter your task'
      />
      <div className='btn-group mt-3'>
        <button onClick={props.handleTask} className='btn-dark btn-lg mr-1'>
          Add A Task
        </button>
        <button className='btn-dark btn-lg'>Clear The Task</button>
      </div>
    </form>
  )
}

export default TodoForm
