import React, {useState} from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { TbTruckDelivery } from "react-icons/tb";
import AddBannerSlider from '../../components/AddBannerSlider';
import ProductSlider from '../../components/ProductSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeSliderV2 from '../../components/HomeSliderV2';


const Home = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <section className='py-6'>
        <div className='container flex items-center'>
          <div className='part1 w-[75%]'>
            <HomeSliderV2 />
          </div>
        </div>
      </section>
      <HomeCatSlider />
      <section className='bg-white py-8 '>
        <div className='container'>
          <div className="flex items-center justify-between">
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px]'>Do not miss the current offers until the end of March.</p>
            </div>
            <div className='rightSec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>
          <ProductSlider items={5}/>
        </div>
      </section>
      <section className='py-1 bg-white'>
        <div className='container'>
          <div className='freeShipping rounded-md w-[80%] m-auto p-4 border-2 border-[#ff5252] flex items-center justify-between mb-7' >
            <div className='col1 flex items-center gap-4'>
            <TbTruckDelivery className='text-[50px]'/>
            <span className='text-[20px] font-[500] uppercase'>Free Shipping</span>
            </div>
            <div className='col2'>
              <p className='mb-0 font-[500]'>Free Delivery on Your First Orders and over Rs.500</p>
            </div>
            <p className='text-[25px]  font-[700] '>- Only Rs.500</p>
         </div>
         <AddBannerSlider items={4}/>
        </div>
        </section>

      <section className='py-3 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Latest Products</h2>
          <ProductSlider items={5}/>
          <AddBannerSlider items={3}/>
        </div>
      </section>

      <section className='py-3 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>
          <ProductSlider items={5}/>
          <AddBannerSlider items={3}/>
        </div>
      </section>
      <section className='py-3 pb-8 bg-white blogSection'>
        <div className='container'>
        <h2 className='text-[20px] font-[600] mb-4'>From The Blog</h2>

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem/>
        </SwiperSlide>
        <SwiperSlide>
          <BlogItem/>
        </SwiperSlide>
        </Swiper>
        </div>
      </section>

    </>
  )
}
export default Home
