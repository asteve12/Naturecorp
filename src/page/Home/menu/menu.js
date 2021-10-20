import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './menu.css';

function Menu() {
  return (
    <div className='serviceWrapper'>
      <div className='MenuContainer'>
        <div className='mobileItems'>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Terms</a>
        </div>
        <h5>SERVICES</h5>
        <div className='MenuItems'>
          <Link to='/automobile'>
            <p>Automobile</p>
          </Link>

          <p>Crypto Currency</p>
          <p>Helping Hands</p>
          <p>Real Estate</p>
          <p>Stock Markets</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
