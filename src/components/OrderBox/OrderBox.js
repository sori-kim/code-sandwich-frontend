import React from "react";
import "./OrderBox.scss";

export default class OrderBox extends React.Component {
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
          <div className="btn_wrapper">
            <button>장바구니 추가</button>
            <button>토핑 추가</button>
          </div>
        </div>
      </div>
    );
  }
}
