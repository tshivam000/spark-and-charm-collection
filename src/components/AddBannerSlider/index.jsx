import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AddBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
        <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
      <SwiperSlide>
        <BannerBox img={'./images/BannerSlider1.webp'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBox img={'./images/BannerSlider2.webp'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBox img={'./images/BannerSlider3.webp'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBox img={'./images/BannerSlider4.webp'} link={'/'} />
      </SwiperSlide>
        <SwiperSlide>
        <BannerBox img={'./images/BannerSlider5.jpg'} link={'/'} />
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AddBannerSlider
