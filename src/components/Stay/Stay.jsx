import React from 'react';
import './Stay.css'
import rasm1 from '../../assets/img/ban4.png'
import { PiTelegramLogo } from "react-icons/pi";

const Stay = () => {
    return (
        <div>
            <section className='Stay'>
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
                 <img src={rasm1} alt="" />
                </div>
               </div>
                </div>
            </section>
        </div>
    );
}

export default Stay;
