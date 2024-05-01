import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api'
import './SingleRoute.css'

const SingleRoute = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
    },[])

    if(!product){
        return <h2>Loading...</h2>
    }

  return (
    <div>
     <div className="all container">
    <div className="all1">
        <img src={product?.images[0]} alt="" />
    <h2>{product?.title}</h2>
    <p>{product?.description}</p>
    </div>
     </div>
    </div>
  )
}

export default SingleRoute