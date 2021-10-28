import React from 'react';
//styles
import './About.css';
import aboutBgImg from '../../assets/about/aboutsm.png';

function About() {
  return (
    <div>
      <div className='AboutSection'>
        <div className='AboutWrapper'>
          <div className='AboutText'>
            <p className='AboutBorder'></p>
            <p className='welcomeText'>WELCOME TO</p>
            <div className='brkCont'>
              <br></br>
            </div>

            <p> NATURE-CORP INTERNATIONAL</p>
            <div className='brkCont'>
              <br></br>
            </div>

            <p className='AboutInfo'>
              Top Ranking investment conglomerate iconified with NYSE integrity
              for best choice investment in ROI, Simplicity, growth and
              strategic Diversification across these investment sections.
            </p>
            <br />
            <button className='AboutSend'>Send a message to Nature-Corp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
