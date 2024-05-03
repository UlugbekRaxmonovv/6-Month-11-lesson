import React, {useState, useEffect} from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';
import './Home.css'
import { useFetch } from '../../components/Hook/useFetch';
import Main from '../../components/Main/Main'
import Stay from '../../components/Stay/Stay';
import Best from '../../components/Best/Best';
import Footer from '../../components/Footer/Footer';

function Home() {
  const {data,loading} = useFetch('/products')


 
  return (
  <>
        <Banner />
    <div className='home  container'>
     <Main/>



        <Products 
        loading={loading} 
        data={data?.data?.products}/>    

        <Stay/> 
       
       <Best/>
       <Footer/>
    </div>
  </>
  )
}

export default Home