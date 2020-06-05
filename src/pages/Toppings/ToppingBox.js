import React, { Component } from "react";
import "./ToppingBox.scss";

class ToppingBox extends Component {
  state = {
    toggleState: true,
    selectedOptions: [],
  };

  handleSelect = () => {
    this.setState(
      {
        toggleState: !this.state.toggleState,
      },
      () => this.props.clickToppings(this.props, this.props.name)
    );
  };

  render() {
    return (
      <div
        className="ToppingBox"
        // className={this.state.toggleState ? "ToppingBox" : "ToppingBox2"}
        onClick={this.handleSelect}
      >
        <div className="img-box">
          <img
            className="topping-img"
            src={this.props.image_url}
            alt="topping"
          />
        </div>
        <div className="topping-info">
          <div className="topping-title">{this.props.name}</div>
          <div className="price">+{Math.floor(this.props.price)}원</div>
        </div>
      </div>
    );
  }
}
export default ToppingBox;
