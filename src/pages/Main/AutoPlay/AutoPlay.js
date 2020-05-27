import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import hero_1 from "../../../images/hero_1.jpg"
import hero_2 from "../../../images/hero_2.jpg"

export default class AutoPlay extends React.Component{
  state = {
    slideIndex: 0,
    updateCount: 0
  };

    render(){
      const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

      return(
        <div>
      
        
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={hero_1} width="100%" height="100%"  alt="hero" />
          </div>
          <div>
            <img src={hero_2} width="100%" height="100%" alt="hero" />
          </div>
        </Slider>
      </div>
     )
      
    }

}