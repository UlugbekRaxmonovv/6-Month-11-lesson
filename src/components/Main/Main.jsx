import React from 'react';
import './Main.css'
import rasm1 from '../../assets/img/link1.png'
import rasm2 from '../../assets/img/link2.png'
import rasm3 from '../../assets/img/link3.png'
import rasm4 from '../../assets/img/link4.png'
import rasm5 from '../../assets/img/link5.png'
import rasm6 from '../../assets/img/link6.png'
import rasm7 from '../../assets/img/link7.png'
import rasm8 from '../../assets/img/link8.png'

const data =[
    {
        id:1,
        img:rasm1,
        h1:'Cake & Milk',
        p:'26 items'
    },
    {
        id:2,
        img:rasm2,
        h1:'Oganic Kiwi',
        p:'26 items'
    },
    {
        id:3,
        img:rasm3,
        h1:'Peach',
        p:'14 items'
    },
    {
        id:4,
        img:rasm4,
        h1:'Red Apple',
        p:'54 items'
    },
    {
        id:5,
        img:rasm5,
        h1:'Red Apple',
        p:'54 items'
    },
    {
        id:6,
        img:rasm6,
        h1:'Snack',
        p:'54 items'
    },
    {
        id:7,
        img:rasm7,
        h1:'Vegetables',
        p:'36 items'
    },
    {
        id:8,
        img:rasm8,
        h1:'Strawberry',
        p:'54 items'
    },
    {
        id:9,
        img:rasm1,
        h1:'Cake & Milk',
        p:'26 items'
    },
    {
        id:4,
        img:rasm4,
        h1:'Red Apple',
        p:'54 items'
    },

]


let links = data?.map((el) =>(
<div className="data-link" key={el}>
                       <div className="data-nav">
                        <img src={el.img} alt="" />
                        </div>   
                        <h1>{el.h1}</h1>
                        <p>{el.p}</p>
                       
                    </div>
))
const Main = () => {
    return (
        <div>
        <section>
            <div className=" container">
                <div className="card-link">
                <div className="card-row">
                        <h1>Featured Categories</h1>
                    </div>
                  <div className="card-all">
                  <div className="card-row">
                  <a href="#" className="">Cake & Milk</a>
                    </div>
                    <div className="card-row">
                    <a href="#" className="">Coffes & Teas</a>
                        
                    </div>
                    <div className="card-row">
                    <a href="#" className="">Pet Foods</a>
                    </div>
                    <div className="card-row">
                    <a href="#" className="">Vegetables</a>
                        
                    </div>
                  </div>
                </div>

                <div className="data">
                    {links}
                </div>
                <div className="hammasi">
                <div className="hammasi-all">
                     <div className="hammasi-row1">
                     <h1>Everyday Fresh &
                      Clean with Our
                     Products</h1>
                     <button>Shop Now</button>
                     </div>
                    </div>

                    <div className="hammasi-all-1">
                     <div className="hammasi-row1">
                     <h1>Everyday Fresh &
                      Clean with Our
                     Products</h1>
                     <button>Shop Now</button>
                     </div>
                    </div>

                    <div className="hammasi-all-2">
                     <div className="hammasi-row1">
                     <h1>Everyday Fresh &
                      Clean with Our
                     Products</h1>
                     <button>Shop Now</button>
                     </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Main;
