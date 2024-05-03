import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from '../../api'
import { toast } from 'react-toastify'
import rasm1 from '../../assets/img/rasm.png'
import Footer from '../../components/Footer/Footer'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState("yraigatt3")
  const [password, setPassword] = useState("sRQxjPfdS")
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleLogin = (event)=>{
    event.preventDefault()
    setLoading(true)
    let user = {
      username,
      password
    }
    axios
      .post( "/auth/login", user )
      .then(res => {
        console.log("res>>>", res.data.token)
        localStorage.setItem("x-auth-token", res.data.token)
        navigate("/admin")
        toast.success('Marhamat')
      })
      .catch(err => {
        console.log("err>>>" , err)
        toast.error('Parol yoki login xato!!!...')
      
      })
      .finally(()=> setLoading(false))

  }
  return (
   <>
    
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

    <form  style={{marginTop:'150px'}}  onSubmit={handleLogin} className='login'>
     <div className="input-rw">
     <div className="img-row">
   <img src={rasm1} alt="" />
     </div>
      <div className="column-form">
      <p>Email Address*</p>
      <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <p className='box'>Password*</p>
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" />

     <div className="input-list">
      <div className="input-kol">
     <div className="ikonLink">
     </div>
      </div>
      <div className="input-kol">
        <p>Remember Me</p>
      </div>
      <div className="input-koll">
        <p>Forgot Password?</p>
      </div>

     </div>
   
      <div className="btn">
      <div className="btn1">
      <button disabled={loading} type='submit'>{loading ? "Loading..." : "Login"}</button>
        </div>
        <div className="btn11">
      <button type='button' onClick={()=> navigate(-1)}>Signup?</button>
        </div>
      </div>
      </div>
     </div>
    </form>

<Footer/>
    
   </>
  )
}

export default Login