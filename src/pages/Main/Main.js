import React from "react";
import Header from "../../components/Header/Header";
import MenuSection from "../Main/MenuSection/MenuSection";
import Event from "./Event/Event";
import Footer from "../../components/Footer/Footer";
import "./Main.scss";
import AutoPlay from "./AutoPlay/AutoPlay";
import map from "../../images/icon_map.png";
import franchise from "../../images/icon_franchise.png";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="Main">
          <div className="main_button">
            <div className="button_order">
              <img src={franchise} alt="icon" />
              <p>주문하기</p>
            </div>
            <div className="button_map">
              <p>매장찾기</p>
              <img src={map} alt="icon" />
            </div>
          </div>
          <AutoPlay />
          <MenuSection />
          <Event />
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
