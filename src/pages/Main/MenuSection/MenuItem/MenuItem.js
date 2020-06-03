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

  render() {
    const { id, isHover } = this.state;
    const { props_id, image, name, summary } = this.props;
    return (
      <Link to={`/menu_details/${id}`} className="mainToMenu">
        <div
          className={`menu ${isHover ? "activeHover" : ""}`}
          key={props_id}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleItemClick}
        >
          <img className="menu_img" src={image} alt="menu" />
          <div className="menu_name" style={{ textDecoration: "none" }}>
            {name}
          </div>
          <div className="menu_desc">{summary}</div>
          <img className="i_explore" src={explore} alt="explore" />
        </div>
      </Link>
    );
  }
}

export default withRouter(MenuItem);
