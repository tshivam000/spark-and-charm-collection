import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';
import ProductSlider from '../../components/ProductSlider';
import ProductDetailsComponent from '../../components/ProductDetails';

function ProductDetails() {
    const [activeTab,setActiveTab] = useState(0);
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
        <div className='container flex gap-8 items-center'>
            <div className='prodeuctZoomContainer w-[40%] h-[500px] overflow-hidden'>
                <ProductZoom/>
            </div>   
            <div className='productContent w-[60%] pr-10'>
                <ProductDetailsComponent/>
            </div>
        </div>
        <div className='container pt-10 ProductDetails_content'>
            <div className='flex items-center gap-4'>
            <span className={`link text-[17px] cursor-poiner font-[500] ${activeTab === 0 && 'text-primary'}`}
            onClick={()=>setActiveTab(0)}>
                Description
            </span>
            <span className={`link text-[17px] cursor-poiner font-[500] ${activeTab === 1 && 'text-primary'}`}
            onClick={()=>setActiveTab(1)}>
                Product Details
            </span>
            <span className={`link text-[17px] cursor-poiner font-[500] ${activeTab === 2 && 'text-primary'}`}
            onClick={()=>setActiveTab(2)}>
                Review (5)
            </span>
            </div>

            {activeTab === 0 && (
                <div className='shadow-md w-full px-8 py-5 rounded-md'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptate, labore necessitatibus? Quis rem culpa dolorum illum doloremque perferendis perspiciatis labore magnam saepe. Vel,
                    dolorem at magni facere maiores accusantium earum!
                </p>
                <h4>Lightweight Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum ipsum quos, voluptatibus maiores doloribus soluta deserunt, sapiente temporibus magni molestiae quam voluptas commodi cum accusamus ullam.
                    Ab odit nesciunt voluptatibus.
                </p>
                <h4>Free Shipping & Return</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum ipsum quos
                </p>
                 <h4>
                    Money Back Guarantee
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum ipsum quos
                </p>               
                <h4>
                    Online Support
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum ipsum quos
                </p>
                </div>
            )}

            {activeTab === 1 && (                
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
                    <thead className="text-xs text-zinc-700 uppercase bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 ">
                                Stand Up
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Folded (w/o wheels)
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Folded (w/ wheels)
                            </th>
                             <th scope="col" className="px-6 py-3">
                                Door Pass Through
                            </th>                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>                           
                        </tr>
                        <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                1
                            </td>
                            <td className="px-6 py-4 font-[500]">
                                $2999
                            </td>                           
                        </tr>
                    </tbody>
                </table>
            </div>
            )}
            {activeTab === 2 && (  
                <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                    <div className='w-full productReviewContainer'>
                        <h2 className='text-[18px]'>Customer Question & answers</h2>
                        <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5'>
                            <div className='review mb-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full flex items-center justify-bteween'>
                                <div className='info w-[60%] flex items-center gap-2'>
                                    <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s" alt="remove" className='w-full'/>
                                    </div>
                                    <div className='w-[80%]'>
                                        <h4 className='text-[16px]'>Shivam Thakur</h4>
                                        <h5 className='text-[13px]'>2025--5-28</h5>
                                        <p className='mt-0 mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur deleniti maxime porro neque, explicabo necessitatibus reprehenderit sapiente magni hic excepturi error ad inventore placeat, adipisci laborum sint? Sequi, recusandae.</p>
                                    </div>

                                </div>
                                <Rating name="size-small" defaultValue={4} readOnly/>
                            </div>

                             <div className='review mb-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full flex items-center justify-bteween'>
                                <div className='info w-[60%] flex items-center gap-2'>
                                    <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s" alt="remove" className='w-full'/>
                                    </div>
                                    <div className='w-[80%]'>
                                        <h4 className='text-[16px]'>Shivam Thakur</h4>
                                        <h5 className='text-[13px]'>2025--5-28</h5>
                                        <p className='mt-0 mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur deleniti maxime porro neque, explicabo necessitatibus reprehenderit sapiente magni hic excepturi error ad inventore placeat, adipisci laborum sint? Sequi, recusandae.</p>
                                    </div>

                                </div>
                                <Rating name="size-small" defaultValue={4} readOnly/>
                            </div>  
                             <div className='review mb-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full flex items-center justify-bteween'>
                                <div className='info w-[60%] flex items-center gap-2'>
                                    <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s" alt="remove" className='w-full'/>
                                    </div>
                                    <div className='w-[80%]'>
                                        <h4 className='text-[16px]'>Shivam Thakur</h4>
                                        <h5 className='text-[13px]'>2025--5-28</h5>
                                        <p className='mt-0 mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur deleniti maxime porro neque, explicabo necessitatibus reprehenderit sapiente magni hic excepturi error ad inventore placeat, adipisci laborum sint? Sequi, recusandae.</p>
                                    </div>

                                </div>
                                <Rating name="size-small" defaultValue={4} readOnly/>
                            </div>    
                             <div className='review mb-5 pb-5 border-b border-[rgba(0,0,0,0.2)] w-full flex items-center justify-bteween'>
                                <div className='info w-[60%] flex items-center gap-2'>
                                    <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s" alt="remove" className='w-full'/>
                                    </div>
                                    <div className='w-[80%]'>
                                        <h4 className='text-[16px]'>Shivam Thakur</h4>
                                        <h5 className='text-[13px]'>2025--5-28</h5>
                                        <p className='mt-0 mb-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aspernatur deleniti maxime porro neque, explicabo necessitatibus reprehenderit sapiente magni hic excepturi error ad inventore placeat, adipisci laborum sint? Sequi, recusandae.</p>
                                    </div>

                                </div>
                                <Rating name="size-small" defaultValue={4} readOnly/>
                            </div>                                                                                  
                        </div>

                        <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                            <h2 className='text-[18px]'>Add a Review</h2>
                            <form className='w-full mt-5'>
                                <TextField 
                                id='outlined-multiline-flexible'
                                label='Write a review...'
                                className='w-full'
                                multiline
                                rows={5}
                                />
                                <br/>
                                <br/>
                                <Rating name="size-small" defaultValue={4} />
                                <div className='flex items-center mt-5'>
                                    <Button className='btn-org'>Submit Review</Button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            )}
        </div>
        <div className=''>
            <div className='container pt-8'>
                <h2 className='text-[20px] font-[600] mb-1'>Related Products</h2>
                <ProductSlider items={6}/>
            </div>
        </div>
    </section>
    </>
  )
}

export default ProductDetails
