import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './menu.css';
//icons
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdKeyboardArrowUp } from 'react-icons/md';

function Menu(props) {
  return (
    <div className='serviceWrapper'>
      <div className='MenuContainer'>
        <div className='mobileItems'>
          <a href=''>
            <p>Home</p>
          </a>
          <a href=''>About</a>
          <a href=''>Terms</a>
        </div>
        <h5 className='menuService'>SERVICES</h5>
        <h5
          className='menuServiceResponsive'
          onClick={props.showServiceMenuHandler}
        >
          SERVICES{' '}
          {props.showServiceMenu ? (
            <RiArrowDropDownLine className='menuDropIcon'></RiArrowDropDownLine>
          ) : (
            <MdKeyboardArrowUp></MdKeyboardArrowUp>
          )}
        </h5>
        <div
          className={
            props.showServiceMenu ? 'showServiceDropDown' : 'MenuItems'
          }
        >
          <Link to='/automobile' className='AutoService'>
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
