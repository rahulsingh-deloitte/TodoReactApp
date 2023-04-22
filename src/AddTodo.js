import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    let submit=(j)=>{
        j.preventDefault()
        if(!title || !desc){
            alert("Blank value not accepted")
        }
        else{
            props.add(title,desc)
            setDesc("")
            setTitle("")
        }
    }
  return (
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
  )
}
