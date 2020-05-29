import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderBox from "../../components/OrderBox/OrderBox";
import { faBurn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Custom.scss";

export default class Custom extends React.Component {
  state = {
    isActive: false,
  };

  handleOnClick = () => {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="Custom">
          <div className="custom_wrapper">
            <div className="custom_image">
              <a onClick={this.handleOnClick}>
                <FontAwesomeIcon
                  icon={faBurn}
                  size="2x"
                  color="white"
                  className={this.state.isActive ? "burn" : "not_burn"}
                />
              </a>
              <img src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large.png" />
              <img src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10133_customizer_large.png" />
              <img src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/OptionsIds/10132_customizer_large.png" />
              <img src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_Bacon_customizer_large.png" />
              <img src="https://media.subway.com/digital/Account_Updates/Assets/App-Base/Web_Images/Subway/en-us/Options/o_BreadItalian_customizer_large_bottom.png" />
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
