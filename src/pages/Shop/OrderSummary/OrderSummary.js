import React, {Component} from "react";
import "./OrderSummary.scss"

class OrderSummary extends Component {
    render(){
        return(
            <div className="orderSummary">
              <div className="summaryHead">
                <h2 className="summaryTitle">Order Summary</h2>
                {/*<h2 className="pick">Picking up from</h2>*/}
              </div>
              <div className="summaryMiddle">
                <h2 className="deal">Deals</h2>
                <p>This best deal based on your order will be applied at checkout</p>
              </div>
              <div className="summaryBottom">
                <div className="subtotal">
                  Subtotal<span>$11.30</span>
                </div>
                <div className="salestax">
                  Sales Tax<span>$0.79</span>
                </div>
                <hr />
                <div className="total">
                  Your Total<span>$12.09</span>
                </div>
              </div>
            </div>
        )
    }
}

export default OrderSummary;