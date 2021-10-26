import React, { Component, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import SwiftSlider from 'react-swift-slider';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import Slider from 'react-slick';
// import 'react-image-gallery/styles/css/image-gallery.css';
//images
import car from '../../assets/sliderImg/carsm.png';
import crypto from '../../assets/sliderImg/crpsm.png';
import peoplelg from '../../assets/sliderImg/peoplesm.png';
import Houselg from '../../assets/sliderImg/housesm.png';
import stocklg from '../../assets/sliderImg/stocksm.png';
//import icons
import { CgMenuRight, CgMenu } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
//components
import Menu from './menu/menu';
import Investment from '../investment/investment';
import { Link } from 'react-router-dom';

//context
import HomeContext from './context';

//compression library
// import imageCompression from 'browser-image-compression';

//styles
import './Home.css';
import About from '../../components/About/About';
import Footer from '../footer/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//axios
import axios from 'axios';
//minified images
import carlg from '../../assets/sliderImg/minified/1000/carlg-min.png';
import carsm from '../../assets/sliderImg/minified/500/carsm-min.jpg';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// const images = [
//   {
//     original: car,
//     thumbnail: 'http://lorempixel.com/250/150/nature/1/',
//   },
//   {
//     original: crypto,
//     thumbnail: 'http://lorempixel.com/250/150/nature/2/',
//   },
//   {
//     original: peoplelg,
//     thumbnail: 'http://lorempixel.com/250/150/nature/3/',
//   },
//   {
//     original: Houselg,
//     thumbnail: 'http://lorempixel.com/250/150/nature/3/',
//   },
//   {
//     original: stocklg,
//     thumbnail: 'http://lorempixel.com/250/150/nature/3/',
//   },
// ];
const data = [carlg, crypto, peoplelg, Houselg, stocklg];
const small = [carsm];
// const data = [
//   {
//     id: '1',
//     src: car,
//   },
//   {
//     id: '2',
//     src: crypto,
//   },
//   {
//     id: '3',
//     src: peoplelg,
//   },
//   {
//     id: '4',
//     src: Houselg,
//   },
//   {
//     id: '5',
//     src: stocklg,
//   },
// ];

export default class Home extends Component {
  state = {
    showService: false,
    textIndex: 0,
    imageText: 'AUTOMOBILE',
  };
  ServiceClickHandler = () => {
    this.setState((prevState) => {
      return {
        showService: !prevState.showService,
      };
    });
  };
  textChangeHandler = () => {
    let textArray = [
      'CRYPTO CURRENCY',
      'HELPING HANDS',
      'REAL ESTATE',
      'STOCK MARKETS',
    ];

    this.setState((prevState) => {
      if (prevState.textIndex > textArray.length - 1)
        return {
          imageText: 'AUTOMOBILE',
          textIndex: 0,
        };
      else {
        return {
          imageText: textArray[this.state.textIndex],
          textIndex: prevState.textIndex + 1,
        };
      }
    });
  };

  // handleCompressImage = (image) => {
  //   console.log('the current page', window.location.host + image);

  //   var imageFile = axios
  //     .get(
  //       'https://i.pinimg.com/236x/08/4b/0f/084b0fb6888b14ac32545b500fd80b1c--rayban-bruno.jpg'
  //     )
  //     .then(function (response) {
  //       console.log('axios response', response);
  //       // return response.blob();
  //     })
  //     .catch((error) => {
  //       console.log('path error', error);
  //     });
  //   // console.log(imageFile);
  //   console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  //   console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  //   var options = {
  //     maxSizeMB: 1,
  //     maxWidthOrHeight: 1920,
  //     useWebWorker: true,
  //   };
  //   imageCompression(image, options)
  //     .then(function (compressedFile) {
  //       console.log(
  //         'compressedFile instanceof Blob',
  //         compressedFile instanceof Blob
  //       ); // true
  //       console.log(
  //         `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
  //       ); // smaller than maxSizeMB
  //       console.log('compressedImage', compressedFile);
  //       return compressedFile; // write your own logic
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // };

  render() {
    return (
      <HomeContext.Provider
        value={{
          showHandler: this.ServiceClickHandler,
          showStatus: this.state.showService,
        }}
      >
        <div className='wrapper'>
          <div className='menu'>
            <button className='sideBtn' onClick={this.ServiceClickHandler}>
              <span>
                <CgMenuRight className='menuHover'></CgMenuRight>
                <CgMenu className='menuReal'></CgMenu>
              </span>
              <span className='ServiceText'>SERVICES</span>
              <GrFormClose
                className={this.state.showService ? 'hideCloseBtn' : 'closeBtn'}
              ></GrFormClose>
            </button>
            <div className='menuItemsWrapper'>
              <Link to='/automobile'>
                <h1>NATURE CORP</h1>
              </Link>

              <Link to='/'>
                <a href=''>
                  <p>HOME</p>
                </a>
              </Link>
              <a href=''>
                <p>ABOUT</p>
              </a>
              <a href=''>
                <p>TERMS</p>
              </a>
            </div>
            <div className='companyName'>NATURE CORP</div>
          </div>

          <div className={this.state.showService ? 'DropDown' : 'DropDownHide'}>
            <div className='closeDropDown' onClick={this.ServiceClickHandler}>
              <GrFormClose></GrFormClose>
            </div>

            <Menu></Menu>
          </div>

          {/* <div className='TextContainer'>
            <h1>{this.state.imageText}</h1>
          </div> */}
          {/* <ImageGallery
            items={images}
            // defaultImage={defaultImage}
            // showBullets={true}
            // showIndex={true}
            showThumbnails={false}
            lazyLoad={true}
            showPlayButton={false}
            // renderCustomControls={someComponent}
            autoPlay={true}
            showFullscreenButton={false}
            onBeforeSlide={this.textChangeHandler}
          /> */}
          {/* <SwiftSlider
            data={data}
            enableNextAndPrev={true}
            showDots={false}
            height={650}
            className='swift-slider-prev-btn'
          ></SwiftSlider> */}

          <div classNam='sliderWrapperHome'>
            <Fade onChange={this.textChangeHandler} duration={1000}>
              <div className='each-fade'>
                <div>
                  {/* <img src={data[0]} /> */}
                  <img srcset={`${data[0]} 1000w`} alt='' />
                </div>
              </div>
              <div className='each-fade'>
                <div>
                  <img src={data[1]} />
                </div>
              </div>
              <div className='each-fade'>
                <div>
                  <img src={data[2]} />
                </div>
              </div>
              <div className='each-fade'>
                <div>
                  <img src={data[3]} />
                </div>
              </div>
              <div className='each-fade'>
                <div>
                  <img src={data[4]} />
                </div>
              </div>
            </Fade>
          </div>
          {/* <div className='reactSliderWrapper'>
            <Slider {...settings}>
              <div className='SlideImageContainer'>
                <img src={data[0]} className='SliderImage' />
              </div>
              <div className='SlideImageContainer'>
                <img src={data[1]} className='SliderImage' />
              </div>
              <div className='SlideImageContainer'>
                <img src={data[2]} className='SliderImage' />
              </div>
              <div className='SlideImageContainer'>
                <img src={data[3]} className='SliderImage' />
              </div>
              <div className='SlideImageContainer'>
                <img src={data[4]} className='SliderImage' />
              </div>
            </Slider>
          </div> */}
        </div>
        <About></About>
        <Investment></Investment>
        <Footer></Footer>
      </HomeContext.Provider>
    );
  }
}
