import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BannerBoxV2 = (props) => {
  return (
    <div className={` bannerBoxV2 w-full overflow-hidden rounded-md relative group`}>
      <img className='w-full transition-all duration-500 group-hover:scale-105' src={props.image} />
    <div className={`p-2 ${props.info === 'left'?'left-0':'right-0'} info absolute top-0 w-[55%] h-[100%] z-50 
    flex items-center justify-center flex-col ${props.info === 'right'?'':'pl-5'}`}>
        <h2 className='text-[18px] font-[600]'>Buy Men's Footwear with low price</h2>
        <span className='text-[20px] text-primary font-[600] w-full'>Rs.500</span>
        <div className=' w-full'>
         <Link to={'/'} className='text-[16px] font-[600] link'> Shop Now</Link>
        </div>
    </div>
    </div>
  )
}

export default BannerBoxV2
