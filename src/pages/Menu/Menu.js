import React, {Component} from "react";
import MenuList from "./MenuList/MenuList";
import TopImage from "./TopImage/TopImage";
import Middle from "./Middle/Middle";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./Menu.scss";


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
    /*기존 코드
    componentDidMount(){
        fetch('http://localhost:3000/data/data.json')
        .then(response => response.json())
        .then(response => this.setState({sandwich: response.data}))
    }*/

    componentDidMount() {
      fetch("/data/data.json")
        .then((res) => res.json())
        .then((res) => this.setState({ sandwich: res.data }))
        .then((res) =>
          this.setState({
            new_sandwich: this.state.sandwich,
            cl_sandwich: this.state.sandwich.filter((res) =>
              res.id.includes("cl")
            ),
            fl_sandwich: this.state.sandwich.filter((res) =>
              res.id.includes("fl")
            ),
            pm_sandwich: this.state.sandwich.filter((res) =>
              res.id.includes("pm")
            ),
            bf_sandwich: this.state.sandwich.filter((res) =>
              res.id.includes("bf")
            ),
          })
        );
    }

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

    render(){
      /*기존 코드
        const { sandwich } = this.state;
      */
     console.log(this.state)
     const {
      sandwich,
      new_sandwich,
      cl_sandwich,
      fl_sandwich,
      pm_sandwich,
      bf_sandwich,
    } = this.state;

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
        )
    }
}

export default Menu;