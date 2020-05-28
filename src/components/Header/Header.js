import React from "react";
import Nav from "../Nav/Nav";
import { Link, withRouter } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="header_wrapper">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
          <div className="header_btn">
            <button>매장찾기</button>
            <button>고객센터</button>
            <Link to="login">
              <button>회원가입ㆍ로그인</button>
            </Link>
          </div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
