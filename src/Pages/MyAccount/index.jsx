import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import AccountSidebar from '../../components/AccountSidebar'


const MyAccount = () => {
  return (
    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                <AccountSidebar/>
            </div>
            <div className='col2 w-[70%]'>
                <div className='card bg-white p-5 shadow-md rounded-md'>
                    <h2 className = 'pb-3'>
                        My Profile
                    </h2>
                    <hr/>
                    <form className='mt-5'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[50%]'>
                                <TextField label='Full Name' varient='outlined' size='small'
                                className='w-full'/>
                            </div>
                            <div className='w-[50%]'>
                                <TextField label='Email' varient='outlined' size='small'
                                className='w-full'/>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 mt-5'>
                            <div className='w-[50%]'>
                                <TextField label='Phone Number' varient='outlined' size='small'
                                className='w-full'/>
                            </div>
                        </div>
                        <br/>
                        <div className='flex items-center gap-4'>
                            <Button className='btn-org btn-md w-[100px]'>Save</Button>
                            <Button className='btn-org btn-md btn-border w-[100px]'>Cancle</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section >
  )
}

export default MyAccount