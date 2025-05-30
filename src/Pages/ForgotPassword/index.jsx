
import React, {  useState } from 'react'
import TextField  from '@mui/material/TextField'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Button } from '@mui/material'


const ForgotPassword = ()=>{
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isPasswordShow2, setIsPasswordShow2] = useState(false);

    return(
        <section className='sectiopn py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto bg-white p-4 px-10 bg-whiite rounded-md'>
                    <h3 className='text-center text-[18px] text-black'>
                        Forgot Password
                    </h3>
                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                            type={isPasswordShow===false ? 'password':'text'}
                            id="email" 
                            name='name' label="New Password"
                             variant="outlined" className='w-full'/>   
                            <Button className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px]
                             !min-w-[35px] !rounded-full !text-black'
                             onClick={()=>setIsPasswordShow(!isPasswordShow)}>
                            {
                                isPasswordShow===false ? <IoMdEye className='text-[20px] opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] opacity-75'/>
                            }
                            </Button>    
                        </div>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField 
                            type={isPasswordShow2===false ? 'password':'text'}
                            id="confirm_password"
                            name='password'  label="Confirm Password" variant="outlined" className='w-full'/>       
                            <Button className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px]
                             !min-w-[35px] !rounded-full !text-black'
                             onClick={()=>setIsPasswordShow2(!isPasswordShow2)}>
                            {
                                isPasswordShow2===false ? <IoMdEye className='text-[20px] opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] opacity-75'/>
                            }
                            </Button>
                        </div>  
                        <div className='flex items-center w-full mt-3 mb-3'>
                            <Button className='btn-org w-full btn-md !text-[16px]'>Change Password</Button>    
                        </div>      
                    </form>
                </div>
            </div>
        </section>
    )
} 
export default ForgotPassword