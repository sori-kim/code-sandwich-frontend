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
import "./Menu_Details.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
class Menu_Details extends React.Component {
  state = {
    sandwich: [],
    nutirion: [],
    id: "",
  };

  componentDidMount() {
    //const {params} = this.props.match
    //this.setState({ id: params.key})
    //const {num} = this.state.id
    fetch(
      `http://10.58.1.217:8000/product/sandwich/?product_id=${this.props.match.params.key}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          sandwich: res.product,
          nutirion: res.nutrition,
          id: this.props.match.params.key,
        })
      );
  }
  render() {
    const { sandwich } = this.state;
    const { nutirion } = this.state;
    const { id } = this.state;
    console.log(this.state, this.props);
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
                <OrderButton id={id} />
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
