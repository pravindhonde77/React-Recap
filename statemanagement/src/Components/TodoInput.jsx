import React from 'react'
import { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
   setValue(e.target.value)
    }

  return (
    <div>
        <input 
            type="text"
            value={value}
            placeholder="New Todo Item"
            onChange={handleChange}
            style={{padding:"10px",color:"green",fontWeight:"20px"}}
        />
        <button onClick={()=>{
            console.log(value)
            addTodo(value)
            setValue("")
           
            
        }}
        style={{padding:"10px",color:"white",fontWeight:"20px",backgroundColor:"black",marginLeft:"5px"}}>Add</button>
    </div>
  )
}

export default TodoInput