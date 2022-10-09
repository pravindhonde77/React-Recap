import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Login = () => {


    const [loginCreds, setLoginCreds] = useState({});
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {


        const { name, value } = e.target;

        setLoginCreds({
            ...loginCreds,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login()

    }
    return (
        <div>
            Login

            <form style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                maxWidth: "200px",
                gap: "10px",
            }}
                onSubmit={handleSubmit}

            >
                <input onChange={handleChange} name='email' type="email" placeholder="Enter Email" />
                <input onChange={handleChange} name='password' type="password" placeholder="Enter password..." />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default Login