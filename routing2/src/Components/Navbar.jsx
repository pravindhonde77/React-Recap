import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext)
  const navigate = useNavigate()


  const handleLoginClick = () => {
    //login screen
    if (isAuth) {
      //he wants to logout
      logout()
    } else {
      //he wants to login
      navigate("/login")
    }

  }



  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      <Link to="">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feeds</Link>
      <button onClick={handleLoginClick}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  )
}

export default Navbar