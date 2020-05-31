import React from "react";
import MenuItem from "../MenuSection/MenuItem/MenuItem";
import Slider from "react-slick";
import "./MenuSection.scss";

class MenuSection extends React.Component {
  state = {
    sandwich: [],
    filtered_sandwich: [],
    isActive: 1,
  };

  componentDidMount() {
    fetch("http://10.58.2.50:8000/product/sandwich")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          sandwich: res.sandwiches,
          filtered_sandwich: res.sandwiches.filter(
            (item) => item.subcategory_id === 1
          ),
        })
      );
  }

  handleOnClick = (menu) => {
    const { sandwich } = this.state;
    this.setState({
      filtered_sandwich: sandwich.filter(
        (item) => item.subcategory_id === menu
      ),
      isActive: menu,
    });
  };

  render() {
    const { sandwich, filtered_sandwich, isActive } = this.state;
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoPlay: false,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <div className="MenuSection">
        <div className="title">Subway's Menu</div>
        <ul className="category">
          <li
            onClick={() => this.handleOnClick(1)}
            className={isActive === 1 ? "isActive" : "notActive"}
          >
            <a>클래식</a>
          </li>
          <li
            onClick={() => this.handleOnClick(2)}
            className={isActive === 2 ? "isActive" : "notActive"}
          >
            <a>프레쉬&라이트</a>
          </li>
          <li
            onClick={() => this.handleOnClick(3)}
            className={isActive === 3 ? "isActive" : "notActive"}
          >
            <a>프리미엄</a>
          </li>
          <li
            onClick={() => this.handleOnClick(4)}
            className={isActive === 4 ? "isActive" : "notActive"}
          >
            <a>아침메뉴</a>
          </li>
        </ul>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          filtered_sandwich.map((sandwich) =>{" "}
          {
            <MenuItem
              key={sandwich.id}
              image={sandwich.image_url}
              name={sandwich.name}
              summary={sandwich.description}
            />
          }
          );
        </Slider>
      </div>
    );
  }
}

export default MenuSection;
