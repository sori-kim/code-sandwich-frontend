import React from "react";
import MenuItem from "../MenuSection/MenuItem/MenuItem";
import Slider from "react-slick";
import Modal from "../../../components/Modal/Modal";
import { URL } from "../../../Config";
import "./MenuSection.scss";
import map from "../../../images/icon_map.png";
import franchise from "../../../images/icon_franchise.png";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

class MenuSection extends React.Component {
  state = {
    sandwich: [],
    filtered_sandwich: [],
    isActive: 1,
  };

  componentDidMount() {
    fetch(`${URL}/product/sandwich`)
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

  handleCategoryClick = (menu) => {
    const { sandwich } = this.state;
    this.setState({
      filtered_sandwich: sandwich.filter(
        (item) => item.subcategory_id === menu
      ),
      isActive: menu,
    });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
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
            onClick={() => this.handleCategoryClick(1)}
            className={isActive === 1 ? "isActive" : "notActive"}
          >
            <a>클래식</a>
          </li>
          <li
            onClick={() => this.handleCategoryClick(2)}
            className={isActive === 2 ? "isActive" : "notActive"}
          >
            <a>프레쉬&라이트</a>
          </li>
          <li
            onClick={() => this.handleCategoryClick(3)}
            className={isActive === 3 ? "isActive" : "notActive"}
          >
            <a>프리미엄</a>
          </li>
          <li
            onClick={() => this.handleCategoryClick(4)}
            className={isActive === 4 ? "isActive" : "notActive"}
          >
            <a>아침메뉴</a>
          </li>
        </ul>
        <div className="main_button">
          <a className="button_order">
            <img src={franchise} alt="icon" />
            <p>주문하기</p>
          </a>
          <a className="button_map">
            <img src={map} alt="icon" />
            <p>매장찾기</p>
          </a>
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {filtered_sandwich.map((sandwich) => (
            <MenuItem
              key={sandwich.id}
              image={sandwich.image_url}
              name={sandwich.name}
              summary={sandwich.description}
              id={sandwich.id}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default MenuSection;
