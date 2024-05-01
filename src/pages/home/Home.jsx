import React, {useState, useEffect} from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';
import './Home.css'
import { useFetch } from '../../components/Hook/useFetch';

function Home() {

  const [count,setCount] = useState(1)
  const [category,setCategory] = useState('all')

  const {data:categories} = useFetch('/products/categories')
  const {data,loading} = useFetch(`/products/category/${category}?limit=${count * 4}`, count,category)

 let javob = categories?.data?.map((el,inx) =>(
  <option key={inx} value={el}>{el}</option>

 ))

 
  return (
  <>
        <Banner />
    <div className='home  container'>

    <select value={category}
          onChange={e => setCategory(e.target.value)}
           name="" id="">
        <option value="all">all</option>
        {javob}
      </select>
        <Products loading={loading} data={data?.data?.products}/>     
        <div className="btn">
          <div className="btn1">
            <button onClick={() => setCount( p => p + 1)}>Learn more</button>
          </div>
        </div>
    </div>
  </>
  )
}

export default Home