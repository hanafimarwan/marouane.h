import React from 'react'
import { SingUpFrame } from '../middleware/SingUpFrame'
import { IoHomeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
export const Singup = () => {
    
    
    return (
        <div className='w-full h-full  flex justify-center items-center bg'>
             <Link to={"/"}><IoHomeSharp className='absolute top-6 left-6 sm:text-3xl text-xl'/></Link>
            <SingUpFrame/>
        </div>
    )
}
