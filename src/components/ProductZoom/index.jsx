import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex]=useState(0);
  const zoomSlideBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) =>{
    setSlideIndex(index)
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSlideBig.current.swiper.slideTo(index);
  }

  return (
    <div className='flex gap-3'>
      <div className="slider w-[15%]">
        <Swiper
        ref={zoomSliderSml}
        direction={'vertical'}
        navigation={true}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation]}
        className="zoomProductSliderThumbs h-[500px] overflow-hidden rounded-md"
        >
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(0) }>
            <img src="../public/images/saree.webp" alt='Saree' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(1) }>
            <img src="../images/saree-hover.webp" alt='Groceries' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(2) }>
            <img src="../public/images/saree.webp" alt='Saree' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(3) }>
            <img src="../public/images/saree-hover.webp" alt='Groceries' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(4) }>
            <img src="../public/images/saree.webp" alt='Saree' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ? 'opacity-1':'opacity-50'}`} onClick={()=> goto(5) }>
            <img src="../public/images/saree-hover.webp" alt='Groceries' className='w-full transition-all group-hover:scale-105' />
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      <div className='zoomContainer w-[85%] h-[500px] overflow-hidden'>
        <Swiper
        ref={zoomSlideBig}
        navigation={false}
        slidesPerView={1}
        spaceBetween={0}
        >
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree-hover.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree-hover.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree.webp'} />
        </SwiperSlide>
        <SwiperSlide>
          <InnerImageZoom zoomType='hover' zoomScale={1} src={'../public/images/saree-hover.webp'} />
        </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  )
}

export default ProductZoom
