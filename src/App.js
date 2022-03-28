import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import of site components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

//import of required site pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Pricing from './Pages/Pricing'
import Service from './Pages/Service';

function App() {
  return (
    <Router>
      <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Service />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />

      </>
    </Router>
  );
}

export default App;
