import React, { Component } from "react";
// import ToppingBox from "./ToppingBox;
// import "./Toppings.scss";

class Toppings extends Component {
  state = {
    toppings: [],
    basicToppings: [],
    meat: [],
    cheese: [],
    veggies: [],
    sauces: [],
    seasoning: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ toppings: res.data }))
      .then((res) =>
        this.setState({
          meat: this.state.toppings.filter((i) => i.id.includes("cl")),
          cheese: this.state.toppings.filter((i) => i.id.includes("fl")),
          veggies: this.state.toppings.filter((i) => i.id.includes("pm")),
          sauces: this.state.toppings.filter((i) => i.id.includes("bf")),
          seasoning: this.state.toppings.filter((i) => i.id.includes("cl")),
        })
      );
  }

  handleClick = (e) => {
    const category = e.target.innerText;
    const arr = [];
    if (category === "Meat") {
      arr = this.state.meat;
    } else if (category === "Cheese") {
      arr = this.state.cheese;
    } else if (category === "Veggies") {
      arr = this.state.veggies;
    } else if (category === "Sauces") {
      arr = this.state.sauces;
    } else if (category === "Seasoning") {
      arr = this.state.seasoning;
    }
    this.setState({ basicToppings: arr });
  };

  render() {
    const {
      basicToppings,
      meat,
      cheese,
      veggies,
      sauces,
      seasoning,
    } = this.state;

    // const toppingMap = this.state.basicToppings.map((options) => {
    //   return (
    //     <ToppingList
    //       key={options.id}
    //       image={options.image}
    //       name={options.name}
    //       cal={options.kcal}
    //     />
    //   );
    // });

    return (
      <div className="Toppings">
        <div className="main">
          <ul className="selectTab">
            <li onClick={this.handleClick} className="meat">
              Meat
            </li>
            <li onClick={this.handleClick} className="cheese">
              Cheese
            </li>
            <li onClick={this.handleClick} className="veggies">
              Veggies
            </li>
            <li onClick={this.handleClick} className="sauces">
              Sauces
            </li>
            <li onClick={this.handleClick} className="seasoning">
              Seasoning
            </li>
          </ul>
          {/* {toppingMap} */}
        </div>
      </div>
    );
  }
}

export default Toppings;
