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
        {/* real Estate mobile section*/}
        <div
          className='InvestHouseResponsive'
          // onMouseEnter={props.HoverHouse}
          // onMouseLeave={props.mouseLeave}
        >
          <div
            className={
              props.onHoverHouse
                ? 'investHouseTextResponsive onHoverinvestHouseText'
                : 'investHouseTextResponsive'
            }
          >
            <p className='RealEstate'>
              Real Estate
              <button
                className='cryptoTextBtn'
                href=''
                onClick={(e) => {
                  e.preventDefault();
                  props.showRealEstateDown();
                }}
              >
                {props.showRealEstate ? 'Less' : 'More'}
              </button>
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
        {/*End of Estate Mobile section*/}
        {/*Realestate dropdown Section*/}
        <div
          className={
            props.showRealEstate
              ? 'RealEstateMobile'
              : 'noDisplayRealEstateMobile'
          }
        >
          <p className='AboutTextResponsive'>
            As an investor we believe you should have easy access to high
            quality real esatate
          </p>

          <p className='AboutTextResponsive'>
            we make it easy,convenient and fast for you to invest in high
            curated commercial real estate
          </p>

          <p className='AboutTextResponsive'>
            As a member of our marketplace,you have instant access to view all
            properties that we offer and can obtain fractional ownership quickly
            with our experienced team and technology-driven process
          </p>
        </div>
        {/*EndRealestate dropdown Section*/}
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
          {/*crypto Box mobile section*/}
          <div
            className='cryptoBoxResponsive'
            // onMouseEnter={props.cryptoHover}
            // onMouseLeave={props.cryptoLeave}
          >
            <div
              className={
                props.onHoverCryptoBox
                  ? 'cryptoTextContResponsive onHoverCrypto'
                  : 'cryptoTextContResponsive'
              }
            >
              <p className='cryptoText'>
                Crypto Currency
                <button
                  className='cryptoTextBtn'
                  onClick={props.showCryptoDowm}
                >
                  {props.showCrypto ? 'less' : 'More'}
                </button>
                {props.onHoverCryptoBox ? (
                  <p className='AboutText'>
                    As an investor we believe you should have easy access to
                    high quality real esatate
                  </p>
                ) : null}
              </p>
            </div>
          </div>
          {/*Endcrypto Box mobile section*/}
          {/*crypto dropdown*/}
          <div
            className={
              props.showCrypto
                ? 'RealEstateMobile'
                : 'noDisplayRealEstateMobile'
            }
          >
            <p className='AboutTextResponsive'>
              As an investor we believe you should have easy access to high
              quality real esatate
            </p>
          </div>
          {/*crypto dropdown Section*/}

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
          {/*stcockBox Responsive section*/}
          <div
            className='stockBoxResponsive'
            // onMouseEnter={props.realEstateHover}
            // onMouseLeave={props.realEstateLeave}
          >
            <div className='stockBoxResponsive'>
              <div
                className={
                  props.onHoverRealEsate
                    ? 'stockTextContResponsive onHoverStock'
                    : 'stockTextContResponsive'
                }
              >
                <p className='stockTextResponsive'>
                  <p className='stockTextHeaderResponsive'>
                    Stock Markets
                    <button
                      className='cryptoTextBtn'
                      onClick={props.showStockDowm}
                    >
                      {props.showStock ? 'less' : 'More'}
                    </button>
                  </p>

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
          {/*end stcockBox Responsive section*/}
          {/*crypto dropdown*/}
          <div
            className={
              props.showStock ? 'RealEstateMobile' : 'noDisplayRealEstateMobile'
            }
          >
            <p className='AboutTextResponsive'>
              We make it easy to have access to local and international stock
              markets .
            </p>
            <p className='AboutTextResponsive'>
              Making it easier for you to buy,sell and hold company shares
            </p>
          </div>
          {/*crypto dropdown Section*/}
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

        {/*Automobile section*/}
        <div
          className='AutomobileResponsive'
          onMouseEnter={props.carHover}
          onMouseLeave={props.carLeave}
        >
          <div className={props.onHoverCar ? 'carText onCarHover' : 'carText'}>
            <p className='RealEstate'>
              Automobile
              <a className='cryptoTextBtn' href=''>
                more
              </a>
              {props.onHoverCar ? (
                <p className='AutoMobileText'>
                  We Provide you with durable and comfortable automobile to best
                  suit your needs and budget.
                </p>
              ) : null}
            </p>
          </div>
        </div>
        {/*End Of Automobile section*/}
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
        {/*SmileResponsive*/}
        <div
          className='smileImgResponsive'
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
              <a className='cryptoTextBtn' href=''>
                more
              </a>
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
        {/*EndSmileResponsive*/}
      </div>
    </div>
  );
}

export default investment;
