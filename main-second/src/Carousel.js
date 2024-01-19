import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CustomCarousel.css';

const CustomCarousel = () => {
  return (
    
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Welcome to Our Furniture Store</h3>
          <p>Comfortable Sofa</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Welcome to Our Furniture Store</h3>
          <p>From classic to modern designs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>Cost Friendly</h3>
          <p>Comfortable To Sleep in this Bed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/19814200/pexels-photo-19814200/free-photo-of-long-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fourth slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>we have something for every style</h3>
          <p>Quality Kitchen CupBoards</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fifth slide" />
        <Carousel.Caption className="carousel-caption">
          <h3>high-quality furnitures Available!</h3>
          <p>Quality Sanitary Products</p>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>


         );
};

export default CustomCarousel;
