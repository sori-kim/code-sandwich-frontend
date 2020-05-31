import React, {Component} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderDetail from "./OrderDetail";
import OrderSummary from "./OrderSummary";
import "./Shop.scss";

class Shop extends Component{
    render(){
        return(
            <div className="shop">
                <Header />
                <hr />
                <div className="shopWrap">
                    <div className="leftSection">
                      <h1>Your Items</h1>
                      <OrderDetail />
                      <div className="instruction">
                          <h2>Special Instructions</h2>
                          <input type="text" maxLength="144" placeholder="Enter Instructions here"></input>
                          <p>144</p>
                      </div>
                    </div>
                    <div className="rightSection">
                        <OrderSummary />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Shop;