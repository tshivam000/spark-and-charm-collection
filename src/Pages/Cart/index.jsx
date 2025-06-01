import React from 'react'
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from 'react-icons/bs';
import CartItems from './CartItems';

function CartPage() {

  return (
    <section className='section py-5 pb-10'>
        <div className='container w-[80%] max-w-[80%] flex gap-5'>
            <div className='leftPart w-[70%] '>

                <div className='shadow-md rounded-md bg-white'>
                    <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)]'>
                    <h2>Your Cart</h2>
                    <p className='mt-0'>
                        There are <span className='font-bold text-primary'>2</span>
                        Products in your Cart
                    </p>
                    </div>
                    <CartItems size={'S'} qty={1}/>
                 
                </div>
            </div>  
            <div className="rightPart w-[30%]">
                <div className='shadow-md rounded-md bg-white p-5'>
                    <h3 className='pb-1'>Cart Totals</h3>
                    <hr className='mb-4'/>

                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Shipping</span>
                        <span className='text-primary font-bold'>Rs.1500</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Shipping</span>
                        <span className='font-bold'>Free</span>
                    </p>    
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Estimate for</span>
                        <span className='font-bold'>United Kingdom</span>
                    </p>  
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Total</span>
                        <span className='text-primary font-bold'>Rs.1500</span>
                    </p>    
                    <Button className='btn-org btn-md w-full flex gap-2'> 
                        <BsFillBagCheckFill className='text-[20px]'/>Checkout</Button>
                </div>

            </div>
        </div>    
    </section>
  )
}

export default CartPage
