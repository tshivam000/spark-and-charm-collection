import { Button } from '@mui/material'
import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CartPanel = () => {
  return (
    <>
        <div className='scroll w-full max-h-[300px overflow-y-scroll overflow-x-hidden] py-3 px-4'>
          <div className='cartItem w-full flex items-center gap-4  pb-4'>
            <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
            <Link to={'/product/232323'} className='block group'>
              <img src="./images/Saree.webp" alt="saree" className='w-full transition group-hover:scale-105'/>
              </Link>
            </div>
            <div className='info w-[75%] pr-5 relative'>
              <h4 className='text-[16px] font-[500]'>
                <Link to={'/product/232323'} className='link transition-all'>
                Product Title
                </Link>
              </h4>
              <p className='flex items-center gap-5 mt-2 mb-2'>
                <span>Qty : <span>2</span></span>
                <span className='text-primary font-bold'>Price : Rs.500</span>
              </p>
              <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px]
              cursor-pointer text-[20px] link transition-all'/>
            </div>
          </div>
        </div>
        <div className='bottomSec absolute bottom-[10px] left-[0px] w-full'>
        <div className='bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] items-center justify-between'>
            <div className='flex items-center justify-between w-full'>
                <span className='text-[14px] font-[600]'>1 item </span>
                <span className='text-primary font-bold'>Rs. 500</span>
            </div>
            <div className='flex items-center justify-between w-full'>
                <span className='text-[14px] font-[600]'>Shipping </span>
                <span className='text-primary font-bold'>Rs. 40</span>
            </div>
        </div>
        <div className='bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] items-center justify-between'>
            <div className='flex items-center justify-between w-full'>
                <span className='text-[14px] font-[600]'>Total (tax excel.) </span>
                <span className='text-primary font-bold'>Rs. 540</span>
            </div>
            <div className='flex items-center justify-between w-full mt-4 gap-5'>
                <Link to={'/cart'} className='w-[50%] d-block'><Button className='w-full btn-org btn-md '>View Cart</Button></Link>
                <Link to={'/checkout'} className='w-[50%] d-block'><Button className='w-full btn-org btn-border btn-md '>CheckOut</Button></Link>
            </div>
        </div>
        </div>
    </>
  )
}

export default CartPanel
