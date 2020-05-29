import React, { Component } from "react";
import "./MenuBox.scss";
import "../../../styles/reset.scss";

class MenuBox extends Component {
  render() {
    return (
      <div className="menuBox">
        <div className="menuImg">
          <img alt="We are sorry" src={this.props.image} />
        </div>
        <p className="name">{this.props.name}</p>
        <p className="ename">{this.props.ename}</p>
        <p className={this.props.kcal > 0 ? "kcal" : "nokcal"}>
          {this.props.kcal} kcal
        </p>
        {/*<div className='summary'>
                <p> 육즙이쫙 <br />
                풍부한 비프 스테이크의 풍미가 입안 한가득
                </p>
                </div>*/}
      </div>
    );
  }
}

export default MenuBox;
