import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoCloseSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";


const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
    const openSubmenu= (index) => {
      if (submenuIndex === index) {
        setSubmenuIndex(null);
      } else {
      setSubmenuIndex(index);
      }
    }
      const openInnerSubmenu= (index) => {
      if (innerSubmenuIndex === index) {
        setInnerSubmenuIndex(null);
      } else {
      setInnerSubmenuIndex(index);
      }
  }

    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPenel" >
      <h3 className='p-3 text-[16px] weight-[500] flex items-center justify-between'>Shop By Categories
        <IoCloseSharp className='cursor-pointer text-[20px]' onClick={props.openCategoryPanel(false)}/>
      </h3>
      <Divider />
      <div className='scroll'>
        <ul className='w-full'>
            <li className='list-one flex items-center relative flex-col'>
                <Link to='/' className='w-full'>
                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
                </Link>
                {
                submenuIndex === 0 ? (
                <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                ) : (
                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                )
                }

              {
                submenuIndex === 0 &&
                <ul className='submenu  w-full pl-3' >
                <li className='list-one relative'>
                  <Link to='/' className='w-full'>
                  <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>
                  Apparel
                  </Button>
                  </Link>
                  {
                    innerSubmenuIndex === 0 ? (
                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                    ) : (
                    <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                    )
                  }
                  {
                    innerSubmenuIndex === 0 &&
                          <ul className='inner_submenu w-full pl-3' >
                    <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Smart Tablet
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Crepe T-Shirt
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Leather Watch
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Rolling Diamond
                    </Link>
                  </li>
                </ul>
}
                </li>
              </ul>
              }
              
    
            </li>

             <li className='list-one flex items-center relative flex-col'>
                <Link to='/' className='w-full'>
                <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>Outerwear</Button>
                </Link>
                {
                submenuIndex === 1 ? (
                <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                ) : (
                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                )
                }

              {
                submenuIndex === 1 &&
                <ul className='submenu w-full pl-3' >
                <li className='list-one relative'>
                  <Link to='/' className='w-full'>
                  <Button className='w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]'>
                  Apparel
                  </Button>
                  </Link>
                  {
                    innerSubmenuIndex === 1 ? (
                    <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                    ) : (
                    <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                    )
                  }
                  {
                    innerSubmenuIndex === 1 &&
                          <ul className='inner_submenu w-full pl-3' >
                    <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Smart Tablet
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Crepe T-Shirt
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Leather Watch
                    </Link>
                  </li>
                     <li className='list-one relative mb-1'>
                    <Link to='/' className='link w-full !text-left !justify-start px-3 transition text-[14px]'>
                      Rolling Diamond
                    </Link>
                  </li>
                </ul>
}
                </li>
              </ul>
              }
              
    
            </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <>
        <Drawer open={props.isOpenCatPanel} >
            {DrawerList}
        </Drawer>
    </>
  )
}

export default CategoryPanel


