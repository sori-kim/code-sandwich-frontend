import React, { Component } from "react";
import "./ToppingBox.scss";

class ToppingBox extends Component {
  state = {
    toggleState: true,
    selectedOptions: [],
  };

  render() {
    return (
      <div
        className={this.state.toggleState ? "ToppingBox" : "ToppingBox2"}
        onClick={(e) =>
          // (e) => console.log(this.props)
          this.props.clickToppings(this.props)
        }
      >
        <div className="img-box">
          <img className="topping-img" src={this.props.image} alt="topping" />
        </div>
        <div className="topping-info">
          <div className="topping-title">{this.props.name}</div>
          <div className="price">{this.props.price}원</div>
        </div>
      </div>
    );
  }
}
export default ToppingBox;
