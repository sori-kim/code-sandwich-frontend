import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./OrderButton.scss";

class OrderButton extends React.Component {
  render() {
    return (
      //   <div className="OrderButton">
      <div className="btn_wrapper">
        {/* <Link to=""> */}
        <button>장바구니 추가</button>
        {/* </Link> */}
        <Link to="/custom">
          <button>커스터마이즈</button>
        </Link>
      </div>
      //   </div>
    );
  }
}

export default OrderButton;
