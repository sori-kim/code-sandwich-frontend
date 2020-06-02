import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuItem.scss";
import explore from "../../../../images/explore.png";

export class MenuItem extends React.Component {
  state = {
    isHover: false,
    id: "",
  };

  handleMouseEnter = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  handleItemClick = (e) => {
    this.setState({ id: this.props.id });
    this.props.history.push("/menu_details");
  };

  render(id, image, name, summary) {
    return (
      <div
        className={`menu ${this.state.isHover ? "activeHover" : ""}`}
        key={this.props.id}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleItemClick}
      >
        <img className="menu_img" src={this.props.image} alt="menu" />
        <div className="menu_name">{this.props.name}</div>
        <div className="menu_desc">{this.props.summary}</div>
        <img className="i_explore" src={explore} alt="explore" />
      </div>
    );
  }
}

export default withRouter(MenuItem);
