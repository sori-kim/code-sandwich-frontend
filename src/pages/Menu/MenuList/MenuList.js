import React, { Component } from "react";
import MenuBox from "../MenuBox/MenuBox";
import "./MenuList.scss";

class MenuList extends Component {
  render() {
    const { sandwich } = this.props;
    return (
      <div className="menuList">
        {sandwich.map((sandwich) => {
          return (
            <MenuBox
              id={sandwich.id}
              image={sandwich.image}
              name={sandwich.name}
              ename={sandwich.ename}
              kcal={sandwich.kcal}
              key={sandwich.id}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuList;
