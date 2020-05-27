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
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/data.json')
        .then(response => response.json())
        .then(response => this.setState({sandwich: response.data}))
    }
        

    render(){
        const { sandwich } = this.state;
        return(
          <div>
            <Header />
            <div className="menuWrap">
                <TopImage />
                <Middle />
              <div className='menuLine'>
                <MenuList sandwich={sandwich} />
              </div>
            </div>
            <Footer />
          </div>
        )
    }
}

export default Menu;