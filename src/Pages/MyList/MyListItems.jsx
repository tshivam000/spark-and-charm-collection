import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

function MyListItems() {

  return (
    <>
    <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]'>
    <div className='img w-[15%] rounded-md overflow-hidden'>
        <Link to={'/product/3443'} className='group'>
        <img className='w-full group-hover:scale-105 transition-all' src='./images/Saree.webp' alt="saree" />
        </Link>
    </div>
    <div className='info w-[85%] relative'>
        <IoCloseSharp className='link transition-all cursor-pointer absolute top-[0px] right-[0px] text-[22px]'/>
        <span className='text-[13px]'>Brand Name</span>
        <h3 className='text-[15px]'>
            <Link className='link'>Product Name</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly/>

        <div className='flex items-center gap-4 mt-3 mb-3'>
            <span className='price text-primary !text-[black] text-[14px] font-[600]'>Rs. 1,499</span>
            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rs. 1,999</span>
            <span className='price text-primary text-[14px] font-[600]'>20% OFF</span>
        </div>

        <Button className='btn-org btn-sm'>Add to Cart</Button>
    </div>
    </div>
    </>
  )
}

export default MyListItems
