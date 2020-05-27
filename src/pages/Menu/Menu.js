import React, {Component} from "react";
import "./Menu.scss";
import MenuList from "./MenuList/MenuList";
import TopImage from "./TopImage/TopImage";
import Middle from "./Middle/Middle";


class Menu extends Component {
    state = {
        sandwich: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/data.json', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => this.setState({sandwich: response.data}))
    }

    render(){
        console.log(this.state)
        return(
            <div className="menuWrap">
                <TopImage />
                <Middle />
              <div className='menuLine'>
                <MenuList sandwich={this.state.sandwich} />
              </div>
            </div>
        )
    }
}

export default Menu;