import React, { useContext } from 'react';
//styles
import './head.css';
//components
import Menu from '../../../page/Home/menu/menu';
//slider
//icons
import { CgMenuRight, CgMenu } from 'react-icons/cg';
import { Zoom } from 'react-slideshow-image';
import autoContext from '../../../page/Automobile/context';

import { GrFormClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function AutoHead(props) {
  const { changeDropDown, showDropDown } = useContext(autoContext);

  return (
    <div className='AutoHead'>
      <div className='AutoHeadContent'>
        <p>NATURE CORP </p>
        <div className='responsiveMenuIcons'>
          <button className='autoSidebtn' onClick={changeDropDown}>
            <CgMenu className='menuIcon'></CgMenu>
            {/* <CgMenuRight className='menuHover'></CgMenuRight> */}
          </button>

          <br></br>
          <br></br>
          {/* <button className='sideBtn' onClick={changeDropDown}>
            <span>
              <CgMenuRight className='menuHover'></CgMenuRight>
              <CgMenu className='menuReal'></CgMenu>
            </span>
            <span className='ServiceText'>SERVICES</span>
          </button> */}

          <div
            className={
              showDropDown
                ? 'ResponsiveLink   showDropDown'
                : 'ResponsiveLink   removeDropDown'
            }
          >
            <Link to='/'>HOME</Link>

            <a href=''>ABOUT</a>
            <a href=''>TERMS</a>
          </div>
        </div>

        <div className='PagesLink'>
          <Link to='/'>HOME</Link>
          <a href=''>ABOUT</a>
          <a href=''>TERMS</a>
        </div>
      </div>
    </div>
  );
}

export default AutoHead;
