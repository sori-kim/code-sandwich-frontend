import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderBox from "../../components/OrderBox/OrderBox";
import Ingredient from "./Ingredient/Ingredient";
import Bread from "../Custom/Bread/Bread";
import { Link } from "react-router-dom";
import { URL } from "../../Config";
import "./Custom.scss";

export default class Custom extends React.Component {
  state = {
    isActive: false,
    isShown: "noshow_bread",
    customized: [],
    product_name: "",
    page_key: [],
    default_ingredients: [],
    default_bread: [],
    default_topping: [],
    added_bread: [],
    added_topping: [],
    added_ingredients: [],
    image_url: [],
    bread: [],
    cart: [],
    topping: [],
  };

  componentDidMount() {
    const topping_LS = JSON.parse(localStorage.getItem("testObject"));
    const bread_LS = JSON.parse(localStorage.getItem("newBread"));
    fetch(
      `${URL}/product/sandwich/customization/?product_id=${this.props.match.params.key}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          added_bread: bread_LS,
          bread: res.all_bread.filter(
            (bread) => bread.name.includes("top") || bread.name.includes("플랫")
          ),
          default_ingredients: res.default_ingredients,
          default_topping: res.default_ingredients.slice(
            1,
            res.default_ingredients.length - 1
          ),
          product_name: res.product_name,
        });
        //로컬스토리지에 저장된 토핑이 있을때
        if (topping_LS !== null && bread_LS === null) {
          this.setState({
            added_topping: topping_LS,
            product_name: res.product_name,
            customized: res.default_ingredients.concat(topping_LS),
            page_key: this.props.match.params.key,
            bread: res.all_bread.filter(
              (bread) =>
                bread.name.includes("top") || bread.name.includes("플랫")
            ),
          }); //로컬스토리지에 저장된 토핑이 없을때
        } else if (topping_LS === null) {
          this.setState({
            customized: res.default_ingredients,
            page_key: this.props.match.params.key,
          }); // 로컬스토리지에 저장된 빵이 있을때
        } else if (bread_LS !== null && topping_LS !== null) {
          this.setState({
            added_bread: bread_LS,
            customized: bread_LS.concat(
              this.state.default_topping.concat(topping_LS)
            ),
            page_key: this.props.match.params.key,
          });
        }
      });
  }
  // arr = newBread.concat(default_topping); //추가한 빵 + 디폴트 토핑
  // if (customized !== null) {
  //   this.setState({
  //     customized: arr.concat(customized),
  //   });
  // } else {
  //   this.setState({ customized: arr });
  // }

  //빵선택했을때 변경사항 반영되어 커스텀 화면으로 돌아오기
  looksgood = (newBread) => {
    this.setState({
      isShown: "noshow_bread",
      added_bread: newBread,
      customized: newBread.concat(
        this.state.default_ingredients.slice(
          1,
          this.state.default_ingredients.length - 1
        )
      ),
    });

    localStorage.setItem("newBread", JSON.stringify(newBread));
    // let arr = [];
    // if (customized == null) {
    //   //브레드 먼저 고를때
    //   arr = newBread.concat(default_topping);
    // } else {
    //   //토핑을 선택한 뒤에 브레드를 고를때
    //   arr = newBread.concat(customized);
    // }

    // arr = newBread.concat(default_topping); //추가한 빵 + 디폴트 토핑
    // if (customized !== null) {
    //   this.setState({
    //     customized: arr.concat(customized),
    //   });
    // } else {
    //   this.setState({ customized: arr });
    // }
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
        added_ingredients: this.state.customized,
        product_name: product_name,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.goToShop.call(this);
      }
    });
  };

  /*goToTopping = () => {
    this.props.history.push("/toppings");
  };*/

  render() {
    console.log("this.state", this.state);

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
            >
              {this.state.customized.map((things) => (
                <Ingredient
                  name={things.name}
                  image_url={things.image_url}
                  handleIngredients={this.handleIngredients}
                  price={things.price}
                  ingredient_category_id={things.ingredient_category_id}
                />
              ))}
            </div>
            <div className="orderbox_wrapper">
              <Link
                className="linkOrder"
                to={`/toppings/${this.state.page_key}`}
              >
                <OrderBox
                  handleOrder={this.handleOrder}
                  goToTopping={this.goToTopping}
                  orderName={this.state.product_name}
                />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
