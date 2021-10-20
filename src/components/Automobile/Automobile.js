import React from 'react';
//styles
import './Automobile.css';
//components
import AutoHead from '../Automobile/Head/AutoHead';
import AutoSlider from './AutoSlider/AutoSlider';
import Customize from '../customize/customize';

function Automobile(props) {
  return (
    <div>
      <AutoHead></AutoHead>
      <AutoSlider></AutoSlider>
      <Customize></Customize>
    </div>
  );
}

export default Automobile;
