import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
  <div className='homeSlider py-8 pt-0'>
    <div className='container'>
      <Swiper 
      spaceBetween={10}
      loop={true}
       navigation={true} 
       modules={[Autoplay, Navigation]}
       autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="sliderHome">
            <SwiperSlide>
                <div className='item rounded-[10px] overflow-hidden'>
                    <img src='./images/Slide1.jpg' alt="Slider 1" className='w-full ' />
                </div>
            </SwiperSlide>
              <SwiperSlide>
                <div className='item rounded-[10px] overflow-hidden'>
                    <img src='./images/Slide2.jpg' alt="Slider 2" className='w-full ' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item rounded-[10px] overflow-hidden'>
                    <img src='./images/Slide3.jpg' alt="Slider 3" className='w-full ' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item rounded-[10px] overflow-hidden'>
                    <img src='./images/Slide4.jpg' alt="Slider 4" className='w-full ' />
                </div>
            </SwiperSlide>
      </Swiper>
      </div>
    </div>
    </>
  )
}

export default HomeSlider



