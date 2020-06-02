import React, { Component } from "react";
import MenuList from "./MenuList/MenuList";
import TopImage from "./TopImage/TopImage";
import Middle from "./Middle/Middle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Config from "../../Config";
import "./Menu.scss";


//API주소가 필요한 곳에 Config.해당 api 변수 이름을 넣어주면 됨.

class Menu extends Component {
  state = {
    sandwich: [],
    filtered_sandwich: [],
    isActive: 0
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(Config.API)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          sandwich: res.sandwiches,
          filtered_sandwich: res.sandwiches
        })
      )
  }

  handleOnClick = (menu) => {
    console.log("menu : ", menu)
    const { sandwich, filtered_sandwich } = this.state;
    if(menu === 0) {
      this.setState({
        filtered_sandwich: sandwich,
        isActive: 0
      })
    } else {
      this.setState({
        filtered_sandwich: sandwich.filter(
          (item) => item.subcategory_id === menu
        ),
        isActive: menu,
      })
    }
  }
 

  render() {
    console.log(Config)
    const {
      sandwich,
      filtered_sandwich,
      isActive,
    } = this.state;
    console.log(this.state)

    return (
      <div>
        <Header />
        <div className="menuWrap">
          <div className="menuTop">
            <TopImage />
          </div>
          <div className="menuMiddle">
            <Middle
              handleOnClick={this.handleOnClick}
              sandwich={sandwich}
              filtered_sandwich={filtered_sandwich}
              isActive={isActive}
            />
          </div>
          <div className="menuLine">
            <MenuList sandwich={filtered_sandwich} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Menu;
