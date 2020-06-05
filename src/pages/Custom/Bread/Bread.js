import React from "react";
import Slider from "react-slick";
import BreadItem from "./BreadItem/BreadItem";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bread.scss";

export default class Bread extends React.Component {
  state = {
    isActive: false,
    cart: [],
    isModalOpen: false,
  };

  handleBurn = () => {
    this.state.isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
  };

  //클릭한 상품이 이미 배열에 존재하는지 체크
  checkProduct = (id) => {
    return this.state.cart.some((item) => {
      return item.id === id;
    });
  };

  handleAddToCart = (selectedProduct) => {
    let productID = selectedProduct.id;
    let arr = [];
    const { cart } = this.state;

    if (
      //클릭한 상품의 아이디가 카트 상품아이디와 다르면
      (!this.checkProduct(productID) && cart.length !== 0) ||
      cart.length === 0
    ) {
      arr.push(selectedProduct);
      this.setState({ cart: arr });
    } else {
      alert("빵은 한개 만 선택할 수 있습니다!");
    }
  };

  render(props) {
    console.log("this.state.cart", this.state.cart);
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
          {/* <div onClick={this.handleBurn}>
            <FontAwesomeIcon
              icon={faBurn}
              size="2x"
              color="white"
              className={`notBurn ${this.state.isActive ? "burnActive" : ""} `}
            />
          </div>
          <div className="toasted">Toasted</div> */}

          <button
            className="looksGood"
            onClick={() => {
              this.props.looksGood(this.state.cart);
            }}
          >
            Looks Good
          </button>
        </div>
      </div>
    );
  }
}
