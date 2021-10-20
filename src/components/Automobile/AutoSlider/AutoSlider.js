import React from 'react';
//styles
import './AutoSlider.css';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
//slider
//images
import img1 from '../../../assets/automobile/honda1_lg.png';
import img2 from '../../../assets/automobile/honda2lg.png';
import img3 from '../../../assets/automobile/hondalg.png';
import img4 from '../../../assets/automobile/honda3lg.png';

const data = [img1, img2, img3, img3];
// const zoomInProperties = {
//   indicators: true,
//   scale: 1.4,
// };
// const zoomOutProperties = {
//   indicators: true,
//   scale: 0.4,
// };

function AutoSlider(props) {
  return (
    <div className='AutoSliderWrapper'>
      {/* <Zoom
        // {props.zoomOut ? {...zoomInProperties}:{...zoomOutProperties}}
        {...(props.zoomOut ? zoomInProperties : zoomOutProperties)}
        // onChange={() => { alert() props.isItemReplaced()}}
        autoplay={true}
        duration={1000}
        transitionDuration={5000}
      >
        {images.map((each, index) => (
          <div key={index} style={{ width: '100%', height: '100%' }}>
            <img style={{ objectFit: 'cover', width: '100%' }} src={each} />
          </div>
        ))}
      </Zoom> */}
      <Fade duration={1000}>
        <div className='each-fade-auto'>
          <div>
            <img src={data[0]} />
          </div>
        </div>
        <div className='each-fade-auto'>
          <div>
            <img src={data[1]} />
          </div>
        </div>
        <div className='each-fade-auto'>
          <div>
            <img src={data[2]} />
          </div>
        </div>
        <div className='each-fade-auto'>
          <div>
            <img src={data[3]} />
          </div>
        </div>
        <div className='each-fade-auto'>
          <div>
            <img src={data[4]} />
          </div>
        </div>
      </Fade>
      <div className='pageDetail'>
        <h1>All Our Cars</h1>
        <p>Find a perfect car to fit your style, budget, and need.</p>
      </div>
    </div>
  );
}

export default AutoSlider;
