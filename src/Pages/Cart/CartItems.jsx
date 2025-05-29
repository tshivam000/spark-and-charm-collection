import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { VscTriangleDown } from "react-icons/vsc";
import Rating from '@mui/material/Rating';

function CartItems(props) {
const [sizeanchorEl, setSizeAnchorEl] = useState(null);
const [selectedSize, setCartItems] = useState(props.size);
const openSize = Boolean(sizeanchorEl);

const [qtyanchorEl, setQtyAnchorEl] = useState(null);
const [selectedQty, setSelectedQty] = useState(props.qty);
const openQty = Boolean(qtyanchorEl);


  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if(value!==null){
    setCartItems(value);
    }
  };


const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if(value!==null){
    setSelectedQty(value);
    }
  };
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
        <div className='flex items-center gap-4 mt-2'>
            <div className='relative'>
                <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] p-1 px-3 
                rounded-md cursor-pointer' onClick={handleClickSize}>
                    Size: {selectedSize} <VscTriangleDown />
                </span>
                        <Menu
                        id="size-menu"
                        anchorEl={sizeanchorEl}
                        open={openSize}
                        onClose={()=>handleCloseSize(null)}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>handleCloseSize('S')} className='!text-[14px]'>S</MenuItem>
                        <MenuItem onClick={()=>handleCloseSize('M')} className='!text-[14px]'>M</MenuItem>
                        <MenuItem onClick={()=>handleCloseSize('L')} className='!text-[14px]'>L</MenuItem>
                        <MenuItem onClick={()=>handleCloseSize('XL')} className='!text-[14px]'>XL</MenuItem>
                        <MenuItem onClick={()=>handleCloseSize('XXL')} className='!text-[14px]'>XXL</MenuItem>
                    </Menu>
            </div>
            <div className='relative'>
                <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] p-1 px-3
                 rounded-md cursor-pointer'  onClick={handleClickQty}>
                    Qty: {selectedQty} <VscTriangleDown />
                </span> 
                    <Menu
                        id="qty-menu"
                        anchorEl={qtyanchorEl}
                        open={openQty}
                        onClose={()=>handleCloseQty(null)}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>handleCloseQty('1')} className='!text-[14px]'>1</MenuItem>
                        <MenuItem onClick={()=>handleCloseQty('2')} className='!text-[14px]'>2</MenuItem>
                        <MenuItem onClick={()=>handleCloseQty('3')} className='!text-[14px]'>3</MenuItem>
                        <MenuItem onClick={()=>handleCloseQty('4')} className='!text-[14px]'>4</MenuItem>
                        <MenuItem onClick={()=>handleCloseQty('5')} className='!text-[14px]'>5</MenuItem>
                    </Menu>
            </div>                              
        </div>
        <div className='flex items-center gap-4 mt-3'>
            <span className='price text-primary !text-[black] text-[14px] font-[600]'>Rs. 1,499</span>
            <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>Rs. 1,999</span>
            <span className='price text-primary text-[14px] font-[600]'>20% OFF</span>
        </div>
    </div>
    </div>
    </>
  )
}

export default CartItems
