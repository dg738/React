import React from 'react'
import { Footer, Nav } from '../Component'
const Home = () => {
  return (
    <div className=''>
      <Nav page='Home' link='dashboard' />
      <header className='p-10 flex justify-between'>
        <div className="flex items-center">
            <h1 className='felx font-sans text-xs md:text-4xl text-center'>Introduction</h1>
        </div>
      
        <img src="/images/2.png" alt="" srcset="" className='w-[30rem]'/>
      </header>
    <Footer />  
      

    </div>
  )
}

export default Home   