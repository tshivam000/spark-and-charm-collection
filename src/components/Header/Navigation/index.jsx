import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryPanel from './CategoryPanel';
import { Button } from '@mui/material';
import './style.css';
const Navigation = () => {
const [isOpenCatPanel , setIsOpenCatPanel] = useState(false);
const openCategoryPanel = () => {
    setIsOpenCatPanel(!isOpenCatPanel);
}
  return (
    <>
      <nav >
        <div className='container flex items-center justify-end gap-8'>
            <div className='col_1 w-[20%]'>
                <Button className='!text-black gap-2 w-full font-[500]' onClick={openCategoryPanel}>
                    <RiMenu2Fill className='text-[18px]'/>
                    Shop By Categories 
                    <LiaAngleDownSolid className='text-[13px] ml-auto font-bold'/>
                </Button>
            </div>

            <div className='col_2 w-[60%]'>
                <ul className='flex items-center gap-5 nav'>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Home</Button>
                    </Link>
                </li>
                <li className='list-none relative'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Fashion</Button>
                    </Link>
                    <div className='submenu absolute top-[120%] opacity-0 transition-all left-[0] min-w-[180px] bg-white shadow-md'>
                        <ul>
                            <li className='list-none relative'>
                                <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Men</Button>
                                </Link>
                                <div className='submenu absolute top-[0%] opacity-0 transition-all left-[100%] min-w-[180px] bg-white shadow-md'>
                        <ul>
                            <li className='list-none'>
                                <Link to={'/'} className='w-full'>
<Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>T-Shirt</Button>
                                </Link>
                            </li>
                             <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Jeans</Button>
                           </Link>
                            </li>
                             <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Footwear</Button>
                            </Link>
                            </li>
                             <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Watch</Button>
                            </Link>
                            </li>
                            <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Pents</Button>
                            </Link>
                            </li>
                        </ul>
                    </div>
                            </li>
                             <li className='list-none '>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Women</Button>
                           </Link>

                            </li>
                             <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Kids</Button>
                            </Link>
                            </li>
                             <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Girls</Button>
                            </Link>
                            </li>
                            <li className='list-none'>
                                 <Link to={'/'} className='w-full'>
                                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Boys</Button>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Electronics</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 ink transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Bags</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Footwear</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Groceries</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Beauty</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className=' !py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Wellness</Button>
                    </Link>
                </li>
                <li className='list-none'>
                    <Link to='/' className='text-[14px] link font-[500] transition'>
                    <Button className='!py-3 link transtion !font-[500} !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]'>Jewellery</Button>
                    </Link>
                </li>
                </ul>
            </div>
             <div className='col_3 w-[20%] '>
                <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0 justify-end'>
                    <BsRocketTakeoff className='text-[18px]'/>Free Delivery UpTo 500</p>
             </div>
        </div>
      </nav>

      <CategoryPanel openCategoryPanel={()=>openCategoryPanel} isOpenCatPanel={isOpenCatPanel}/>
    </>
  )
}

export default Navigation
