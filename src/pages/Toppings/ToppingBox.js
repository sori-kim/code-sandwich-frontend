import React, { Component } from "react";

class ToppingBox extends Component {
  render() {
    return;
    <div>
      <a>
        <div className="img-box">
          <img className="topping-img" src={this.props.image} />
        </div>
        <div className="topping-title"></div>
        <div className="kcal-info">
          <span className="ckal">{this.props.cal}</span>
          <span className="kcal-add">Cals</span>
        </div>
      </a>
    </div>;
  }
}
export default ToppingBox;
