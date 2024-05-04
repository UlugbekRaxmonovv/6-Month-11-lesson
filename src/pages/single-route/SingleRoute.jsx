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
    const [error,setError] =useState(null)

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
            .catch(res => setError(res))
            .finally(()=>setLoading(false))
    },[])

    if(error)
{
  return <div className="container">
    <div className="oll" style={{textAlign:'center',padding:'50px'}}>
    <h1 style={{fontSize:'40px', marginTop:' -2%'}}>Mahsulot</h1>
    <img style={{marginTop:'30px'}} width={300} src="data:image/png;base64,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" alt="" />
    </div>
  </div>
}
  

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