import React from "react";

import "./MenuItem.scss";

export default class MenuItem extends React.Component {
  state = {
    isHover: false,
  };

  handleMenu = () => {
    this.setState({ isHover: true });
  };
  render(id, image, name, summary) {
    return (
      <div
        className={`menu{this.state.isHover ? "activeHover" : ""}`}
        key={this.props.id}
        onMouseEnter={this.handleMenu}
      >
        <img src={this.props.image} alt="menu" />
        <div className="menu_name">{this.props.name}</div>
        <div className="menu_desc">{this.props.summary}</div>
      </div>
    );
  }
}
