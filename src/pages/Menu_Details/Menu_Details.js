import React from "react";
import { Link, withRouter } from "react-router-dom";
import MenuNav from "./Menu-nav/MenuNav";
import MenuTitle from "./MenuTitle/MenuTitle";
import OrderButton from "./OrderButton/OrderButton";
import MenuSelector from "./MenuSelector/MenuSelector";
import MenuRecipe from "./MenuRecipe/MenuRecipe";
import CommonChart from "./CommonChart/CommonChart";
import CommonRules from "./CommonRules/CommonRules";
import "./Menu_Details.scss";

class Menu_Details extends React.Component {
  state = {
    sandwich: [],
    nutirion: [],
  };

  componentDidMount() {
    fetch("http://10.58.3.228:8000/product/sandwich/?product_id=13")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ sandwich: res.product, nutirion: res.nutirion })
      );
    // .then((res) => this.setState({ nutirion: res.nutirion }));
  }

  render() {
    const { sandwich } = this.state;
    const { nutirion } = this.state;
    return (
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
        </div>
      </div>
    );
  }
}

export default Menu_Details;
