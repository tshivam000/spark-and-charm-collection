import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <>
      <div className='homeCatSlider py-4'>
        <div className='container'>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/dress.png' alt="Fashion" />
            <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/electronic.png' alt="Electronics" />
            <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/bag.png' alt="Bags" />
            <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/shoe.png' alt="Footwear" />
            <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/Groceries.png' alt="Groceries" />
            <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/Beauty.png' alt="Beauty" />
            <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/Wellness.png' alt="Wellness" />
            <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
          </div>
          </Link>
        </SwiperSlide>
                <SwiperSlide>
          <Link to={'/'} >
          <div className='item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col'>
            <img className='w-[60px] transition-all' src='./images/Jewellery.png' alt="Jwellery" />
            <h3 className='text-[15px] font-[500] mt-3'>Jewellery</h3>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
        </div>

      </div>
    </>
  )
}

export default HomeCatSlider
