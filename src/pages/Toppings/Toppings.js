import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ToppingBox from "./ToppingBox";
import { URL } from "../../Config";
import "./Toppings.scss";
import { faFileExcel, faBreadSlice } from "@fortawesome/free-solid-svg-icons";

class Toppings extends Component {
  state = {
    toppings: [],
    selectedToppings: [],
    isActive: 2,
    addedToppings: [],
    bigArr: [],
  };

  componentDidMount() {
    fetch(`${URL}/product/sandwich/customization/topping/`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          toppings: res.all_toppings,
          selectedToppings: res.all_toppings.filter(
            (topping) => topping.ingredient_category_id === 2
          ),
        })
      );
  }

  handleClick = (clickedTopping) => {
    const { toppings } = this.state;
    this.setState({
      selectedToppings: toppings.filter(
        (item) => item.ingredient_category_id === clickedTopping
      ),
      isActive: clickedTopping,
    });
  };

  clickToppings = (name) => {
    const { addedToppings } = this.state;

    if (addedToppings.some((el) => el.id === name.id)) {
      alert("토핑을 제거합니다");
      let toRemove = name;
      let index = addedToppings.indexOf(toRemove);
      addedToppings.splice(index, 1);

      // 삭제 로직
      //const delete = name;
    } else {
      this.setState(
        {
          addedToppings: addedToppings.concat(name),
        },
        () => console.log("전체 :", this.state.addedToppings)
      );
    }
  };

  sendTopping = () => {
    //토핑추가하기를 누르면 실행될 함수
    //custom 페이지로 이동하면서 고른 토핑을 펼쳐서 보여준다.
    localStorage.setItem(
      "testObject",
      // this.state.addedToppings
      JSON.stringify(this.state.addedToppings)
    );
  };

  render() {
    const { selectedToppings } = this.state;

    return (
      <div className="Toppings">
        <Header />
        <div className="topping-wrap">
          <div className="main">
            <ul className="selectTab">
              <li onClick={() => this.handleClick(2)} className="meat">
                Meat
              </li>
              <li onClick={() => this.handleClick(4)} className="cheese">
                Cheese
              </li>
              <li onClick={() => this.handleClick(3)} className="veggies">
                Veggies
              </li>
              <li onClick={() => this.handleClick(5)} className="sauces">
                Sauces
              </li>
            </ul>
            <div className="toppingbox-wrap">
              {selectedToppings.map((topping) => (
                <ToppingBox
                  id={topping.id}
                  image={topping.image_url}
                  name={topping.name}
                  price={topping.price}
                  clickToppings={this.clickToppings}
                  ingredient_category_id={topping.ingredient_category_id}
                  // kcal={selectedToppings.kcal}
                />
              ))}
            </div>
          </div>
          <div className="right-bar">
            <div className="AddToppingBox">
              <div className="order_wrapper">
                <div className="title">B.L.T</div>
                <div>
                  <div className="price">11,000원</div>
                  <div className="cals">520 Cals</div>
                </div>
                <div className="size"> footlong</div>
                <div
                  className={`button_wrapper ${
                    this.state.activeOrderBox === 1 ? "activeOrder" : ""
                  }`}
                >
                  <button onClick={this.sendTopping}>토핑 추가</button>
                </div>
              </div>
            </div>
            <div className="caution">
              Adults and youth (ages 13 and older) need an average of 2,000
              calories a day, and children (ages 4 to 12) need an average of
              1,500 calories a day. However, individual needs vary. Calories for
              ingredients in addition to the basic preparation are additional.
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Toppings;
