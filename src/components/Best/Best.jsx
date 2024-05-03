import React from 'react';
import './Best.css'
import rasm1 from '../../assets/img/icon1.png'
import rasm2 from '../../assets/img/icon2.png'
import rasm3 from '../../assets/img/icon3.png'
import rasm4 from '../../assets/img/icon4.png'
import rasm5 from '../../assets/img/icon5.png'

const data = [
    {
        id:1,
        img:rasm1,
        h1:'Best prices & offers',
        p:'Orders $50 or more'
    },
    {
        id:2,
        img:rasm2,
        h1:'Free delivery',
        p:'24/7 amazing services'
    },
    {
        id:1,
        img:rasm3,
        h1:'Great daily deal',
        p:'When you sign up'
    },
    {
        id:1,
        img:rasm4,
        h1:'Wide assortment',
        p:'Mega Discounts'
    },
    {
        id:1,
        img:rasm5,
        h1:'Easy returns',
        p:'Within 30 days'
    },
]

let links = data?.map((el) =>(
    <div className="Best-row "key={el}>
    <div className="Best-alt" >
    <div className="Best-wil">
           <img src={el.img} alt="" />
       </div>
       <div className="Best-wil">
       <h1>{el.h1}</h1>
          <p>{el.p}</p>
       </div>
       </div>
    </div>
))
const Best = () => {
    return (
        <div>
            <section>
                <div className="containe">
                    <div className="Best-all">
                        
                       {links}
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Best;
