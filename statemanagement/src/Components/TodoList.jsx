import React from 'react'

const TodoList = ({children}) => {
  return (
    <div>
    <h2 style={{fontSize:"30px",color:"cyan"}}>Here is your TODO</h2>
       <ul>
       {children}
      
    </ul>

    </div>
 
  )
}

export default TodoList