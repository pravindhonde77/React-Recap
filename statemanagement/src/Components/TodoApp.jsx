import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { useState } from 'react'
import TodoItem from './TodoItem'


const TodoApp = () => {

    const [todos, setTodos] = useState([]);


    const addTodo=(newTodo)=>{
        setTodos([...todos,newTodo])
    }
    // console.log(todos)

    const deleteTodo=(value)=>{
        setTodos(todos.filter((todo)=> todo !== value))
    }
  return (
    <div>
    <h1>Todo App</h1>
 
    <TodoInput addTodo={addTodo} />
    <TodoList>
    <div>
     <ul>
    {todos.map((todo)=>(
        <TodoItem value={todo} deleteTodo={deleteTodo}/>
    ))}
    </ul>

    </div>
   
    </TodoList>
    </div>
  )
}

export default TodoApp