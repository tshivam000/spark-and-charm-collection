import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';

function ProductDetails() {
    const [ProductActionIndex,setProductActionIndex] = useState(null)
  return (
    <>
    <div className='py-5'>
        <div className='container'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='link transition' underline="hover" color="inherit" href="/">
                Home
                </Link>
                <Link
                underline="hover"
                color="inherit"
                to="/"
                className='link transition !text-[14px]'
                >
                Fashion
                </Link>
                <Link
                underline="hover"
                color="inherit"
                className='link transition !text-[14px]'
                >
                Product Name
                </Link>
            </Breadcrumbs>
        </div>
    </div>
    <section className='bg-white py-5'>
        <div className='container flex gap-4'>
            <div className='prodeuctZoomContainer w-[40%] h-[500px] overflow-hidden'>
                <ProductZoom/>
            </div>   
            <div className='productContent w-[60%]'>
                <h1 className='text-[25px] font-[600] mb-1'>Product Name</h1>
                <div className='flex items-center gap-3'>
                    <span className='text-gray-400 text-[13px]'>Brands : 
                        <span className='font-[500] text-black'> Brand Name</span>
                    </span>
                    <Rating name='size-small' defaultValue={4} size='small' readOnly />
                    <span className='text-[13px] cursor-pointer'>Review (5)</span>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                    <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>Rs. 1,999</span>
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
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails
