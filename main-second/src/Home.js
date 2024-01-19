
import React from 'react';
import CustomCarousel from './Carousel';
import './App.css';
 

const Home = () => {
  return (
    <div>
         
    <div className="landing-page">
      <CustomCarousel />

      <div className="content">
        <h2>Welcome to Our Furniture Store</h2>
        <p>
          Discover a wide range of high-quality furniture to enhance your living
          space. From classic to modern designs, we have something for every style.
        </p>
        
      </div>
    </div>
    </div>
  );
};

export default Home;
