import React, { useContext } from 'react'
import './footer.css'
import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { MyContext } from '../../App';
import { IoCloseSharp } from 'react-icons/io5';


const Footer = () => {
  const context = useContext(MyContext)
  return (
    <>

    <Drawer open={context.openCartPanel} 
      onClose={context.toggleCartPanel(false)} anchor='right'
      className='cartPanel'>
        <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.2)]'>
          <h4>Shopping Cart (1)</h4>
          <IoCloseSharp className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)}/>
        </div>
        <CartPanel/>
    </Drawer>
    </>


  )
}

export default Footer