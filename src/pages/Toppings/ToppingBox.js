import React, { Component } from "react";
import "./ToppingBox.scss";

class ToppingBox extends Component {
  render() {
    return (
      <div className="ToppingBox">
        <div className="img-box">
          <img className="topping-img" src={this.props.image} alt="topping" />
        </div>
        <div className="topping-title">{this.props.name}</div>
        <div className="kcal-info">
          <span className="ckal">{this.props.kcal}</span>
          <span className="kcal-add">Cals</span>
        </div>
      </div>
    );
  }
}
export default ToppingBox;
