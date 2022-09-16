import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"

const SelectPagination = () => {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5);
    const [totalCount, setTotalCount] = useState(0)
    const [todos, setTodos] = useState([]);
  
  
  
    useEffect(() => {
      axios
        .get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
        .then((res) => {
          console.log(res)
          setTodos(res.data)
          setTotalCount(Number(res.headers["x-total-count"]))
  
        })
    }, [page,limit])
  return (
    <div>
         <button
        disabled={page <= 1} onClick={() => setPage(page - 1)}
      >
        pre
      </button>
      <select onChange={(e)=> setLimit(Number(e.target.value))}>
        <option value={5} >5</option>
        <option value={10}  >10</option>
        <option value={20}  >20</option>
      </select>
      <button
        disabled={totalCount < page * 5}
        onClick={() => {
          setPage(page + 1)
        }}>next</button>

      {todos.map((ele) => {
        return <div key={ele.id}>
          {ele.id}{`:`}{ele.value}
        </div>
      })}
    </div>
  )
}

export default SelectPagination