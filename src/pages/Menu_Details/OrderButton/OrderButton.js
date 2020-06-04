import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./OrderButton.scss";

class OrderButton extends React.Component {
  // handleUser=()=>{
  // 로그인 유도하는 함수
  //   if()
  // }

  render(props) {
    // console.log("props : ", this.props);
    return (
      //   <div className="OrderButton">
      <div className="btn_wrapper">
        {/* <Link to=""> */}
        <button>장바구니 추가</button>
        {/* </Link> */}
        <Link to={`/custom/${this.props.id}`}>
          <button onClick={this.handleUser}>커스터마이즈</button>
        </Link>
      </div>
      //   </div>
    );
  }
}

export default OrderButton;
