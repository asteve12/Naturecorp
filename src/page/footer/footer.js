import React, { Component } from 'react';
//components
import Footer from '../../components/footer/footer';
//styles
import './footer.css';

export default class footer extends Component {
  render() {
    return (
      <div className='FooterSection'>
        <Footer></Footer>
      </div>
    );
  }
}
