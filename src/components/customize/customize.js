import React from 'react';
//components
import Input from './INPUT/Input';
import Cars from './cars/cars';
import Footer from '../footer/footer';

//styles
import './customize.css';

function customize() {
  return (
    <>
      <div className='customViewSection'>
        <div className='CustomizeSection'>
          <h1 className='CustomizeHeader'>Customize view</h1>
          <Input type='New/used'></Input>
          <Input type='vehicle'></Input>
          <Input type='brand'></Input>
          <Input type='price'></Input>
          <Input type='Number of Seats'></Input>
          <Input type='Number of Doors'></Input>
        </div>
        <div className='CustomizeOutput'>
          <h1 className='CustomizeOutputHeader'>Match</h1>
          <br></br>
          <br></br>
          <div className='carWrapper'>
            <Cars></Cars>
            <Cars></Cars>
            <Cars></Cars>
            <Cars></Cars>
            <Cars></Cars>
            <Cars></Cars>
            <Cars></Cars>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default customize;
