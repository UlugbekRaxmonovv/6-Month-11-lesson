import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import './Product.css'
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Products = ({data, loading}) => {
  let products = data?.map((el)=>
  <div className="card-list" key={el}>
          <div className="nav-link-all">
            <p>Hot</p>
          </div>
          <Link to={`/product/${el.id}`}>
     <img style={{maxWidth:'246px', width:'100%',height:'246px',padding:'50px'}} src={el.images[0]} alt="" />
          </Link>
          <div className="row-all">
            <p>{el.title}</p>
            <h1>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
            <div className="month">
            <div className="month-all">
              <FaStar />
              <FaStar />
              <FaStar />
              
              </div>
              <div className="month-all">
             <p>(4.0)</p> 
              </div>
            </div>
            <h4>By <span>NestFood</span></h4>
            <div className="praki">
            <div className="praki-a">
                <p>{el.price} <span>$32.8</span></p>
              </div>
              <div className="praki-a">
                <div className="button">
                <div className="button-all">
                  <IoCartOutline />
                  </div>
                  <div className="button-all">
                <p>Add</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
         )
  return (
    <>
        {loading ?  <Skeleton count={10}/> : <></>}
        <div className='wrapper'>
         {products}
          </div>
    </>
  )
}

export default Products



// let products = data?.map((el)=>
//      <div className='card' key={el.id}>
//     <Link to={`/product/${el.id}`}>
//       <img src={el.images[0]} width={300} alt="" />
//     </Link>
//     <h2>{el.title}</h2>
//     <button>Learn more</button>
//   </div>)