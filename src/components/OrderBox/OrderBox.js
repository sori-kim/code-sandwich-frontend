import React from "react";
import "./OrderBox.scss";

export default class OrderBox extends React.Component {
  state = {
    activeOrderBox: 0,
  };

  render() {
    return (
      <div className="OrderBox">
        <div className="order_wrapper" style={{ textDecoration: "none" }}>
          <div className="title">{this.props.orderName}</div>
          <div className="size">footlong</div>
          <div
            className={`button_wrapper ${
              this.state.activeOrderBox === 1 ? "activeOrder" : ""
            }`}
          >
            <button onClick={this.props.handleOrder}>장바구니 추가</button>
            <button onClick={this.props.goToTopping}>토핑 추가</button>
          </div>
        </div>
      </div>
    );
  }
}
