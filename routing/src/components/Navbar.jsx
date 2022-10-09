import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate()
  const handleOnClick=(id)=>{
    if(id===1){
      navigate("/products")
    }
  }
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Prducts</Link>
        <button onClick={()=>handleOnClick(1)}>Go to products</button>
        <button onClick={()=>handleOnClick(1)}>Go to Product 2</button>
       
    </div>
  )
}

export default Navbar