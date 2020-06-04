import React from "react";
import Slider from "react-slick";
import BreadItem from "./BreadItem/BreadItem";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bread.scss";

export default class Bread extends React.Component {
  state = {
    isActive: false,
    cartItem: [],
    isModalOpen: false,
  };

  handleBurn = () => {
    this.state.isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  //클릭한 상품이 이미 배열에 존재하는지 체크
  checkProduct = (id) => {
    let { cartItem } = this.state;
    return cartItem.includes(id);
  };

  handleAddToCart = (selectedProduct) => {
    let productID = selectedProduct.id;
    let product = selectedProduct;
    if (!this.checkProduct(productID)) {
      this.setState({
        cartItem: this.state.cartItem.concat(product),
      });
    } else {
      alert("이미 선택된 토핑입니다!");
    }
  };

  render(props) {
    console.log(this.state.cartItem);
    const { bread } = this.props;

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
              id={good.id}
              price={good.price}
              ingredient_category_id={good.ingredient_category_id}
              handleAddToCart={this.handleAddToCart}
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
          <button className="looksGood" onClick={this.props.looksgood}>
            Looks Good
          </button>
        </div>
      </div>
    );
  }
}
