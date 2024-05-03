import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom'
import {useFetch} from '../../components/Hook/useFetch'
import { Link } from 'react-router-dom'
import rasm1 from '../../assets/img/rasm.png'
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import rasm2 from '../../assets/img/rasm1.png'
import rasm3 from '../../assets/img/rasm2.png'
import rasm4 from '../../assets/img/rasm3.png'
import rasm5 from '../../assets/img/rasm4.png'
import rasm6 from '../../assets/img/rasm5.png'
import rasm7 from '../../assets/img/rasm6.png'
import rasm8 from '../../assets/img/rasm7.png'
import rasm9 from '../../assets/img/rasm8.png'
import rasm10 from '../../assets/img/rasm9.png'
import rasm11 from '../../assets/img/rasm10.png'
import { IoMenuOutline } from "react-icons/io5";
import { VscChevronDown } from "react-icons/vsc";
const Navbar = () => {

  const [vallue,setValue] =useState("")

  const [toogli,sitToggli] = useState(false)

  const {data,loading,arr} = useFetch(`/products/search?q=${vallue}`,vallue)
 
  const javob = data?.data?.products?.map((el,inx) =>
   <Link className='.navbar-search-etim' to={`/product/${el.id}`}>
(
    <div key={inx} className="search">
      <div className="search-all">
      <img src={el.images[0]} width={30} alt="" />
    <span>{el.title}</span>
      </div>
 
    </div>
  )
   </Link> )
  return (
    <>
     <header>
     <div className="container">
       <div className="navbar-top">
        <div className="navbar-top-left">
        <a href="#">About Us</a>
        <a href="#">My Account</a>
        <a href="#">Wishlist</a>
        <a href="#">Order Tracking</a>
        </div>
       <div className="navbar-top-right">
       <p>Need help? Call Us:+ <span>1800 900</span></p>
        <select name="" id="">
        <option value="">English </option>
        <option value="">Rus </option>
        <div className="chiziq"></div>
        </select>
        <div className="al"></div>
        <select name="" id="">
        <option value="">USD</option>
        <option value="">Aqsh</option>
        </select>
       </div>
       </div>
     </div>
     <div className="right"></div>
     <div className=" navbar-left container">
     <div className="navbar-left-row">
   <NavLink to={'/'}>
   <img src={rasm1} alt="all" />
   </NavLink>
   </div>
   <div className="navbar-left-row-all">
    <div className="input-hammasi">
   <div className="input-all">
   <div className="input-row">
   <select name="" id="">
    <option value="">All Categories</option>
  </select>
   </div>
   <div className="input-row">
   <div className="navbar-search">
          <input
          value={vallue}
          onChange={(e) => setValue(e.target.value)}
          type="text" placeholder='Search for items...' />
          {
            vallue.trim() ?
            <div className="navbar-search-content">
              {
               !data?.data?.products?.length ? <div className="arr">
                <div className="arr1">
                  <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" alt="" />
                  <h1>Mahsulot topilmadi</h1>
                </div>
               </div> : <></>
              }
                {javob}
            </div>
            : <></>
          }
          
        </div>
   </div>
   </div>
    <IoSearchOutline />
    </div>

   </div>
   <div className="select">
    <div className="select-all">
    <div className="select-row">
      <CiLocationOn />
      </div>
      <div className="select-row">
      <select name="" id="">
        <option value="">Your Location</option>
      </select>
      </div>
    </div>
   </div>
  <div className="icon">
    <div className="icon-all">
    <div className="icon-row">
        <img src={rasm2} alt="" />
        <div className="img">
        <img  src={rasm6} alt="" />
        </div>
        <p>Compare</p>

      </div>
      <div className="icon-row">
        <img src={rasm3} alt="" />
        <p>Wishlist</p>
      </div>
      <div className="icon-row">
        <img src={rasm4} alt="" />
        <p>Cart</p>
      </div>
      <div className="icon-row">
       <NavLink to={"/register"}> <img src={rasm5} alt="" /></NavLink>
        <p><NavLink className='p' to={"/register"}>Account</NavLink></p>
      
      </div>
    </div>
  </div>
  </div>
  <div className="right"></div>
    
    <div className="navbar-bottom container">
      <div className={`navbar-all ${toogli ? 'show' : ""}`} >
        <div className="navbar-row">
          <div className="navbar-list">
          <div className="navbar-nav">
              <img src={rasm9} alt="" />
            </div>
            <div className="navbar-nav">
            <p>Browse</p>
            </div>
            <div className="navbar-nav">
             <select name="" id="">
              <option value="">All Categories</option>
             </select>
            </div>
          </div>
        </div>
        <div className="navbar-row">
         <div className="navbar-img">
         <img src={rasm11} alt="" />
          <a href="#">Deals</a>
         </div>
        </div>
        <div className="navbar-row">
        <NavLink className='navbar__link' to={"/"}>Home</NavLink>
       
        </div>
        <div className="navbar-row">
          <a href="#">About</a>
        </div>
        <div className="navbar-row">
        <div className="a">
        <a href="#" className="">Shop</a>
        <VscChevronDown />
        </div>
        </div>
        <div className="navbar-row">
        <div className="a">
        <a href="#" className="">Vendors</a>
        <VscChevronDown />
        </div>
        
        </div>

        <div className="navbar-row">
        <div className="a">
        <a href="#" className="">Mega menu  </a>
        <VscChevronDown />
        </div>
        
        </div>
        <div className="a">
        <div className="navbar-row">
        <div className="a">
        <a href="#" className="">Blog </a>
        <VscChevronDown />
        </div>
        </div>

        </div>
        <div className="navbar-row">
       <div className="a">
       <a href="#" className="">Pages </a>
        <VscChevronDown />
       </div>
        </div>
        <div className="navbar-row">
        <a href="#" className="">Contact</a>
        </div>
      </div>

      <div className="phon">
          <img src={rasm10} alt="" />
          <div className="phon-row">
            <p>1900 - 888</p> 
             <h5>24/7 Support Center</h5>
          </div>
      </div>

      <button className='menu' onClick={() => sitToggli(!toogli)}>
      <IoMenuOutline />
      </button>

    </div>
    <div className="right"></div>
  
     </header>
    </>
  )
}

export default Navbar