import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom'
import {useFetch} from '../../components/Hook/useFetch'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [vallue,setValue] =useState("")

  const {data,loading,arr} = useFetch(`/products/search?q=${vallue}`,vallue)
 
  const javob = data?.data?.products?.map((el,inx) =>
   <Link className='.navbar-search-etim' to={`/product/${el.id}`}>
(
    <div key={inx} className="search">
    <img src={el.images[0]} width={30} alt="" />
    <span>{el.title}</span>
    </div>
  )
   </Link> )

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

        <div className="navbar-search">
          <input
          value={vallue}
          onChange={(e) => setValue(e.target.value)}
          type="text" placeholder='search....' />
          {
            vallue.trim() ?
            <div className="navbar-search-content">
              {
               !data?.data?.products?.length ? <p>Mahsulot topilmadi</p> : <></>
              }
                {javob}
            </div>
            : <></>
          }
          
        </div>
    </div>
     </header>
    </>
  )
}

export default Navbar