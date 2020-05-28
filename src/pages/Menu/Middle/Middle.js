import React, { Component } from "react";
import "./Middle.scss";

class Middle extends Component {
  render() {
    return (
      <div className="middle">
        <ul>
          <li className="all">
            <span>All</span>
          </li>
          <li>
            <span>클래식</span>
          </li>
          <li>
            <span>프레쉬&라이트</span>
          </li>
          <li>
            <span>프리미엄</span>
          </li>
          <li>
            <span>아침메뉴</span>
          </li>
          <li className="plus">
            <span>추가메뉴</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Middle;
