import React from 'react'
import { TodoItem } from './TodoItem'

export default function Todos(props) {
  return (
    <>
    <div className='my-2'>
    <h2>Todos</h2>
    {props.td.length===0 ? "No Item to display" :
    props.td.map((tod)=>{
      return (<TodoItem key={tod.siNo} todo={tod} onDel={props.onDelete}/>)
    }
    )}

    
    </div>
    </>
  )
}
