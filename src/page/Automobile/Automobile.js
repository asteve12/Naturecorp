import React, { Component, createContext } from 'react';
//component
import AutomobileCompo from '../../components/Automobile/Automobile';
import Customize from '../../components/customize/customize';
import autoContext from './context';
export default class Automobile extends Component {
  state = {
    zoomOut: false,
    showDropDown: false,
  };
  ItemChange = () => {
    alert();
    this.setState((prevState) => {
      return {
        zoomOut: !prevState.zoomOut,
      };
    });
  };

  // ChangeDropDown = () => {

  //      this.setState((prevState) => {
  //     return {
  //        showDropDown: !prevState.showDropDown,
  //     };
  //   }
  ChangeDropDown = () => {
    this.setState((prevState) => {
      return {
        ...this.state,
        showDropDown: !prevState.showDropDown,
      };
    });
  };

  render() {
    return (
      <autoContext.Provider
        value={{
          changeDropDown: this.ChangeDropDown,
          showDropDown: this.state.showDropDown,
        }}
      >
        <div>
          <AutomobileCompo
            isItemReplaced={this.ItemChange}
            {...this.state}
          ></AutomobileCompo>
        </div>
      </autoContext.Provider>
    );
  }
}
