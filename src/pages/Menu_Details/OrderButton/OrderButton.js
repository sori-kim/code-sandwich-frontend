import React from "react";
import "./OrderButton.scss";

class OrderButton extends React.Component {
  render() {
    return (
      //   <div className="OrderButton">
      <div className="btn_wrapper">
        <button>장바구니 추가</button>
        <button>토핑 추가</button>
      </div>
      //   </div>
    );
  }
}

export default OrderButton;
