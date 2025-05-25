import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import ProductItemListView from '../../components/ProductItemListView';
import  Button from '@mui/material/Button';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProductListing = () => {
  const [itemView, setItemView ] = useState('grid');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className='py-5'>
        <div className='container'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='link transition' underline="hover" color="inherit" href="/">
                Home
                </Link>
                <Link
                underline="hover"
                color="inherit"
                href="/"
                className='link transition-all'
                >
                Fashion
                </Link>
            </Breadcrumbs>
        </div>
        <div className='bg-white p-2 mt-4'>
            <div className='container flex gap-3'>
            <div className='sidebarWrapper w-[20%] h-full bg-white p-3'>
                <Sidebar/>
            </div>
            <div className='rightContent w-[80%]'>
                <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between'>
                    <div className='col1 flex items-center itemViewActions'>
                        <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`} onClick={()=>setItemView('list')}><LuMenu className='text-[rgba(0,0,0,0.7)]'/></Button>    
                        <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`} onClick={()=>setItemView('grid')}><IoGridSharp className='text-[rgba(0,0,0,0.7)]'/></Button>
                        <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>There are 27 Produces</span>
                    </div>
                    <div className='col2 ml-auto flex items-center justify-end pr-2'>
                    <span className='text-[14px] font-[500] pl-3 pr-4 text-[rgba(0,0,0,0.7)]'>
                        Sort By 
                    </span>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='!bg-white !text-[12px] !text-[#000] !border-2  !border-[#000]'
                    >
                        High To Low
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}                       
                    >
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>High to Low</MenuItem>
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>Low to High</MenuItem>
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>Relevance</MenuItem>
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>Name, A to Z</MenuItem>
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>Name, Z to A</MenuItem>
                        <MenuItem className='!text-[13px] !text-[#000] !capitalize' onClick={handleClose}>Relevance</MenuItem>
                    </Menu>
                    </div>
                </div>
                <div className={`${itemView === 'grid'? 'grid-cols-4 md:grid-cols-4':'grid-cols-1 md:grid-cols-1'}  grid  gap-4`}>
                    {
                        itemView === 'grid' ?
                        <>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        <ProductItem/>
                        </>
                        :
                        <>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        <ProductItemListView/>
                        </>
                    }
                    
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListing
