import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';



const CategoryPanel = (props) => {
  
    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPenel" >
      <h3 className='p-3 text-[16px] weight-[500] flex items-center justify-between'>Shop By Categories
        <IoCloseSharp className='cursor-pointer text-[20px]' onClick={props.openCategoryPanel(false)}/>
      </h3>
      <Divider />
      <CategoryCollapse/>
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


