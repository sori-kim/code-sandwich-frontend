import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderBox from "../../components/OrderBox/OrderBox";
import Ingredient from "./Ingredient/Ingredient";
import Bread from "../Custom/Bread/Bread";
import { URL } from "../../Config";
import "./Custom.scss";

export default class Custom extends React.Component {
  state = {
    isActive: false,
    isShown: "noshow_bread",
    customized: [],
    default_ingredients: [],
    added_ingredients: [],
    image_url: [],
    bread: [],
    cart: [],
  };

  componentDidMount() {
    let received_topping = localStorage.getItem("testObject");
    if (received_topping !== null) {
      this.setState({
        added_ingredients: this.state.added_ingredients.concat(
          received_topping
        ),
      });
    }
    fetch(
      `${URL}/product/sandwich/customization/?product_id=${this.props.match.params.key}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          default_ingredients: res.default_ingredients,
          customized: res.default_ingredients,
          bread: res.all_bread.filter(
            (bread) => bread.name.includes("top") || bread.name.includes("플랫")
          ),
        })
      );
  }

  //Looks Good 버튼 눌렀을때 빵 선택 완료되고 커스텀 페이지로 돌아오기
  /*소리 looksgood
  looksgood = (newBread) => {
    const { default_ingredients, added_ingredients } = this.state;
    this.setState({
      isShown: "noshow_bread",
      added_ingredients: newBread,
      customized: default_ingredients,
    });
    if (default_ingredients.some((el) => el.ingredient_category_id === 1)) {
      let toRemove = newBread;
      let indexTop = 0;
      let indexBottom = default_ingredients.length - 1;

      this.setState({ customized: default_ingredients });
      let breadBot = default_ingredients.splice(
        indexBottom,
        1,
        this.state.added_ingredients
      );
     this.setState({ customized: custom });
    }
  };*/
  looksgood = (newBread) => {
    const { default_ingredients, added_ingredients } = this.state;
    this.setState({
      isShown: "noshow_bread",
      added_ingredients: newBread,
    });
    let arr = default_ingredients.slice(1, default_ingredients.length - 1);
    arr = newBread.concat(arr);
    this.setState({
      customized: arr,
    });
  };

  //재료 클릭했을때 빵 목록 보여주기
  handleIngredients = () => {
    this.setState({
      isShown: "show_bread",
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="Custom">
          <div className="custom_wrapper">
            <Bread
              isShown={this.state.isShown === "show_bread"}
              looksGood={this.looksgood}
              bread={this.state.bread}
            />
            <div
              className={
                this.state.isShown === "show_bread"
                  ? "away_ingredients"
                  : "ingredients"
              }
              onClick={this.handleBreadFetch}
            >
              {this.state.customized.map((things) => (
                <Ingredient
                  name={things.name}
                  image={things.image_url}
                  handleIngredients={this.handleIngredients}
                  price={things.price}
                  ingredient_category_id={things.ingredient_category_id}
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
