import React, {Component} from "react";
import MenuBox from "../MenuBox/MenuBox";
import "./MenuList.scss";

class MenuList extends Component {
    render(){
        return( 
        <div className='menuList'>
            {this.props.sandwich.map((sandwich)=> {
                return <MenuBox id={sandwich.id} image={sandwich.image} name={sandwich.name} ename={sandwich.ename} kcal={sandwich.kcal} /> 
            })}
        </div>
        )
    }
}

export default MenuList