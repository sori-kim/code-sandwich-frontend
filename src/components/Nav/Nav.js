import React from "react";
import "./Nav.scss";
import { Link, withRouter } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div class="Nav">
        <div class="dropdown">
          <div class="dropbtn_wrapper">
            <Link to="menu">
              <button class="dropbtn">메뉴소개 </button>
            </Link>
            <button class="dropbtn">이용방법</button>
            <button class="dropbtn">써브웨이</button>
            <button class="dropbtn">주문하기</button>
          </div>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <Link to="menu">
                  <a href="#">샌드위치</a>
                </Link>
              </div>
              <div class="column">
                <a href="#">써브웨이 이용방법</a>
                <a href="#">주문 TIP</a>
              </div>
              <div class="column">
                <a href="#">매장 찾기</a>
                <a href="#">써브웨이 역사</a>
              </div>
              <div class="column">
                <a href="#">주문하기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
