import React, { Component } from 'react';
//styles
import './investment.css';
import InvestComp from '../../components/investment/investment';

export default class investment extends Component {
  state = {
    showothersPage: false,
    showInvestmentPage: true,
    onHoverHouse: false,
    onHoverCryptoBox: false,
    onHoverRealEsate: false,
    onHoverCar: false,
    onHoverSmile: false,
    showRealEstate: false,
    showCrypto: false,
    showStock: false,
  };
  investmentHandler = () => {
    this.setState((prevState) => {
      return { ...this.state, showInvestmentPage: true, showothersPage: false };
    });
  };
  otherHandler = () => {
    this.setState((prevState) => {
      return { ...this.state, showothersPage: true, showInvestmentPage: false };
    });
  };
  houseTextHandler = () => {
    this.setState({ onHoverHouse: true });
  };
  mouseLeaveHandler = () => {
    this.setState({ onHoverHouse: false });
  };

  cryptoHoverHandler = () => {
    this.setState({ onHoverCryptoBox: true });
  };

  cryptoLeaveHandler = () => {
    this.setState({ onHoverCryptoBox: false });
  };

  realEstateHoverHandler = () => {
    this.setState({ onHoverRealEsate: true });
  };

  realEsatetLeaveHandler = () => {
    this.setState({ onHoverRealEsate: false });
  };

  carHoverHandler = () => {
    this.setState({ onHoverCar: true });
  };

  carLeaveHandler = () => {
    this.setState({ onHoverCar: false });
  };

  smileHoverHandler = () => {
    this.setState({ onHoverSmile: true });
  };

  smileLeaveHandler = () => {
    this.setState({ onHoverSmile: false });
  };
  showRealEstateDown = () => {
    this.setState((prevState) => {
      return { ...prevState, showRealEstate: !prevState.showRealEstate };
    });
  };
  showCryptoDowm = () => {
    this.setState((prevState) => {
      return { ...prevState, showCrypto: !prevState.showCrypto };
    });
  };
  showStockDowm = () => {
    this.setState((prevState) => {
      return { ...prevState, showStock: !prevState.showStock };
    });
  };

  render() {
    return (
      <div className='InvestmentPage'>
        <InvestComp
          showOthers={this.otherHandler}
          showInvestMent={this.investmentHandler}
          HoverHouse={this.houseTextHandler}
          mouseLeave={this.mouseLeaveHandler}
          cryptoHover={this.cryptoHoverHandler}
          cryptoLeave={this.cryptoLeaveHandler}
          realEstateHover={this.realEstateHoverHandler}
          realEstateLeave={this.realEsatetLeaveHandler}
          carHover={this.carHoverHandler}
          carLeave={this.carLeaveHandler}
          smileHover={this.smileHoverHandler}
          smileLeave={this.smileLeaveHandler}
          showRealEstateDown={this.showRealEstateDown}
          showCryptoDowm={this.showCryptoDowm}
          showStockDowm={this.showStockDowm}
          {...this.state}
        ></InvestComp>
      </div>
    );
  }
}
