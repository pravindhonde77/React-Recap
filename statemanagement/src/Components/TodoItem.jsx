import React from 'react'
import styles from "./todo.module.css"


const TodoItem = ({value,deleteTodo}) => {
  return (
    <div className={styles.add}>
     <li className={styles.li}>
    {value}
    
    </li>
    <button className={styles.animation} onClick={()=>deleteTodo(value)}>Delete</button>

    </div>
   
  )
}

export default TodoItem