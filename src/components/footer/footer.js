import React from 'react';
//styles
import './footer.css';
//components
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';

function footer() {
  return (
    <div className='footerComponent'>
      <p>
        Naturecorp is an online investment company.we provide our customers with
        packages to best suites their needs and budget of investment .We
        communicate effectively with our customers to understand their needs in
        order to solely satisfy them we have worked with several individual to
        secure a spot in our marketplace
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='followSection'>
        <p>Follow us </p>
        <div className='IconsContainer'>
          <a href='#' className='IconWrapper'>
            <AiOutlineTwitter></AiOutlineTwitter>
          </a>
          <a href='#' className='IconWrapper'>
            <FaFacebookF></FaFacebookF>
          </a>
          <a href='#' className='IconWrapper'>
            <GrLinkedinOption></GrLinkedinOption>
          </a>
          <a href='#' className='IconWrapper'>
            <AiOutlineInstagram></AiOutlineInstagram>
          </a>
        </div>

        <br></br>
        <br></br>
        <p>Copyright © 2021 Naturecorp</p>
      </div>
    </div>
  );
}

export default footer;
