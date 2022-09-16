import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"


const NextPrev = () => {
    
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [todos, setTodos] = useState([]);



  useEffect(() => {
     axios
     .get(`http://localhost:8080/todos?_page=${page}&_limit=5`)
     .then((res)=>{
      console.log(res)
      setTodos(res.data)
      setTotalCount(Number(res.headers["x-total-count"]))

     }) 
  }, [page])


    return (
        <div className="App">
          {todos.map((ele) => {
            return <div key={ele.id}>
              {ele.id}{`:`}{ele.value}
            </div>
          })}
          <button
            disabled={page <= 1}
    
            onClick={() => {
              if (page > 1) {
                setPage(page - 1)
              }
              setPage(page - 1)
            }}>pre</button>
          <button 
          disabled={totalCount<page*5}
          onClick={() => {
            setPage(page + 1)
          }}>next</button>
        </div>
      );
}

export default NextPrev