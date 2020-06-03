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
    nutrition: [],
    prev: [],
    next: [],
    id: "",
  };

  componentDidMount() {
    fetch(`${URL}/product/sandwich/?product_id=${this.props.match.params.key}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          sandwich: res.product,
          nutrition: res.nutrition,
          id: this.props.match.params.key,
        })
      );

    fetch(
      `http://10.58.1.217:8000/product/sandwich/?product_id=${
        this.props.match.params.key - 1
      }`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ prev: res.product }));
  }
  render() {
    const { sandwich } = this.state;
    const { nutrition } = this.state;
    const { id } = this.state;

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
                  kcal={nutrition.calories_kcal}
                />
                <OrderButton id={id} />
                <MenuSelector
                  image={sandwich.image_url}
                  des={sandwich.description}
                  name={sandwich.name}
                  // prev={}
                  // next={}
                />
                <MenuRecipe />
                <CommonChart
                  weight={nutrition.size_g}
                  kcal={nutrition.calories_kcal}
                  sugar={nutrition.sugar_g}
                  protein={nutrition.protein_g}
                  fat={nutrition.saturated_fat_g}
                  sodium={nutrition.sodium_g}
                />
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
