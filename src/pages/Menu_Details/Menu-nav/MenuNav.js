import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuNav.scss";

class MenuNav extends React.Component {
  render() {
    return (
      <div className="Select-MenuNav">
        <div className="sub-loc">
          <ul className="menu-wrap">
            <li className="nav-menuList">
              <Link to="/sandwichList" className="menu-link-1">
                샌드위치
              </Link>
            </li>
            <li className="nav-menuList">
              <Link to="/wrapList" className="menu-link">
                랩
              </Link>
            </li>
            <li className="nav-menuList">
              <Link to="/saladList" className="menu-link">
                찹샐러드
              </Link>
            </li>
            <li className="nav-menuList">
              <Link to="/sideDrink" className="menu-link">
                스마일 썹
              </Link>
            </li>
            <li className="nav-menuList">
              <Link to="/catering" className="menu-link">
                단체메뉴
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuNav;
