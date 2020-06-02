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
    this.setState({ isHover: true, id: this.props.id });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false });
  };

  render(id, image, name, summary) {
    return (
      <Link to={`/menu_details/${this.state.id}`} className="mainToMenu">
        <div
          className={`menu ${this.state.isHover ? "activeHover" : ""}`}
          key={this.props.id}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleItemClick}
        >
          <img className="menu_img" src={this.props.image} alt="menu" />
          <div className="menu_name" style={{ textDecoration: "none" }}>
            {this.props.name}
          </div>
          <div className="menu_desc">{this.props.summary}</div>
          <img className="i_explore" src={explore} alt="explore" />
        </div>
      </Link>
    );
  }
}

export default withRouter(MenuItem);
