import React from 'react'

export const TodoItem = ({todo,onDel}) => {
  return (
    <>
    <div>{todo.title}</div>
    <h4>{todo.disc}</h4>
    <button className='btn btn-danger btn-sm' onClick={()=>onDel(todo)}>Delete</button>
    <hr/>
    </>
  )
}
