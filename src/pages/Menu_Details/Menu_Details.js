import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import MenuNav from "./Menu-nav/MenuNav";
import MenuTitle from "./MenuTitle/MenuTitle";
import OrderButton from "./OrderButton/OrderButton";
import MenuSelector from "./MenuSelector/MenuSelector";
import MenuRecipe from "./MenuRecipe/MenuRecipe";
import CommonChart from "./CommonChart/CommonChart";
import CommonRules from "./CommonRules/CommonRules";
import Footer from "../../components/Footer/Footer";
import { URL } from "../../Config";
import "./Menu_Details.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Menu_Details extends React.Component {
  state = {
    sandwich: [],
    nutirion: [],
    id: ""
  };

 
  componentDidMount() {
    fetch(`${URL}/product/sandwich/?product_id=${this.props.match.params.key}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ sandwich: res.product, nutirion: res.nutrition })
      );
  }
  render() {
    const { sandwich } = this.state;
    const { nutirion } = this.state;

    return (
      <>
        <Header />
        <div className="Menu_Details">
          <div className="sub-header">
            <MenuNav />
            <div className="main">
              <div className="menu-view-wrapper">
                <MenuTitle
                  name={sandwich.name}
                  eng={sandwich.name_en}
                  cal={nutirion.calories_kcal}
                />
                <OrderButton />
                <MenuSelector
                  image={sandwich.image_url}
                  des={sandwich.description}
                />
                <MenuRecipe />
                <CommonChart />
                <CommonRules />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default Menu_Details;
