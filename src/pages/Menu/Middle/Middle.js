import React, { Component } from "react";
import "./Middle.scss";

class Middle extends Component {
    render(){
      const {
        sandwich,
        new_sandwich,
        cl_sandwich,
        fl_sandwich,
        pm_sandwich,
        bf_sandwich,
      } = this.props;

        return(
            <div className="middle">
              <ul>
                <li onClick={this.props.handleOnClick} className={new_sandwich === sandwich ? "isActive" : "notActive"}><span>All</span></li>
                <li onClick={this.props.handleOnClick} className={new_sandwich === cl_sandwich ? "isActive" : "notActive"}><span >클래식</span></li>
                <li onClick={this.props.handleOnClick} className={new_sandwich === fl_sandwich ? "isActive" : "notActive"}><span>프레쉬&라이트</span></li>
                <li onClick={this.props.handleOnClick} className={new_sandwich === pm_sandwich ? "isActive" : "notActive"}><span>프리미엄</span></li>
                <li onClick={this.props.handleOnClick} className={new_sandwich === bf_sandwich ? "isActive" : "notActive"}><span>아침메뉴</span></li>
                <li onClick={this.props.handleOnClick} className='plus'><span>추가메뉴</span></li>
              </ul>
            </div>
        )
    }
}

export default Middle;
