
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './AboutUs';
import Review from './Review';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';
import CustomCarousel from './Carousel';
import Footer from './Footer';
import Contact from './Contact';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
     <Routes>
        <Route path="/" element={<CustomCarousel />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        </div>
    </Router>
  );
};

export default App;
