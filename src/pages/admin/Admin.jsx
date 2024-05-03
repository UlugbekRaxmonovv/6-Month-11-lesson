import React from 'react'
import "./Admin.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import rasm1 from '../../assets/img/map.png'
import rasm2 from '../../assets/img/piopli.png'
import Footer from '../../components/Footer/Footer'
import { PiTelegramLogo } from "react-icons/pi";
import rasm3 from '../../assets/img/kapusta.png'
import Confetti from 'react-confetti';



const Shop = [
  {
    id:1,
    h1:'Office',
    p:'205 North Michigan Avenue, Suite 81 Chicago, 60601, USAPhone: (123) 456-789 contact@Evara.com',
    btn:'View map'
  },
  {
    id:2,
    h1:'Studio',
    p:'205 North Michigan Avenue, Suite 81 Chicago, 60601, USAPhone: (123) 456-789 contact@Evara.com',
    btn:'View map'
  },
  {
    id:3,
    h1:'Shop',
    p:'205 North Michigan Avenue, Suite 81 Chicago, 60601, USAPhone: (123) 456-789 contact@Evara.com',
    btn:'View map'
  },
]
let links = Shop?.map((inx) =>(
<div className="column-list-all" key={inx}>
      <div className="column-list-all-row">
        <h1>{inx.h1}</h1>
        <p>{inx.p}</p>
        <button>{inx.btn}</button>
      </div>
    </div>
))
const Admin = () => {
  return (
    <>
<Confetti 
numberOfPieces={500}/>

    <div className="all container">
      <div className="SingleRout">
      <div className="SingleRout-all">
<FaHome />
</div>
<div className="SingleRout-all">
<Link to={'/'}>Home </Link>
</div>
<div className="SingleRout-all">
<MdOutlineKeyboardArrowRight />
</div>

<div className="SingleRout-all">
 <a href="" className="">Product</a>
</div>
<div className="SingleRout-all">
<MdOutlineKeyboardArrowRight />
</div>

      </div>
     
     </div>
     <div className="right"></div>
    
   <div className="container">
   
   <div className="admin-all">
       
       <div className="admin-row">
       <div className="h2">
    <h2>How can help you ?</h2>
    </div>
          <h1>Admin panel</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  <div className="nav-p">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  </div>
        </div>
        <div className="admin-row">
         <h4>01. Visit Feedback</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  <h5>01. Visit Feedback</h5>
  <div className="nav-p">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  </div>
        </div>
  
        <div className="admin-row">
         <h4>02. Employer Services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  <h3>04.General Inquiries</h3>
  <div className="nav-p">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
  leo.</p>
  </div>
        </div>
       </div>


       <div className="map">
       <img src={rasm1} alt="" />
       </div>

   <div className="column-list">

        {links}

   </div>

  <div className="hammasi-sor">
  <div className="sorch-all">
  <h4>Contact form</h4>
  <h1>Drop Us a Line</h1>
  <p>Your email address will not be published. Required fields are marked *</p>
</div>
  <div className="sorch-row">

<div className="sorch-row-all">
 <div className="sorch-row-input">
<input type="text"  placeholder='First Name'/>
</div>
<div className="sorch-row-input">
<input type="text"  placeholder='Your Email'/>
</div>
<div className="all1">
<div className="sorch-row-all">
<div className="sorch-row-input">
<input type="text"  placeholder='Your Phone'/>
</div>
<div className="sorch-row-input">
<input type="text"  placeholder='Subject'/>
</div>
<textarea name="" id="" cols="150" rows="10"></textarea>
 </div>
 

</div>
   </div>
   <img src={rasm2} alt="" />
  </div>

  </div>
  </div>


  <section className='Staya'>
                <div className="container">
               <div className="Stay-all">
               <div className="Stay-row">
                 <h1>Stay home & get your daily
needs from our shop</h1>
<p>Start You'r Daily Shopping with Nest Mart</p>
 <div className="alt">
 <div className="btn-link">
 <div className="alt-row">
    <PiTelegramLogo />
    </div>
    <div className="alt-row">
    <input type="text" placeholder='Your emaill address' />
    </div>
 </div>
 <button>Subscribe</button>
 </div>
                </div>
                <div className="Stay-row">
                 <img src={rasm3} alt="" />
                </div>
               </div>
                </div>
            </section>


  <Footer/>
     </>
  )
}

export default Admin
