import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ToppingBox from "./ToppingBox";
import { Link } from "react-router-dom";
import { URL } from "../../Config";
import "./Toppings.scss";
import { faFileExcel, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import { getAllByPlaceholderText } from "@testing-library/react";

class Toppings extends Component {
  state = {
    toppings: [],
    selectedToppings: [],
    isActive: 2,
    addedToppings: [],
    addedToppingList: [],
  };

  getData = () => {
    fetch(`${URL}/product/sandwich/customization/topping/`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          toppings: res.all_toppings,
          page_key: this.props.match.params.key,
          selectedToppings: res.all_toppings.filter(
            (topping) => topping.ingredient_category_id === 2
          ),
        })
      );
  };

  componentDidMount = () => {
    this.getData();
  };

  handleClick = (clickedTopping) => {
    const { toppings } = this.state;
    this.setState({
      selectedToppings: toppings.filter(
        (item) => item.ingredient_category_id === clickedTopping
      ),
      isActive: clickedTopping,
    });
  };

  clickToppings = (name, listName) => {
    const { addedToppings, addedToppingList } = this.state;

    //선택한 토핑이 이미 존재하면 제거하고
    if (
      addedToppings.some((el) => el.id === name.id) &&
      addedToppingList.some((el) => el.name === listName.name)
    ) {
      alert("선택한 토핑을 제거합니다");
      let toRemove = name;
      let index = addedToppings.indexOf(toRemove);
      addedToppings.splice(index, 1);

      let toRemoveRe = listName;
      let indexRe = addedToppingList.indexOf(toRemoveRe);
      addedToppingList.splice(indexRe, 1);

      //존재하지 않으면 AddedToppings 에 추가한다.
    } else {
      this.setState(
        {
          addedToppings: addedToppings.concat(name),
          addedToppingList: addedToppingList.concat(listName),
        },
        () => console.log("전체 :", this.state.addedToppingList)
      );
    }
  };

  goToCustom = () => {
    this.props.history.push("/custom");
  };

  sendTopping = () => {
    //토핑추가하기를 누르면 실행될 함수
    //custom 페이지로 이동하면서 고른 토핑을 펼쳐서 보여준다.
    localStorage.setItem(
      "testObject",
      JSON.stringify(this.state.addedToppings)
    );
    this.goToCustom.call(this);
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
                  image_url={topping.image_url}
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
                <div className="title"> 추가된 토핑</div>
                <div>
                  {/* <div className="price">11,000원</div>
                  <div className="cals">520 Cals</div> */}
                </div>
                <ul className="size">
                  {" "}
                  {this.state.addedToppingList.map((topping) => (
                    <li>{topping}</li>
                  ))}
                </ul>
                <div
                  className={`button_wrapper ${
                    this.state.activeOrderBox === 1 ? "activeOrder" : ""
                  }`}
                >
                  <Link to={`/custom/${this.state.page_key}`}>
                    <button onClick={this.sendTopping}>토핑 추가</button>
                  </Link>
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
