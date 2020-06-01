import React, { Component } from "react";
import MenuList from "./MenuList/MenuList";
import TopImage from "./TopImage/TopImage";
import Middle from "./Middle/Middle";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Menu.scss";
​
class Menu extends Component {
    state = {
        sandwich: [],
        new_sandwich: [],
        cl_sandwich: [],
        fl_sandwich: [],
        pm_sandwich: [],
        bf_sandwich: [],
        id: ""
    }
​
    componentDidMount() {
      fetch("http://10.58.3.228:8000/product/sandwich")
        .then((res) => res.json())
        .then((res) => this.setState({ sandwich: res.sandwiches}))
        .then((res) =>
          this.setState({
            new_sandwich: this.state.sandwich,
            cl_sandwich: this.state.sandwich.filter((res) =>
              res.subcategory_id === 1
            ),
            fl_sandwich: this.state.sandwich.filter((res) =>
              res.subcategory_id === 2
            ),
            pm_sandwich: this.state.sandwich.filter((res) =>
              res.subcategory_id ===3
            ),
            bf_sandwich: this.state.sandwich.filter((res) =>
              res.subcategory_id === 4
            ),
          })
        )
    }
​
    
    handleOnClick = (e) => {
      const category = e.target.innerText;
      let arr = [];
      if(category === "All"){
        arr = this.state.sandwich;
      } else if (category === "클래식") {
        arr = this.state.cl_sandwich;
      } else if (category === "프레쉬&라이트") {
        arr = this.state.fl_sandwich;
      } else if (category === "프리미엄") {
        arr = this.state.pm_sandwich;
      } else if (category === "아침메뉴"){
        arr = this.state.bf_sandwich;
      }
      this.setState({ new_sandwich: arr });
    };
    
​
    render(){
     const {
      sandwich,
      new_sandwich,
      cl_sandwich,
      fl_sandwich,
      pm_sandwich,
      bf_sandwich,
    } = this.state;
        console.log(this.state)
        return(
          <div>
            <Header />
            <div className="menuWrap">
              <div className="menuTop">
                <TopImage />
              </div>
              <div className="menuMiddle">
                <Middle sandwich={sandwich} new_sandwich={new_sandwich} cl_sandwich={cl_sandwich} fl_sandwich={fl_sandwich} pm_sandwich={pm_sandwich} bf_sandwich={bf_sandwich} handleOnClick={this.handleOnClick} />
              </div>
              <div className='menuLine'>
                <MenuList sandwich={new_sandwich} />
              </div>
            </div>
            <Footer />
          </div>
    );
  }
}
​
export default Menu;