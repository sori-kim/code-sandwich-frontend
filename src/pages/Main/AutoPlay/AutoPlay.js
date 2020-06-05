import React from "react";
import Slider from "react-slick";
import hero_1 from "../../../images/hero_1.jpg";
import hero_2 from "../../../images/hero_2.jpg";
import hero_3 from "../../../images/hero_3.jpg";
import hero_4 from "../../../images/hero_4.jpg";

export default class AutoPlay extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <img src={hero_1} width="100%" height="100%" alt="hero" />
          </div>
          <div>
            <img src={hero_2} width="100%" height="100%" alt="hero" />
          </div>
          <div>
            <img src={hero_3} width="100%" height="100%" alt="hero" />
          </div>
          <div>
            <img src={hero_4} width="100%" height="100%" alt="hero" />
          </div>
        </Slider>
      </div>
    );
  }
}
