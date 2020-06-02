import React from "react";
import Slider from "react-slick";
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

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        className="Bread"
        style={{ display: this.props.isShown ? "flex" : "none" }}
      >
        {/* <Slider {...settings}> */}

        <div className="bread_title">Italian</div>
        <div className="bread_cals">360 Cals</div>
        <img
          className="bread_img"
          src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large.png"
          alt="bread"
        />

        <a onClick={this.handleBurn}>
          <FontAwesomeIcon
            icon={faBurn}
            size="2x"
            color="white"
            className={`notBurn ${this.state.isActive ? "burnActive" : ""} `}
          />
        </a>
        <div className="toasted">Toasted</div>
        <button onClick={this.props.handleGood}>Looks Good</button>
        {/* </Slider> */}
      </div>
    );
  }
}
