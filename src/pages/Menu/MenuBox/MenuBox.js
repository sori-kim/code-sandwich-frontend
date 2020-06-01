import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuBox.scss";
import "../../../styles/reset.scss";

class MenuBox extends Component {
  state = {
    animation: false,
  };

  animationON = (e) => {
    console.log("바뀐다");
    this.setState({ animation: true });
  };

  animationOff = (e) => {
    this.setState({ animation: false });
  };

    goToVeggie = (e) => {
      this.props.history.push("/menu_details")
    }

    render(){
      console.log(this.props)
        return(
          <div className="menuBoxWrap" onClick={this.goToVeggie} onMouseEnter={this.animationON} onMouseLeave={this.animationOff}>
            <div className='menuBox'>
              <div className ='menuImg'>
                <img alt='We are sorry' src={this.props.image} />
              </div>
              <p className='name'>{this.props.name}</p>
              <p className='ename'>{this.props.ename}</p>
              <p className={this.props.kcal > 0 ? "kcal":"nokcal"}>{this.props.kcal} kcal</p>
            </div>
            <div className={this.state.animation? "summaryBox":"noBox"}>
              <p className='nameH'>{this.props.name}</p>
              <p className='enameH'>{this.props.ename}</p>
              <p className="summary">{this.props.summary}</p>
              <img className="summaryImg" src="http://subway.co.kr/images/menu/icon_view.png" alt="자세히보기" />
            </div>
           </div>
    );
  }
}

export default withRouter(MenuBox);
