import React from 'react';
//styles
import './Input.css';

function Input(props) {
  let options;
  switch (props.type) {
    case 'New/used':
      options = ['toyota', 'camry', 'porsche'];
    case 'vehicle':
      options = ['toyota', 'camry', 'porsche'];
    case 'brand':
      options = ['cocacola', 'Dangote', 'Mtn'];
    case 'price':
      options = ['100', '200', '300'];
    case 'Number of Doors':
      options = ['100', '200', '300'];
    case 'Number of Seats':
      options = ['100', '200', '300'];
  }
  return (
    <div>
      <br></br>
      <div>
        <label className='AutoLabel' htmlFor={props.type}>
          {props.type}
        </label>
      </div>

      <select name={props.type} className='autoSelect' id={props.type}>
        <option value=''>Please Select</option>
        {options.map((eachOption) => {
          return <option className='autoOptions'>{eachOption}</option>;
        })}
      </select>
      <br></br>
    </div>
  );
}

export default Input;
