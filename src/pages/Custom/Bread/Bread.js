import React from "react";
import Slider from "react-slick";
import BreadItem from "./BreadItem/BreadItem";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bread.scss";

export default class Bread extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  handleBurn = () => {
    this.state.isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  render(props) {
    const { bread } = this.props;
    console.log("bread props", bread);
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoPlay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div
        className="Bread"
        style={{ display: this.props.isShown ? "flex" : "none" }}
      >
        <Slider className="slide" {...settings}>
          {bread.map((good) => (
            <BreadItem
              name={good.name}
              image_url={good.image_url}
              key={good.id}
              price={good.price}
              ingredient_category_id={good.ingredient_category_id}
            />
          ))}
        </Slider>
        <div className="bottom_side">
          <div onClick={this.handleBurn}>
            <FontAwesomeIcon
              icon={faBurn}
              size="2x"
              color="white"
              className={`notBurn ${this.state.isActive ? "burnActive" : ""} `}
            />
          </div>
          <div className="toasted">Toasted</div>
          <button className="looksGood" onClick={this.props.handleGood}>
            Looks Good
          </button>
        </div>
      </div>
    );
  }
}
