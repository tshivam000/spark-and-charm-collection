import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';

const HomeSliderV2 = () => {
  return (
    <div>
        <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className='item w-full rounded-md overflow-hidden'>
            <img className='w-full' src="./images/womendress.jpg" />
            <div className='info absolute top-0 -right-[100%] w-[50%] h-[100%] z-50 flex items-center flex-col opacity-0 justify-center transition-all duration-500'>
                <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 transition-all'>
                    Big Saving Days Sale
                </h4>
                <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0 transition-all '>
                    Women Solid Round Yellow T-Shirt
                </h2>
                <h3 className='flex items-center gap-3  text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0 transition-all'>
                    Starting At Only <span className='text-primary text-[30px] font-[700]'>
                    Rs.499
                    </span>
                </h3>
                <div className='btn-wrap w-full relative -right-[100%] opacity-0 transition-all '>
                    <Button className='btn-org'>SHOP NOW</Button>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item w-full rounded-md overflow-hidden'>
            <img className='w-full' src="./images/iphone.jpg" />
            <div className='info absolute top-0 -right-[100%] w-[50%] h-[100%] z-50 flex items-center flex-col opacity-0 justify-center transition-all duration-500'>
                <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0 transition-all'>
                    Big Saving Days Sale
                </h4>
                <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0 transition-all '>
                    Iphone 16 Pro
                </h2>
                <h3 className='flex items-center gap-3  text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0 transition-all'>
                    Starting At Only <span className='text-primary text-[30px] font-[700]'>
                    Rs.42000
                    </span>
                </h3>
                <div className='btn-wrap w-full relative -right-[100%] opacity-0 transition-all '>
                    <Button className='btn-org'>SHOP NOW</Button>
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default HomeSliderV2
