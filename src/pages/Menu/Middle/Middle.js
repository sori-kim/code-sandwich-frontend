import React, { Component } from "react";
import "./Middle.scss";

class Middle extends Component {
    render(){
      const {
        isActive,
        handleOnClick
      } = this.props;

        return(
            <div className="middle">
              <ul>                
                <li onClick={ () => handleOnClick(0)} className={isActive === 0 ? "isActive" : "notActive"}><span>All</span></li>
                <li onClick={ () => handleOnClick(1)} className={isActive === 1 ? "isActive" : "notActive"}><span>클래식</span></li>
                <li onClick={ () => handleOnClick(2)} className={isActive === 2 ? "isActive" : "notActive"}><span>프레쉬&라이트</span></li>
                <li onClick={ () => handleOnClick(3)} className={isActive === 3 ? "isActive" : "notActive"}><span>프리미엄</span></li>
                <li onClick={ () => handleOnClick(4)} className={isActive=== 4 ? "isActive" : "notActive"}><span>아침메뉴</span></li>
                <li onClick={ () => handleOnClick(5)} className='plus'><span>추가메뉴</span></li>
              </ul>
            </div>
        )
    }
}

export default Middle;
