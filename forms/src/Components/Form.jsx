import React, { useRef } from 'react'
import { useState } from "react"

const Form = () => {
    const [form, setForm] = useState({})
    const ref=useRef()
    const handleChange = (e) => {
        console.log(e)
       
        let { checked, type, name, value, file } = e.target;
        //let name=e.target.name
        //let value=e.target.value
        if (type === "checkbox") {
            setForm({
                ...form,
                [name]: checked,
            })
        } else if (type === file) {
            setForm({
                ...form,
                [name]: file,
            })
        } else {
            setForm({
                ...form,
                [name]: value,
            })

        }
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        ref.current.focus()
        

    }

    return (
        <div>
            <h1>Forms</h1>
            <form onSubmit={handleOnSubmit}>

                <div>
                    <label>Name :    </label>
                    <input  type="text"
                    ref={ref}
                     placeholder="Enter Name"
                        name="username"
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label>Email :</label>
                    <input type="email" placeholder='Enter E-mail'
                        name='email' 
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <label>Password:</label>
                    <input type="password" placeholder='Enter password'
                        onChange={handleChange} name="password"
                        
                    />
                </div>


                <div>
                    <label>Age :</label>
                    <input type="number"
                        name="age"
                       
                        onChange={handleChange}
                    />
                </div>


                <div>
                    <input
                        type="checkbox"
                        name="isIndian"
                        cheaked={form.isIndian}
                        onChange={handleChange}
                    />
                    <label>:Is Indian</label>
                </div>


                <div>

                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        />
                        <label>Male</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                        />
                        <label>FeMale</label>
                    </div>

                </div>


                <div>
                    <label>City:</label>
                    <select
                        name="selectcity"
                        value={form.selectcity}
                        onChange={handleChange}
                    >
                        <option value="pune">pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Banglore">Banglore</option>
                    </select>
                </div>


                <div>
                    <label>User Resume :</label>
                    <input type="file"
                        name="resume"
                        value={form.resume}
                        onChange={handleChange}
                    />
                </div>


                <button type='submit'>submit</button>

            </form>

        </div>

    )
}

export default Form