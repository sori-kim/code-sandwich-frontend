import React from "react";
import "./BreadItem.scss";

export default class BreadItem extends React.Component {
  render(props) {
    return (
      <div
        className="BreadItem"
        onClick={(e) => this.props.handleAddToCart(this.props)}
      >
        <div className="bread_title">{this.props.name}</div>
        <div className="bread_cals">360 Cals</div>
        <img className="bread_img" src={this.props.image_url} alt="bread" />
      </div>
    );
  }
}
