import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from 'react-icons/bs';


function Checkout() {
  return (
    <section className='py-10 checkout'>
        <div className='container flex gap-5'>
            <div className='leftCol w-[70%]'>
                <div className='card bg-white shadow-md p-5 rounded-md w-full'>
                    <h1>Billing Details</h1>
                    <form className='w-full mt-5'>
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[50%]'>
                                <TextField className='w-full ' label="FullName" variant="outlined" size='small' />
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Email" variant="outlined" size='small' />
                            </div>
                        </div>
                        <label className='text-[14px] font-[500] mb-2 block'>Street Address *</label>
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[100%]'>
                                <TextField className='w-full' label="House No. Street Name" variant="outlined" size='small' />
                            </div>
                        </div>
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[100%]'>
                                <TextField className='w-full' label="Apartment, suite, unit etc. (optional)" variant="outlined" size='small' />
                            </div>
                        </div>      
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="Town / City *" variant="outlined" size='small' />
                            </div>
                            <div className='col w-[50%]'>
                                <TextField className='w-full' label="State / Country *" variant="outlined" size='small' />
                            </div>
                        </div>   
                        <label className='text-[14px] font-[500] mb-2 block'>Postal Code *</label>
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[100%]'>
                                <TextField className='w-full' label="Zip Code" variant="outlined" size='small' />
                            </div>
                        </div> 
                        <div className='flex items-center gap-5 pb-5'>
                            <div className='col w-[100%]'>
                                <TextField className='w-full' label="Phone Number" variant="outlined" size='small' />
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
            <div className='rightCol w-[30%]'>
                <div className='card shadow-md bg-white p-5 rounded-md'>
                    <h2 className='mb-4'>Your Order</h2>
                    <div className='flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]'>
                        <span className='text-[14px] font-[600]'>Product</span>
                        <span className='text-[14px] font-[600]'>Subtotal</span>
                    </div>
                    <div className='scroll mb-5 max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2'>
                    <div className='flex items-center justify-between py-2'>
                        <div className='part1 flex items-center gap-3'>
                            <div className='cursor-pointer img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group'>
                                <img src="../images/Saree.webp" alt="saree" className='w-full transition-all group-hover:scale-105'/>
                            </div>
                            <div className='info'>
                                <h4 className='text-[14px]'>Product Name </h4>
                                <p className='text-[13px]'>Qty : 1 </p>
                            </div>
                        </div>
                        <div className='text-[14px] font-500'>
                            Rs.1500
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='part1 flex items-center gap-3'>
                            <div className='cursor-pointer img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group'>
                                <img src="../images/Saree.webp" alt="saree" className='w-full transition-all group-hover:scale-105'/>
                            </div>
                            <div className='info'>
                                <h4 className='text-[14px]'>Product Name </h4>
                                <p className='text-[13px]'>Qty : 1 </p>
                            </div>
                        </div>
                        <div className='text-[14px] font-500'>
                            Rs.1500
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='part1 flex items-center gap-3'>
                            <div className='cursor-pointer img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group'>
                                <img src="../images/Saree.webp" alt="saree" className='w-full transition-all group-hover:scale-105'/>
                            </div>
                            <div className='info'>
                                <h4 className='text-[14px]'>Product Name </h4>
                                <p className='text-[13px]'>Qty : 1 </p>
                            </div>
                        </div>
                        <div className='text-[14px] font-500'>
                            Rs.1500
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='part1 flex items-center gap-3'>
                            <div className='cursor-pointer img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group'>
                                <img src="../images/Saree.webp" alt="saree" className='w-full transition-all group-hover:scale-105'/>
                            </div>
                            <div className='info'>
                                <h4 className='text-[14px]'>Product Name </h4>
                                <p className='text-[13px]'>Qty : 1 </p>
                            </div>
                        </div>
                        <div className='text-[14px] font-500'>
                            Rs.1500
                        </div>
                    </div> 
                    <div className='flex items-center justify-between'>
                        <div className='part1 flex items-center gap-3'>
                            <div className='cursor-pointer img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group'>
                                <img src="../images/Saree.webp" alt="saree" className='w-full transition-all group-hover:scale-105'/>
                            </div>
                            <div className='info'>
                                <h4 className='text-[14px]'>Product Name </h4>
                                <p className='text-[13px]'>Qty : 1 </p>
                            </div>
                        </div>
                        <div className='text-[14px] font-500'>
                            Rs.1500
                        </div>
                    </div>                                                          
                    </div>

                    <Button className='btn-org btn-md w-full'>
                       <BsFillBagCheckFill className='text-[20px] mr-[5px]'/>  Checkout
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Checkout