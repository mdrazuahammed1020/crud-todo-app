/* eslint-disable react/prop-types */

import React from 'react'

function Todo(props) {
  const {todo, deleteTodo, editTodo, updateTodo, handleComplete} = props;
  return (
    <>
      <div className='todo' key={todo.id}>
          {
            todo.editAble ? 
            (<form onSubmit={(e)=> updateTodo(e, todo)} >
              <input type="text" name='newTodo' defaultValue={todo.title} />
              <button type='submit' >Update</button>
            </form>)
            : 
            (
              <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            <span className='todo-text' style={ todo.complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} >{todo.title}</span>
          </label>
            )
          }
          <span className='butttons'>
            {
              !todo.editAble ?
               (<><button style={{color: 'red'}} onClick={()=> deleteTodo(todo.id)} >Delete</button>
               <button style={{color: 'green'}} onClick={()=> editTodo(todo.id)} >Edit</button></>)
               :
               ''
            }
          </span>
      </div>
    </>
  )
}

export default Todo