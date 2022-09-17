import React from 'react'
import {useState} from "react"

const Form1 = () => {
    const [form, setform] = useState({});

    const handleChange=(e)=>{
        console.log(e)
        let{value,name}=e.target

        setform({
            ...form,
            [name]:value
        })

    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(form)

    }

  return (
    <div>
    <h1>form</h1>
        <form onSubmit={handleOnSubmit}>
        <div>
        <label>Name:</label>
            <input
                type="text"
                placeholder="Enter name"
                name="username"
                onChange={handleChange}
            />
        </div>
        <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Form1