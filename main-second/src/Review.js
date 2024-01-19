// Review.js
import React from 'react';
import './Review.css';
const Review = () => {
  return (
    <div className="container-1"> 
         <div className="review-container">
        
         <h2 className="review-heading">Customer Reviews</h2>
         
         
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/7195598/pexels-photo-7195598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 1" />
        <div className="card-body">
          <h5 className="card-title">Dining Table</h5>
          <p className="card-text">Apart from being a place where you set meals, the table is also a workstation, study table, sewing table, and other household tasks. Considering that the role of the dining room table has evolved with time, it has become all the more necessary for people to think of investing in this piece of furniture.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 2" />
        <div className="card-body">
          <h5 className="card-title">Sofa</h5>
          <p className="card-text">A sofa is a long, comfortable seat with a back and usually with arms, which two or three people can sit on.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/6489116/pexels-photo-6489116.jpeg" alt="Furniture 3" />
        <div className="card-body">
          <h5 className="card-title">Kitchen Cupboard</h5>
          <p className="card-text">Kitchen Cupboard are often required to house a broad array of items. They must hold ingredients for baking and cooking, appliances, cookbooks, and many more things. When your kitchen has adequate cabinet space, it will be far easier to ensure effective organization in your kitchen area.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/6265938/pexels-photo-6265938.jpeg" alt="Furniture 4" />
        <div className="card-body">
          <h5 className="card-title">Dressing Table</h5>
          <p className="card-text">The Dressing Table (also a vanity table or simply a vanity, in Australian English, a duchess) is a table specifically designed for performing one's toilette (dressing, applying makeup and other personal grooming), intended for a bedroom or a boudoir.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 5" />
        <div className="card-body">
          <h5 className="card-title">Bed</h5>
          <p className="card-text">A Bed is an item of furniture that is used as a place to sleep, rest, and relax. Bedroom on the Detmold Open-air Museum premises. Most modern beds consist of a soft, cushioned mattress on a bed frame. The mattress rests either on a solid base, often wood slats, or a sprung base.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src="https://images.pexels.com/photos/2079293/pexels-photo-2079293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Furniture 6" />
        <div className="card-body">
          <h5 className="card-title">Chairs</h5>
          <p className="card-text">Chairs are typically used to provide support for the seated person's body and arms, although some chairs are designed for 'perching' rather than sitting. There are also armless chairs - with or without a back - that may be referred to as stools. Some stools are referred to as backless chairs.</p>
          <div className="rating">
            {/* Add star icons or any other rating component */}
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    
    
    
    </div>
    </div>
    
  
 
  );
};

export default Review;
