import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Contact from './pages/Contact';
import CreateTrip from './pages/CreateTrip';
const App = () => {
  return (
   <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/create-trip' element={<CreateTrip/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
