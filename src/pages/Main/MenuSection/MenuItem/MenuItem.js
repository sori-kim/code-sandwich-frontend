import React from "react";
import "./MenuItem.scss";

export default class MenuItem extends React.Component {
  render(id, image, name, summary) {
    return (
      <div className="menu" key={this.props.id}>
        <img src={this.props.image} alt="menu" />
        <div className="menu_name">{this.props.name}</div>
        <div className="menu_desc">{this.props.summary}</div>
      </div>
    );
  }
}
