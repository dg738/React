import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex justify-between h-36 p-10 bg-black text-white items-center' >
            <img src="/images/2.png" alt="" srcset="" className='w-32' />
            <div className='flex justify-between'>
                <Link to='/' className='mr-4'>Contact Us</Link>
                <Link to='/dashboard'> My Page</Link>
            </div>
        </div>
    )
}

export default Footer