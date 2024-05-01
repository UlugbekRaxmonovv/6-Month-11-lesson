import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='banner'>
    <Swiper 
        loop={true} 
        navigation={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="banner__swiper">
        <SwiperSlide className='banner__item'>
           <img src="https://vodiy24.uz/frontend/web/uploads/November2020/photo_2020-10-31_16-12-14.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
       <img src="https://storage.kun.uz/source/9/mfKr-MTORlDhIZ3Fir2MhvEuZSx5z2m1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
           <img src="https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2F205b7a6cde0b9abe5351c113f25502c0d169ac3f_original.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='banner__item'>
           <img src="https://images.uzum.uz/ck6rp2kjvf2h3ge4hle0/original.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner