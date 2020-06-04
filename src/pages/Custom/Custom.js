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
    product_name: "",
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
          product_name: res.product_name,
          customized: res.default_ingredients,
          bread: res.all_bread.filter(
            (bread) => bread.name.includes("top") || bread.name.includes("플랫")
          ),
        })
      );
  }

  //빵선택했을때 변경사항 반영되어 커스텀 화면으로 돌아오기
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

  goToShop = () => {
    this.props.history.push("/shop");
  };

  //장바구니 추가 버튼 클릭했을때 POST요청 보내기
  handleOrder = () => {
    const { default_ingredients, added_ingredients, product_name } = this.state;
    fetch(`${URL}/cart/modification`, {
      method: "POST",
      //로그인한 유저의 토큰 LS에서 가져오는것 추가예정
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFhYUBhYWEuY29tIn0.id-qdXSVQKGuJOYfS1w97oQCih-lgNJLzbO4WAuM3kc",
      },
      body: JSON.stringify({
        default_ingredients: default_ingredients,
        added_ingredients: added_ingredients,
        product_name: product_name,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.goToShop.call(this);
      }
    });
  };

  render() {
    console.log(this.state);
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
              <OrderBox handleOrder={this.handleOrder} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
