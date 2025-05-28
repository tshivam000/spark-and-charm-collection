import React, { useState } from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtyBox from '../../components/QtyBox';

function ProductDetailsComponent() {
    const [ProductActionIndex,setProductActionIndex] = useState(null)
    
  return (
    <div>
        <h1 className='text-[25px] font-[600] mb-1'>Product Name</h1>
        <div className='flex items-center gap-3'>
            <span className='text-zinc-400 text-[13px]'>Brands : 
                <span className='font-[500] text-black'> Brand Name</span>
            </span>
            <Rating name='size-small' defaultValue={4} size='small' readOnly />
            <span className='text-[13px] cursor-pointer'>Review (5)</span>
        </div>
        <div className='flex items-center gap-4 mt-6'>
            <span className='oldPrice line-through text-zinc-500 text-[20px] font-[500]'>Rs. 1,999</span>
            <span className='price text-primary font-[600] text-[20px]'>Rs. 1,499</span>
            <span className='text-[14px]'>Avability In Stock <span className='text-green-600 text-[14px] font-[500]'>147 items</span></span>
        </div>

        <p className='mt-3 pr-10 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem enim eaque neque in nesciunt sequi aperiam, distinctio doloribus suscipit tempore
        doloremque ex atque ducimus possimus assumenda odit nemo rerum autem!</p>
        <div className='flex items-center gap-3'>
            <span className='text-[16px]'>Size:</span>
            <div className='flex items-center gap-1 actions'>
                <Button className={`${ProductActionIndex === 0 ? '!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(0)}>S</Button>
                <Button className={`${ProductActionIndex === 1 ? '!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(1)}>M</Button>
                <Button className={`${ProductActionIndex === 2 ? '!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(2)}>L</Button>
                <Button className={`${ProductActionIndex === 3 ? '!bg-primary !text-white':'' }`} onClick={()=>setProductActionIndex(3)}>Xl</Button>                       
            </div>
        </div>
        <p className="text-[14px] mt-4 mb-2 text-[#000]">Free Shipping (Est. Delivery Time 2-3 Days)</p>
        <div className="flex items-center mt-4 gap-4 py-4">
            <div className="qtyBoxWrapper w-[80px]">
                <QtyBox/>                      
            </div>
            <Button className='btn-org flex gap-2'>
                <MdOutlineShoppingCart className='text-[22px]'/>
                Add to Cart
            </Button>                   
        </div>
        <div className="flex items-center gap-4 mt-4">
            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                <FaRegHeart className='text-[18px]'/>Add to Wishlist
            </span>
            <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                <IoGitCompareOutline className='text-[18px]'/>Add to Compare
            </span>
        </div>
   
    </div>
  )
}

export default ProductDetailsComponent
