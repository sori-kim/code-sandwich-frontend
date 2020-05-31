import React from "react";
import "./MenuItem.scss";
import explore from "../../../../images/explore.png";

export default class MenuItem extends React.Component {
  state = {
    isHover: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };
  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };
  render(id, image, name, summary) {
    return (
      <div
        className={`menu ${this.state.isHover ? "activeHover" : ""}`}
        key={this.props.id}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img className="menu_img" src={this.props.image} alt="menu" />
        <div className="menu_name">{this.props.name}</div>
        <div className="menu_desc">{this.props.summary}</div>
        <img className="i_explore" src={explore} alt="explore" />
      </div>
    );
  }
}
