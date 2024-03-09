import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Footer, Nav } from '../Component'


const Dashboard = () => {
  return (

    <div className='flex flex-col justify-between min-h-screen'> 
      <Nav page='Dashboard' link='home' />
        <h1> Ini Dashboard</h1> 
        <Footer />
    </div>
  )
}

export default Dashboard