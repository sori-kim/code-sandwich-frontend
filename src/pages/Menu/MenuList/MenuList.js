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
              image={sandwich.image_url}
              name={sandwich.name}
              ename={sandwich.name_en}
              kcal={sandwich.kcal}
              summary={sandwich.description}
            />
          );
        })}
      </div>
    );
  }
}

export default MenuList;
