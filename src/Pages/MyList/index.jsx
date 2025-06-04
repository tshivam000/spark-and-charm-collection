import React from 'react'
import { Button } from '@mui/material';
import AccountSidebar from '../../components/AccountSidebar';
import MyListItems from './MyListItems';

function MyList() {

  return (

    <section className='py-10 w-full'>
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                <AccountSidebar/>
            </div>
            <div className='col2 w-[70%]'>
                <div className='shadow-md rounded-md bg-white'>
                    <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.2)]'>
                    <h2>My List</h2>
                    <p className='mt-0'>
                        There are <span className='font-bold text-primary'>3 </span>
                        Products in My List
                    </p>
                    </div>
                    <MyListItems size={'S'} qty={1}/>
                    <MyListItems size={'S'} qty={1}/>
                    <MyListItems size={'S'} qty={1}/>
                </div>
            </div>
        </div>
    </section >


  )
}

export default MyList
