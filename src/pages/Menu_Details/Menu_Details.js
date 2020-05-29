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
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ sandwich: res.data }));
  }

  render() {
    return (
      <div className="Menu_Details">
        <div className="sub-header">
          <MenuNav />
          <div className="main">
            <div className="menu-view-wrapper">
              <MenuTitle sandwich={this.state.sandwich} />
              <OrderButton />
              <MenuSelector />
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
