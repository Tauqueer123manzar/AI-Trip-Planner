import React from 'react'
import {Link} from "react-router-dom"
import Footer from '../../components/Footer'
const home = () => {
  return (
   <>
    <div className='container mx-auto p-4 text-center mt-8 h-screen'>
       <h1 className='text-4xl font-bold text-red-500'>Discover Your Next Adventure with Trip Planner AI</h1>
        <p className='text-4xl text-gray-600 mt-4'>Personalized Itineraries at Your Fingertips</p>
        <p className='mt-4'>Your personal Trip Planner and Travel curator,creating custom Itineraries based on your preferences</p>

        <Link to="/create-trip">
        <button className='bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer'>Get Started</button>
        </Link>
    </div>
    <div>
      <Footer/>
    </div>
   </>
  )
}

export default home
