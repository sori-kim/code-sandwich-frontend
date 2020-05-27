import React from "react";
import Nav from "../Nav/Nav";
import logo from "../../images/logo.png";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (

      <div className="Header">
        <div className="header_wrapper"> 
            <img alt="logo" src={logo} />
            <div className="header_btn">
                <button>매장찾기</button>
                <button>고객센터</button> 
                <button>회원가입ㆍ로그인</button>           
            </div>
        </div>
       <Nav />
      </div>
    );
  }
}

export default Header;
