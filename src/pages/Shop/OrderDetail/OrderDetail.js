import React, {Component} from "react";
import "./OrderDetail.scss"

class OrderDetail extends Component {
    render(){
        return(
            <div className="orderDetail">
                <div className="orderHeader">
                  <div className="menuName">
                  Footlong Chicken & Bacon Ranch Melt
                  </div>
                  <button className="foldingBtn">^</button>
                  <div className="eachPrice">$9.99</div>
                  <div className="btnSet">
                    <button className="modifyBtn">연필</button>
                    <button className="addBtn">+</button>
                    <button className="removeBtn">-</button>
                  </div>
                </div>
                <div className="orderMiddle">
                Italian, Not Toasted, Monterey Cheddar (shredded), 
                Lettuce, Tomatoes, Cucumbers, Green Peppers, Red Onions, Ranch
                </div>
                <div className="orderFooter">
                  <button className="mam">Make it a Meal!</button>
                  <div className="simpleInfo">+ $2.99 | 100-1880 Cals</div>
                </div>
            </div>
        )
    }
}

export default OrderDetail;