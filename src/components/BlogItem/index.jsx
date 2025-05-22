import React from 'react'
import { IoIosArrowForward, IoMdTime } from 'react-icons/io'
import { Link } from 'react-router-dom'

const BlogItem = () => {
  return (
    <div className='blogItem group'>
      <div className='imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative'> 
        <img src='./images/BannerSlider4.webp' alt="Blog" className='w-full
         transition-all group-hover:scale-105 group-hover:rotate-1'/>
        <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50
         bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
            <IoMdTime className='text-[16px] mr-1'/>
            22 May, 20225
         </span>
      </div>
      <div className='info py-4'>
        <h2 className='text-[18px] font-[600]'>
            <Link to={'/'} className='link'>Lorem ipsum dolor sit amet consectetur</Link>
        </h2>
        <p className='text-[14px] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <Link className='link text-[14px] font-[500] flex items-center gap-1'>
        Read More <IoIosArrowForward/></Link>
      </div>
      
    </div>
  )
}

export default BlogItem
