import React from "react";
import "./OrderBox.scss";

export default class OrderBox extends React.Component {
  state = {
    activeOrderBox: 0,
  };

  render() {
    return (
      <div className="OrderBox">
        <div className="order_wrapper">
          <div className="title">B.L.T</div>
          <div>
            <div className="price">11,000원</div>
            <div className="cals">520 Cals</div>
          </div>
          <div className="size"> footlong</div>
          <div
            className={`button_wrapper ${
              this.state.activeOrderBox === 1 ? "activeOrder" : ""
            }`}
          >
            <button>장바구니 추가</button>
            <button>토핑 추가</button>
          </div>
        </div>
      </div>
    );
  }
}
