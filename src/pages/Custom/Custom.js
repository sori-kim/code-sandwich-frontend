import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderBox from "../../components/OrderBox/OrderBox";
import Ingredient from "./Ingredient/Ingredient";
import Bread from "../Custom/Bread/Bread";
import "./Custom.scss";

export default class Custom extends React.Component {
  state = {
    isActive: false,
    isShown: "noshow_bread",
    default_ingredients: [],
    image_url: [],
  };

  componentDidMount() {
    fetch(
      `http://10.58.1.217:8000/product/sandwich/customization/?product_id=${this.props.match.params.key}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({ default_ingredients: res.default_ingredients })
      );
  }

  looksgood = () => {
    this.setState({
      isShown: "noshow_bread",
    });
  };

  handleIngredients = () => {
    this.setState({
      isShown: "show_bread",
    });
  };

  render() {
    console.log(this.state.default_ingredients);

    return (
      <>
        <Header />
        <div className="Custom">
          <div className="custom_wrapper">
            <Bread
              isShown={this.state.isShown === "show_bread"}
              handleGood={this.looksgood}
            />
            <div
              className={
                this.state.isShown === "show_bread"
                  ? "away_ingredients"
                  : "ingredients"
              }
            >
              {this.state.default_ingredients.map((things) => (
                <Ingredient
                  image={things.image_url}
                  handleIngredients={this.handleIngredients}
                />
              ))}
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
