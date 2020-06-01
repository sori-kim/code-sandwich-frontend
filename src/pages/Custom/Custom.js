import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderBox from "../../components/OrderBox/OrderBox";
import Bread from "../Custom/Bread/Bread";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Custom.scss";

const toppings = {
  // 0: <Ingredients />,
  1: <Bread />,
};
export default class Custom extends React.Component {
  state = {
    isActive: false,
    activeTab: 0,
    default_ingredients: "",
    ingredient_category_id: "",
    image_url: "",
  };

  componentDidMount() {
    fetch("http://10.58.2.50:8000/product/sandwich/customization/?product_id=5")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ default_ingredients: res.default_ingredients })
      );
  }

  handleToppings = (num) => {
    this.setState({ activeTab: num });
  };

  render() {
    console.log(this.state);
    const { default_ingredients } = this.state;
    const {
      ingredient_category_id,
      image_url,
    } = this.state.default_ingredients;
    return (
      <>
        <Header />
        <div className="Custom">
          <div className="custom_wrapper">
            {toppings[this.state.activeTab]}
            <div
              className={
                this.state.activeTab === 1 ? "away_ingredients" : "ingredients"
              }
            >
              <img
                onClick={this.handleToppings}
                className="bread_top"
                src={image_url}
                alt="bread"
              />
              <img
                className="toppings"
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10133_customizer_large.png"
                alt="topping"
              />
              <img
                className="toppings"
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10132_customizer_large.png"
                alt="topping"
              />
              <img
                className="toppings"
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_Bacon_customizer_large.png"
                alt="topping"
              />
              <img
                className="bread_bottom"
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large_bottom.png"
                alt="bread"
              />
            </div>
            <div className="orderbox_wrapper">
              <OrderBox />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
