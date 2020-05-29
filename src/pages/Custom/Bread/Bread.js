import React from "react";
import OrderBox from "../../../components/OrderBox/OrderBox";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Bread.scss";
export default class Bread extends React.Component {
  state = {
    isActive: false,
  };
  handleBurn = () => {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  };

  render() {
    return (
      <div className="Bread">
        <div className="title">Italian</div>
        <div className="cals">360 Cals</div>
        <img
          className="bread"
          onClick={this.handleBread}
          src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large.png"
          alt="bread"
        />
        <a onClick={this.handleBurn}>
          <FontAwesomeIcon
            icon={faBurn}
            size="2x"
            color="white"
            className={this.state.isActive ? "burn" : "not_burn"}
          />
        </a>
      </div>
    );
  }
}
