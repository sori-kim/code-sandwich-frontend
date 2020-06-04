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
    bread: [],
    cart: [],
  };

  componentDidMount() {
    fetch(
      `http://10.58.1.217:8000/product/sandwich/customization/?product_id=${this.props.match.params.key}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          default_ingredients: res.default_ingredients,
        })
      );
  }

  //Looks Good 버튼 눌렀을때 빵 선택 완료되고 커스텀 페이지로 돌아오기
  looksgood = () => {
    this.setState({
      isShown: "noshow_bread",
    });
  };

  //재료 클릭했을때 빵 목록 보여주기
  handleIngredients = () => {
    this.setState({
      isShown: "show_bread",
    });
  };

  //빵 데이터 fetch
  handleBreadFetch = () => {
    fetch("http://10.58.1.217:8000/product/sandwich/customization/bread/")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          bread: res.all_bread.filter(
            (bread) => bread.name.includes("top") || bread.name.includes("플랫")
          ),
        })
      );
  };

  render() {
    return (
      <>
        <Header />
        <div className="Custom">
          <div className="custom_wrapper">
            <Bread
              isShown={this.state.isShown === "show_bread"}
              looksgood={this.looksgood}
              bread={this.state.bread}
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
