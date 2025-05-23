import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';

const AddsBannerSliderV2 = (props) => {
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
        <BannerBoxV2 info='left' image={'./images/iphone13.jpg'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBoxV2 info='left' image={'./images/iphone13.jpg'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBoxV2 info='left' image={'./images/iphone13.jpg'} link={'/'} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerBoxV2 info='left' image={'./images/iphone13.jpg'} link={'/'} />
      </SwiperSlide>
        <SwiperSlide>
        <BannerBoxV2 info='left' image={'./images/iphone13.jpg'} link={'/'} />
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AddsBannerSliderV2
