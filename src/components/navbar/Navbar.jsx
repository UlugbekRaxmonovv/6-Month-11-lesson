import React from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

   let {pathname} = useLocation()
   if(pathname.includes("/register") || pathname.includes("/admin")){
    return <></>
   }
  return (
    <>
     <header>
     <div className='navbar container'>
        <NavLink to={"/"}>
            <h2>Navbar</h2>
        </NavLink>
     
        <NavLink className='navbar__link' to={"/"}>Home</NavLink>
        <NavLink className='navbar__link' to={"/about"}>About</NavLink>
        <NavLink className='navbar__link' to={"/register"}>Login</NavLink>
    </div>
     </header>
    </>
  )
}

export default Navbar