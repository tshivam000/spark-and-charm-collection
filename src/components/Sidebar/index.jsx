import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import './style.css'

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <div className='sidebar py-5'>
     <div className='box'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-1.5'>Shop by Category
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
            {
              isOpenCategoryFilter === true ? <FaAngleUp/>:<FaAngleDown/>
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
        <div className='scroll px-3 relative left-[-10px]'>
          <FormControlLabel control={<Checkbox size="small"/>} label="Fashion" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Bags" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Groceries" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Wellness" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Electronics" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Footwear" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Beauty" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Jewellery" className='w-full'/>
        </div>
        </Collapse>
     </div>
      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-1.5'>Availability
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>setIsOpenAvailFilter(!isOpenAvailFilter)}>
            {
              isOpenAvailFilter === true ? <FaAngleUp/>:<FaAngleDown/>
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
        <div className='scroll px-3 relative left-[-10px]'>
          <FormControlLabel control={<Checkbox size="small"/>} label="Available (20)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="In Stock (20)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Not Available (5)" className='w-full'/>
        </div>
        </Collapse>
     </div>

      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-1.5'>Size
          <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)}>
            {
              isOpenSizeFilter === true ? <FaAngleUp/>:<FaAngleDown/>
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
        <div className='scroll px-3 relative left-[-10px]'>
          <FormControlLabel control={<Checkbox size="small"/>} label="Small (20)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Medium (20)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="Large (10)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="XL (15)" className='w-full'/>
          <FormControlLabel control={<Checkbox size="small"/>} label="XXL (12)" className='w-full'/>
        </div>
        </Collapse>
     </div>

      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-1.5'>Filter By Price
        </h3>
        <RangeSlider/>
        <div className='d-flex pt-2 pb-2 priceRange'>
          <span className='text-[13px]'>
            From: <strong className='text-dark'>Rs. {100}</strong>
          </span>
          <span className='ml-auto text-[13px]'>
            From: <strong className='text-dark'>Rs. {5000}</strong>
          </span>
        </div>
     </div>

      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-1.5'>Filter By Rating
        </h3>

        <div className='w-full'>
          <Rating name="size-small" defaultValue={5} size="small" readOnly/>
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={4} size="small" readOnly/>
        </div>
        <div className='w-full'>
          <Rating name="size-small" defaultValue={3} size="small" readOnly/>
        </div>    
        <div className='w-full'>
          <Rating name="size-small" defaultValue={2} size="small" readOnly/>
        </div>     
        <div className='w-full'>
          <Rating name="size-small" defaultValue={2} size="small" readOnly/>
        </div>
       
     </div>
    </div>
  )
}

export default Sidebar
