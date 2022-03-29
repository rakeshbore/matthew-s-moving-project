import React from 'react'
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Testimonials from './components/Testimonial';

import Faq from './components/Faq';
const App = () => {
  return (
    <>
     
       <BrowserRouter>
        <Header/>

        <div className="pages">
          <Routes>
            <Route exact path="/"    element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/testimonial" element={<Testimonials/>} />
            <Route path="/faq" element={<Faq/>} />
          </Routes>
        </div>
       
      </BrowserRouter>


      <Footer/>
  
    </>
  );
}
   
export default App
