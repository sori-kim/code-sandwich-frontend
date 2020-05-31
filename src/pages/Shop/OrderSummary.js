import React, {Component} from "react";
import "./OrderSummary.scss"

class OrderSummary extends Component {
    render(){
        return(
            <div className="orderSummary">
                <h2 className="summaryH">Order Summary</h2>
                <h2 className="pick">Picking up from</h2>
            </div>
        )
    }
}

export default OrderSummary;