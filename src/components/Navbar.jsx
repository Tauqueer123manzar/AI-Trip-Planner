import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const togglemenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  };
  return (
   <>
    <nav className='bg-white shadow-xl'>
      <div className='container mx-auto p-4 flex justify-between items-center'>
       <h1 className='text-2xl font-bold text-black'>Trip Planner</h1>

       {/* ===================== Hamburger menu icon (visible on mobile only) ============================ */}
       <div className='md:hidden'>
          <button onClick={togglemenu}>
            {isMenuOpen?<FaTimes className='text-2xl'/>:<FaBars className='text-2xl'/>}
          </button>
       </div>

        {/* ===================== Navigation links ============================ */}
        <ul className='hidden md:flex space-x-6 text-lg text-gray-800'>
          <li><Link to="/" className='hover:text-red-600'>Home</Link></li>
          <li><Link to="about" className='hover:text-red-600'>About</Link></li>
          <li><Link to="services" className='hover:text-red-600'>Services</Link></li>
          <li><Link to="/contact" className='hover:text-red-600'>Contact</Link></li>
        </ul>
        
        {/* ===================== Login button (visible on desktop only) ============================ */}
        <button href="/login" className='hidden md:block bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>Login</button>
      </div>
      {/* ===================== Navigation links (visible on mobile only) ============================ */}
      {isMenuOpen && (
       <div className='md:hidden bg-white p-4 absolute w-full left-0 top-16 z-10 text-center text-lg'>
        <ul className='flex flex-col space-y-4 text-center'>
          <li><Link to="/" className='hover:text-red-600'>Home</Link></li>
          <li><Link to="about" className='hover:text-red-600'>About</Link></li>
          <li><Link to="services" className='hover:text-red-600'>Services</Link></li>
          <li><Link to="/contact" className='hover:text-red-600'>Contact</Link></li>
          <button href="/login" className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>Login</button>
        </ul>
       </div>
      )}
    </nav>
   </>
  )
}

export default Navbar
