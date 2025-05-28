import React, { useContext } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App';


const ProductItem = () => {
  const context = useContext(MyContext)
  return (
    <div className='productItem rounded-md overflow-hidden shadow-md flex items-center'>
      <div className='group imgWrapper w-[25%] rounded-md relative'>
        <Link to={'/'}>
          <div className='img h-[250px] overflow-hidden relative'>
            <img src="./images/Saree.webp" alt="Product" className='w-full' />
            <img src="./images/saree-hover.webp" alt="Product" className='w-full absolute top-0 left-0 opacity-0
            group-hover:opacity-100 group-hover:scale-110 transition-all duration:700' />
          </div>
        </Link>
        <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary 
        text-white rounded-lg text-[12px] font-[500] p-1'>10%</span>
        <div className='actions duration-300 absolute top-[-200px] right-[15px]  flex items-center 
        flex-col gap-2 z-50 w-[50px] transition-all group-hover:top-[10px]'> 
          <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white 
          text-black hover:!bg-primary hover:!text-white' onClick={()=>context.setOpenProductDetailsModel(true)}>
            <MdOutlineZoomOutMap className='text-[18px]' />
          </Button>
          <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white 
          text-black hover:!bg-primary hover:!text-white'>
            <IoGitCompareOutline className='text-[18px]' />
            </Button>
          <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white 
          text-black hover:!bg-primary hover:!text-white'>
            <FaRegHeart className='text-[18px]' />
          </Button>
        </div>
      </div>
      <div className='info p-3 py-4 w-[75%] '>
        <h6 className='text-[13px] !font-[400]'><Link clssName='link' to={'/'}>Soylent Green</Link></h6>
        <h3 className='text-[18px] title mt-1 mb-2 font-[500] text-[rgba(0,0,0,1)] transition-all'>
        <Link className='link transition-all' to={'/'}>
        Siril Georgette Pink Color Saree with Blouse Piece
        </Link>
        </h3>
        <p className='text-[14px] mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia neque, ipsam iste exercitationem ipsa, hic harum dicta quod quaerat ipsum porro nostrum fuga...
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly/>
        <div className='flex items-center gap-4 mt-2'>
          <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>Rs. 1,999</span>
          <span className='price text-primary font-[600]'>Rs. 1,499</span>
        </div>
        <div className='mt-3'>
          <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[20px]'/> Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
