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
  };

  handleToppings = (num) => {
    this.setState({ activeTab: num });
  };

  render() {
    console.log(toppings[this.state.activeTab]);
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
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large.png"
                alt="bread"
              />
              <img
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10133_customizer_large.png"
                alt="topping"
              />
              <img
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10132_customizer_large.png"
                alt="topping"
              />
              <img
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_Bacon_customizer_large.png"
                alt="topping"
              />
              <img
                src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large_bottom.png"
                alt="topping"
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
