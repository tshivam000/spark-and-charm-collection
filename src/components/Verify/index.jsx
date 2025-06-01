import React, { useState } from 'react'
import OtpBox from '../OtpBox'
import { Button } from '@mui/material';

function Verify() {
    const [otp, setOtp] = useState('')
    const handleOtpChange = (value) =>{
        setOtp(value);
    }
    const verifyOTP = (e) =>{
          e.stopPropagation()
    }
    return (
    <section className='section py-10'>
        <div className='container'>
            <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                <div className='text-center flex items-center justify-center'>
                    <img src='../images/shield.pnh.jpg' width={80}/> 
                </div>
                <h3 className='text-center text-[18px] text-black mt-4 mb-3'>
                    Verify OTP
                </h3>
                <p className='text-center mb-4'>OTP Send to <span className='text-primary font-bold'>tshivam817@gmail.com</span></p>
                <form onSubmit={verifyOTP}>
                    <OtpBox length={6} onChange ={handleOtpChange}/>
                    <div className='flex items-center justify-center mt-5'>
                        <Button type='submit' className='w-full btn-org'>Verify Otp</Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Verify