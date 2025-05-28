import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartOutline } from "react-icons/io5";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Header = ()=>{
    const context = useContext(MyContext)
    return (
        <header className='bg-white'>
            <div className="top-strip py-2 border-t-[1px] border-zinc-400 border-b-[1px] ">
                <div className='container'>
                    <div className='flex intems-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[12px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className='col2 flex intems-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-one'>
                                    <Link to='/help-center' className='text-[13px] link font-[500] transition'>Help Center</Link>
                                </li>
                                 <li className='list-one'>
                                    <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header py-4 border-b-[1px] border-zinc-400 border-b-[1px]'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[25%]'>
                        <div className='logo'>
                            <Link to='/'>
                                <img src="/images/default_logo.jpg" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                     <div className='col2 w-[45%]'>
                        <Search />

                     </div>
                      <div className='col3 w-[30%] flex items-center pl-7'>
                        <ul className='flex items-center justify-end w-full gap-3'>
                            <li className='list-one font-[500]'>
                                <Link to={'/login'} className='text-[15px] link font-[500] transition'>Login </Link>
                                | <Link to={'/register'} className='text-[15px] link font-[500] transition'>Register</Link>
                            </li>
                            <li>
                                <Tooltip title="Compare">
                                <IconButton aria-label="cart" >
                                <StyledBadge badgeContent={1} color="secondary">
                                    <IoGitCompareOutline />
                                </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wishlist" >
                                <IconButton aria-label="cart">
                                <StyledBadge badgeContent={1} color="secondary">
                                    <IoMdHeartEmpty />
                                </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Cart" >
                                <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
                                <StyledBadge badgeContent={1} color="secondary">
                                    <IoCartOutline />
                                </StyledBadge>
                                </IconButton>
                                </Tooltip>
                            </li>
                        </ul>
                      </div>
                </div>

            </div>
            <Navigation />
        </header>
    )
}
export default Header;