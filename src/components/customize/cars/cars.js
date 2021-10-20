import React from 'react';
//styles
import './car.css';

function cars() {
  return (
    <div className='AutoClassCont'>
      <div className='carsImage'>
        <img
          className='carsImg'
          src='https://media.istockphoto.com/photos/generic-red-suv-on-a-white-background-side-view-picture-id1157655660?k=20&m=1157655660&s=612x612&w=0&h=WOtAthbmJ9iG1zbKo4kNUsAGMe6-xM-E7a8TMxb5xmk='
          alt=''
        />
      </div>
      <div className='carsDetail'>
        <div className='carDetailHeader'>
          <h5>Dodge SRT</h5>
          <p>2020,Challenger</p>
        </div>

        <div className='carPriceCont'>
          <div>
            <p className='carPriceContHeader'>15/23</p>
            <p className='priceLetter'>MPG</p>
          </div>
          <div className='priceCont'>
            <p>NGN 30,000,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cars;
