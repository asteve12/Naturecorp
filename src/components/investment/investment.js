import React from 'react';
//styles
import './investment.css';
//images
import coinStack from '../../assets/about/coinstack.png';

function investment(props) {
  return (
    <div className='investment'>
      <div className='InvestmentHeader'>
        <button
          className={
            props.showInvestmentPage
              ? 'InvestmentBtn activeBtn'
              : 'InvestmentBtn inactiveBtn'
          }
          onClick={props.showInvestMent}
        >
          Investment
        </button>
        <button
          className={
            props.showothersPage
              ? 'InvestmentOther activeBtn'
              : 'InvestmentOther inactiveBtn'
          }
          onClick={props.showOthers}
        >
          Others
        </button>
      </div>
      <div
        className={
          props.showInvestmentPage ? 'InvestImgCont' : 'hideInvestment'
        }
      >
        <div
          className='InvestHouse'
          onMouseEnter={props.HoverHouse}
          onMouseLeave={props.mouseLeave}
        >
          <div
            className={
              props.onHoverHouse
                ? 'investHouseText onHoverinvestHouseText'
                : 'investHouseText'
            }
          >
            <p className='RealEstate'>
              Real Estate
              {props.onHoverHouse ? (
                <>
                  <p className='AboutText'>
                    As an investor we believe you should have easy access to
                    high quality real esatate
                  </p>

                  <p className='AboutText'>
                    we make it easy,convenient and fast for you to invest in
                    high curated commercial real estate
                  </p>

                  <p className='AboutText'>
                    As a member of our marketplace,you have instant access to
                    view all properties that we offer and can obtain fractional
                    ownership quickly with our experienced team and
                    technology-driven process
                  </p>
                </>
              ) : null}
            </p>
          </div>
        </div>
        <div className='InvestCrypto'>
          <div
            className='cryptoBox'
            onMouseEnter={props.cryptoHover}
            onMouseLeave={props.cryptoLeave}
          >
            <div
              className={
                props.onHoverCryptoBox
                  ? 'cryptoTextCont onHoverCrypto'
                  : 'cryptoTextCont'
              }
            >
              <p className='cryptoText'>
                Crypto Currency
                {props.onHoverCryptoBox ? (
                  <p className='AboutText'>
                    As an investor we believe you should have easy access to
                    high quality real esatate
                  </p>
                ) : null}
              </p>
            </div>
          </div>
          <div
            className='stockBox'
            onMouseEnter={props.realEstateHover}
            onMouseLeave={props.realEstateLeave}
          >
            <div className='stockBox'>
              <div
                className={
                  props.onHoverRealEsate
                    ? 'stockTextCont onHoverStock'
                    : 'stockTextCont'
                }
              >
                <p className='stockText'>
                  <p className='stockTextHeader'>Stock Markets</p>

                  {props.onHoverRealEsate ? (
                    <>
                      {' '}
                      <p>
                        We make it easy to have access to local and
                        international stock markets .
                      </p>
                      <p>
                        Making it easier for you to buy,sell and hold company
                        shares
                      </p>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*investment secton*/}
      <div className={props.showothersPage ? 'otherImgCont' : 'hideInvestment'}>
        <div
          className='Automobile'
          onMouseEnter={props.carHover}
          onMouseLeave={props.carLeave}
        >
          <div className={props.onHoverCar ? 'carText onCarHover' : 'carText'}>
            <p className='RealEstate'>
              Automobile
              {props.onHoverCar ? (
                <p className='AutoMobileText'>
                  We Provide you with durable and comfortable automobile to best
                  suit your needs and budget.
                </p>
              ) : null}
            </p>
          </div>
        </div>
        <div
          className='smileImg'
          onMouseEnter={props.smileHover}
          onMouseLeave={props.smileLeave}
        >
          <div
            className={
              props.onHoverSmile ? 'smileText onSmileHover' : 'smileText'
            }
          >
            <p className='RealEstate'>
              Helping Hands
              {props.onHoverSmile ? (
                <>
                  <p className='helpHandText'>
                    We are passionate about lives. At naturecorp we believe
                    every child has the right to live happily and to have their
                    dreams come through
                  </p>
                  <p className='helpHandText'>
                    you can support their dream by making donations
                  </p>
                </>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default investment;
