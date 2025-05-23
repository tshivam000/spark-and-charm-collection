import React from 'react'
import Sidebar from '../../components/Sidebar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const ProductListing = () => {
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
        </div>
        </div>
    </section>
  )
}

export default ProductListing
