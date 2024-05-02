import React, {useState, useEffect} from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';
import './Home.css'
import { useFetch } from '../../components/Hook/useFetch';

function Home() {

  const [count,setCount] = useState(1)
  const [category,setCategory] = useState('all')

  const {data:categories} = useFetch('/products/categories')
  const {data,loading} = useFetch(`/products/category/${category}`,category)


 
  return (
  <>
        <Banner />
    <div className='home  container'>

        <Products loading={loading} data={data?.data?.products}/>     
    </div>
  </>
  )
}

export default Home