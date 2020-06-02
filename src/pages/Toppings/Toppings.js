import React, { Component } from "react";
import ToppingBox from "./ToppingBox";
import "./Toppings.scss";

class Toppings extends Component {
  state = {
    toppings: [],
    selectedToppings: [],
    isActive: "meat",
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          toppings: res.data,
          selectedToppings: this.state.toppings.filter((item) =>
            item.id.include("a")
          ),
        })
      );
  }

  handleClick = (clickedTopping) => {
    this.setState({
      selectedToppings: this.state.toppings.filter((item) =>
        item.id.includes(clickedTopping)
      ),
      isActive: clickedTopping,
    });
  };

  render() {
    const { selectedToppings } = this.state;

    return (
      <div className="Toppings">
        <div className="main">
          <ul className="selectTab">
            <li onClick={() => this.handleClick("meat")} className="meat">
              Meat
            </li>
            <li onClick={() => this.handleClick("cheese")} className="cheese">
              Cheese
            </li>
            <li onClick={() => this.handleClick("veggies")} className="veggies">
              Veggies
            </li>
            <li onClick={() => this.handleClick("sauces")} className="sauces">
              Sauces
            </li>
          </ul>
          {selectedToppings.map((topping) => {
            return (
              <ToppingBox
                image={selectedToppings.image}
                name={selectedToppings.name}
                kcal={selectedToppings.kcal}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Toppings;
