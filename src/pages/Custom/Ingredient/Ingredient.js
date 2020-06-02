import React from "react";
import "./Ingredient.scss";

export default class Ingredients extends React.Component {
  render(props) {
    console.log(this.props);
    return (
      <div className="Ingredient">
        <img
          src={this.props.image}
          onClick={this.props.handleIngredients}
          alt="toppings"
        />
      </div>
    );
  }
}
