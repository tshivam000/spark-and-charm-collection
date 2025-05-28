
import React, { useState } from 'react'
import TextField  from '@mui/material/TextField'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
const Register = ()=>{
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    return(
        <section className='sectiopn py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto bg-white p-4 px-10 bg-whiite rounded-md'>
                    <h3 className='text-center text-[18px] text-black'>
                        Register with a new account
                    </h3>
                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5'>
                            <TextField type='text' id="name" label="Full Name *" variant="outlined" className='w-full'/>       
                        </div>
                        <div className='form-group w-full mb-5'>
                            <TextField type='email' id="email" label="Email Id *" variant="outlined" className='w-full'/>       
                        </div>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField 
                            type={isPasswordShow===false ? 'password':'text'}
                            id="password" label="Password *" variant="outlined" className='w-full'/>       
                            <Button className='!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px]
                             !min-w-[35px] !rounded-full !text-black'
                             onClick={()=>setIsPasswordShow(!isPasswordShow)}>
                            {
                                isPasswordShow===false ? <IoMdEye className='text-[20px] opacity-75'/> :
                                <IoMdEyeOff className='text-[20px] opacity-75'/>
                            }
                            </Button>
                        </div>  
                        <div className='flex items-center w-full mt-3 mb-3'>
                            <Button className='btn-org w-full btn-md !text-[16px]'>Register</Button>    
                        </div>      
                        <p className='text-center font-[500]'>Already have an account? <Link className='link text-[14px] font-[600] text-primary' to={'/login'}>Log In</Link></p>     
                        <p className='text-center font-[500]'>Or continue with social account</p>         
                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-md !text-black !text-[16px]'>
                            <FcGoogle className='text-[20px]'/>Login with Google</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}  
export default Register