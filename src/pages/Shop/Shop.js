import React, {Component} from "react";
import "./Shop.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import OrderDetail from "./OrderDetail";

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
                    </div>
                    <div className="rightSection">
                        오른쪽 예정
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Shop;