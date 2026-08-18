import React, { useState } from 'react'
import AccountSidebar from '../../components/AccountSidebar'
import { Button } from '@mui/material'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Badge from '../../components/Badge'


const Orders = () => {
    const [isOpenOrderProduct, setisOpenOrderProduct] = useState(null);
    const isShowOrderdProduct = (index)=>{
        if(isOpenOrderProduct===index){
            setisOpenOrderProduct(null);
        }else{
            setisOpenOrderProduct(index);
        }
    }
  return (
    <>
    <section className='py-10 w-full orders'>
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                <AccountSidebar/>
            </div>
            <div className='col2 w-[70%]'>
                <div className='shadow-md rounded-md bg-white'>
                    <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)]'>
                    <h2>My Orders</h2>
                    <p className='mt-0'>
                        There are <span className='font-bold text-primary'>3 </span>
                        Orders
                    </p>
                    <div className='relative overflow-x-auto mt-5'>
                    <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
                        <thead className="text-xs text-zinc-700 uppercase bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">

                                </th>                                
                                <th scope="col" className="px-6 py-3 ">
                                    Order Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payment Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th> 
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th> 
                                <th scope="col" className="px-6 py-3">
                                    Pincode
                                </th>   
                                <th scope="col" className="px-6 py-3">
                                    Total Amount
                                </th>  
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>  
                                <th scope="col" className="px-6 py-3">
                                    User Id
                                </th>   
                                 <th scope="col" className="px-6 py-3">
                                    Order Status
                                </th>  
                                 <th scope="col" className="px-6 py-3">
                                    Date
                                </th>                                                                                                                                                                                                                                                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'
                                    onClick={()=>{isShowOrderdProduct(0)}}>
                                        {
                                            isOpenOrderProduct === 0 ? 
                                            <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/> 
                                            : <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/> 
                                        }
                                    </Button>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className='text-primary'>767567865678765896565</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className='text-primary'>767567865678765</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className='text-primary whitespace-nowrap'>Shivam Thakur</span> 
                                </td>      
                                <td className="px-6 py-4 font-[500]">
                                    <span className='text-primary'>7535879749</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className='block w-[350px]'>B-135, Panchsheel Vihar Malviya Nagar New Delhi</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    110017
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>  
                                <td className="px-6 py-4 font-[500]">
                                    tshivam817@gmail.com
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                   <span className='text-primary'>767567865678765896565</span>
                                </td>   
                                <td className="px-6 py-4 font-[500]">
                                   <span className='text-primary'><Badge status='pending'/></span>
                                </td>   
                                <td className="px-6 py-4 font-[500]">
                                   <span className='text-primary whitespace-nowrap'>2025-06-04</span>
                                </td>                                                                                                                                                   
                            </tr>
                            {
                                isOpenOrderProduct === 0 && (
                            <tr>
                                <td className='pl-20' colSpan={'6'}>
                                    <div className='relative overflow-x-auto'>
                                    <table className="w-full text-sm text-left rtl:text-right text-zinc-500 dark:text-zinc-400">
                                        <thead className="text-xs text-zinc-700 uppercase bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                    Product Is
                                                </th>                                
                                                <th scope="col" className="px-6 py-3 ">
                                                    Product Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th> 
                                                <th scope="col" className="px-6 py-3">
                                                    Sub Total
                                                </th>                                                                                                                                                                                                                                                   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">

                                                <td className="px-6 py-4 font-[500]">
                                                    <span >767567865678765896565</span>
                                                </td>
                                                <td className="px-6 py-4 font-[500]">
                                                    Product Name
                                                </td>
                                                <td className="px-6 py-4 font-[500]">
                                                    <img src='../images/Saree.webp' alt="" className='w-[60px] h-[60px] object-cover rounded-md'/>
                                                </td>      
                                                <td className="px-6 py-4 font-[500]">
                                                    3
                                                </td>
                                                <td className="px-6 py-4 font-[500]">
                                                    1300
                                                </td>
                                                <td className="px-6 py-4 font-[500]">
                                                    1300
                                                </td>                                                                                                                                                  
                                            </tr>


                                        </tbody>
                                    </table>
                                    </div>
                                </td>
                            </tr>
                                )
                            }


                        </tbody>
                    </table>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </section >
    </>
  )
}

export default Orders