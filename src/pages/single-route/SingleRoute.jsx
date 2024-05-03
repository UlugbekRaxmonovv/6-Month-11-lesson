import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../../api'
import './SingleRoute.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { VscRemote } from "react-icons/vsc";
import rasm1 from '../../assets/img/kati.png'
import rasm2 from '../../assets/img/son.png'
import rasm3 from '../../assets/img/foiz.png'
import rasm4 from '../../assets/img/ww.png'
import rasm5 from '../../assets/img/nout.jpg'
import rasm6 from '../../assets/img/kol.png'
import rasm7 from '../../assets/img/kol1.png'
import rasm8 from '../../assets/img/kol2.png'
import Footer from '../../components/Footer/Footer'
import Stay from '../../components/Stay/Stay';

const SingleRoute = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading,setLoading] = useState(false)

    const[count,setCount] = useState(0)
    const onclick = () =>{
      setCount(count + 1)
    }
    const go = () =>{
      setCount(count - 1)
    }

    useEffect(()=>{
      setLoading(true)
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
            .finally(()=>setLoading(false))
    },[])

  

  return (
    
    <div>
      {
        loading ?  
        <div className="card-katalog container">
        <div className="card-katalog-link">
          </div>
          <div className="card-katalog-link-row">
          </div>
          <div className="card-katalog-link-row-list">
          <div className="loadir"></div>
          <div className="loadir"></div>
          <div className="loadir"></div>
          <div className="loadir"></div>
        </div>

        <div className="card-katalog-link-all"></div>
        <div className="card-katalog-link-al1"></div>
        </div>
        : <></>
      }
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

<div className="SingleRout-all">
<p> Seeds of Change Organic</p>
</div>
      </div>
     
     </div>
     <div className="right"></div>

     <div className="SingleRout-row container ">
      
      <div className="SingleRout-alt">
      <CiSearch />
        <div className="imgagi">
        <img src={product?.thumbnail} alt="" />
        </div>
        <div className="SingleRout-bottom">
        <div className="SingleRout-top">
            <img src={product?.images[0]}alt="" />
          </div>
          <div className="SingleRout-top">
            <img src={product?.images[1]}alt="" />
          </div>
          <div className="SingleRout-top">
            <img src={product?.images[2]}alt="" />
          </div>
          <div className="SingleRout-top">
            <img src={product?.images[3]}alt="" />
          </div>
        </div>

      


      </div>
      <div className="SingleRout-alt1">
        <div className="button-all">
          <button>Sale Off</button>
          </div>  
          <h1>{product?.description}</h1>
<div className="yulduz">
<div className="yulduz-all">
<FaStarHalfAlt />
<FaStarHalfAlt />
<FaStarHalfAlt />

</div>
<div className="yulduz-all">
<p>(32 reviews)</p>

</div>
</div>
<div className="price">
<div className="price-all">
  <h1>{product?.price}</h1>
</div>
<div className="price-all">
  <span>26% Off</span>
  <p>$52</p>
</div>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
odio minus dolore impedit fuga eum eligendi.</p>

<div className="sizi">
<div className="sizi-all1">
    <p>Size / Weight:</p>
  </div>
  <div className="sizi-all">
    <p>50g</p>
  </div>
  <div className="sizi-all">
    <p>60g</p>
  </div>
  <div className="sizi-all">
    <p>80g</p>
  </div>
  <div className="sizi-all">
    <p>100g</p>
  </div>
  <div className="sizi-all">
    <p>150g</p>
  </div>
</div>


<div className="column">
<div className="span-link">
<div className="span-son">
     <span>{count}</span>
  </div>
 <div className="span-btn">
 <div className="span-son">
    <button onClick={onclick}><VscChevronUp /></button>
  </div>
  <div className="span-son">
     <button disabled={count <= 0} onClick={go}><VscChevronDown /></button>
  </div>
 </div>
</div>
<div className="kart">
<div className="kart-all">
  <IoCartOutline />
  </div>
  <div className="kart-all">
  <p>Add to cart</p>
  </div>
</div>

<div className="layk">
<GiSelfLove />
</div>
<div className="layk">
<VscRemote />
</div>
</div>

<div className="text">
<div className="text-all">
    <p>Type: <span>Organic</span></p>
    <p>MFG: <span>Jun 4.2022</span></p>
    <p>LIFE: <span>70 days</span></p>
  </div>
  <div className="text-all">
    <p>SKU:  <span>FWM15VKT</span></p>
    <p>Tags: <span>Snack, Organic, Brown </span></p>
    <p>Stock:<span>8 Items In Stock</span></p>
  </div>
</div>

      </div>
      <div className="SingleRout-alt1">
        <div className="hammasi-row">
        <div className="qiymat">
      <div className="qiymat-all">
      <h1>Category</h1>
      </div>
      <div className="padd">
      <div className="padding">
      <div className="padding-all">
 <img src={rasm1} alt="" />
</div>
<div className="padding-all">
 <p>Clothing</p>
</div>
<div className="padding-all">
 <img src={rasm2} alt="" />
</div>
      </div>
      <div className="padding">
      <div className="padding-all">
 <img src={rasm1} alt="" />
</div>
<div className="padding-all">
 <p>Clothing</p>
</div>
<div className="padding-all">
 <img src={rasm2} alt="" />
</div>
      </div>
      <div className="padding">
      <div className="padding-all">
 <img src={rasm1} alt="" />
</div>
<div className="padding-all">
 <p>Clothing</p>
</div>
<div className="padding-all">
 <img src={rasm2} alt="" />
</div>
      </div>
      <div className="padding">
      <div className="padding-all">
 <img src={rasm1} alt="" />
</div>
<div className="padding-all">
 <p>Clothing</p>
</div>
<div className="padding-all">
 <img src={rasm2} alt="" />
</div>
      </div>
      <div className="padding">
      <div className="padding-all">
 <img src={rasm1} alt="" />
</div>
<div className="padding-all">
 <p>Clothing</p>
</div>
<div className="padding-all">
 <img src={rasm2} alt="" />
</div>
      </div>
      </div>
      
     </div>

     <div className="qiymat">
      <div className="qiymat-alla">
      <h1>Fill by price</h1>
      </div>
      <div className="par">
        <img src={rasm3} alt="" />
      </div>
      <div className="tig">
      <div className="tig">
          <p>From: <span>$500</span></p>
        </div>
        <div className="tig">
          <p>To: <span>$1,000</span></p>
        </div>
      </div>
      <p>Color</p>
      <div className="turt">
      <div className="tur-all">
        </div>
        <div className="tur-all1">
          <p>Green (78)</p>
        </div>
      </div>
      <div className="turt">
      <div className="tur-all">
        </div>
        <div className="tur-all1">
          <p>Red (56)</p>
        </div>
      </div>
      <div className="turt">
      <div className="tur-all">
        </div>
        <div className="tur-all1">
          <p>Blue (54)</p>
        </div>
      </div>

      <h4>Item Condition</h4>
      <div className="turt">
      <div className="tur-all">
        </div>
        <div className="tur-all1">
          <p>Refurbished (27)</p>
        </div>
      </div>
      <div className="btn-button">
      <div className="btn-row">
    <img src={rasm4} alt="" />
        </div>
        <div className="btn-row">
        <button> Fillter</button>
        </div>
      </div>
      <div className="igm">
        <img src={rasm5} alt="" />
      </div>
      
      
     </div>

     <div className="qiymat">
      <div className="qiymat-alll">
      <h1>New products</h1>
      </div>
     <div className="bannir">
     <div className="bannir-all">
        <img src={rasm6} alt="" />
      </div>
      <div className="bannir-all">
      <p>Chen Cardigan</p>
      <span>$99.50</span> <br />
      <FaStarHalfAlt />
      </div>
     </div>
      
     <div className="bannir">
     <div className="bannir-all">
        <img src={rasm7} alt="" />
      </div>
      <div className="bannir-all">
      <p>Chen Cardigan</p>
      <span>$99.50</span> <br />
      <FaStarHalfAlt />
      </div>
     </div>
     <div className="bannir">
     <div className="bannir-all">
        <img src={rasm8} alt="" />
      </div>
      <div className="bannir-all">
      <p>Chen Cardigan</p>
      <span>$99.50</span> <br />
      <FaStarHalfAlt />
      </div>
     </div>
     </div>
        </div>
    
      </div>
      <div className="list-nav-bottom">
          <div className="nav-aLink">
          <div className="navbar-shirin">
               <a href="" className="">Description</a>
            </div>
            <div className="navbar-shirin">
               <a href="" className="">Additional info</a>
            </div>
            <div className="navbar-shirin">
               <a href="" className="">Vendor</a>
            </div>
            <div className="navbar-shirin">
               <a href="" className="">Reviews (3)</a>
            </div>
          </div>
          <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
mastodon goodness gnashed a jellyfish and one however because.</p>

<div className="chiziq">
  <div className="chiziq-all">
    <div className="chiziq-row"></div>
  </div>
  <div className="chiziq-all">
    <p>Type Of Packing</p>
  </div>
  <div className="chiziq-alll">
    <p>Bottle</p>
  </div>
</div>

  <div className="logo">
  <div className="chiziq-all">
    <div className="chiziq-row"></div>
  </div>
  <div className="chiziq-all">
    <p>Quantity Per Case</p>
  </div>
  <div className="chiziq-alll">
    <p>100ml</p>
  </div>
  </div>
  <div className="logo">
  <div className="chiziq-all">
    <div className="chiziq-row"></div>
  </div>
  <div className="chiziq-all">
    <p>Ethyl Alcohol</p>
  </div>
  <div className="chiziq-alll">
    <p>70%</p>
  </div>
  </div>

  <div className="logo">
  <div className="chiziq-all">
    <div className="chiziq-row"></div>
  </div>
  <div className="chiziq-all">
    <p>Piece In One</p>
  </div>
  <div className="chiziq-alll">
    <p>Carton</p>
  </div>
  </div>

  <div className="chiz"></div>


<div className="p-tig">
<p >Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
limpet.</p>
</div>

<h1 className='h1'>Packaging & Delivery</h1>
<div className="chiz"></div>
<div className="p-tig">
<p >Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
limpet.Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
limpet.Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective
limpet.</p>
</div>

<h1 className='h1'>Suggested Use</h1>
<div className="p5">
<p>Refrigeration not necessary.</p>
<p>Stir before serving</p>
</div>


<h1 className='h1'> Other Ingredients</h1>
<div className="p6">
<p>Organic raw pecans, organic raw cashews.</p>
<p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
<p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
</div>
<h1 className='h1'>Warnings</h1>
<div className="p6">
  <p>Oil separation occurs naturally. May contain pieces of shell.</p>
</div>
        </div>
     </div>
    <Stay/>
    <Footer/>
    </div>
  )
}

export default SingleRoute



{/* <div className="all1">
<img src={product?.images[0]} alt="" />
<h2>{product?.title}</h2>
<p>{product?.description}</p>
</div> */}