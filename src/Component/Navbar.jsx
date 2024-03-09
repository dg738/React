import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({page, link}) => {
    return (
        <nav className='flex justify-between p-9 bg-black text-white'>
            <h1 className=''>{page}</h1> 
                <div className='flex justify-between'>
                <Link to={link == 'home' ? '/' : link } className='text-white mr-4 capitalize'>{link}</Link>
            </div>
            
           
        </nav>
    )
}

export default Navbar