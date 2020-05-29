import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuRecipe.scss";

class MenuRecipe extends React.Component {
  render() {
    return (
      <div className="MenuRecipe">
        <div className="recipe">
          <ul>
            <li>
              <div className="recipe-img">
                <img
                  alt="각종야채"
                  src="http://subway.co.kr/images/menu/img_recipe12.jpg"
                />
              </div>
              <p>각종 야채</p>
            </li>
            <li>
              <div className="recipe-img">
                <img
                  alt="치즈2장"
                  src="http://subway.co.kr/images/menu/img_recipe04.jpg"
                />
              </div>
              <p>치즈 2장</p>
            </li>
            <li>
              <div className="recommand">추천</div>
              <div className="recipe-img">
                <img
                  alt="레드와인식초"
                  src="http://subway.co.kr/images/menu/img_recipe_s05.jpg"
                />
              </div>
              <p>레드와인식초</p>
            </li>
          </ul>
        </div>
        <div className="excluding">
          <p className="excluding-info">
            * 매장에 따라 추천소스는 상이할 수 있습니다.
            <br />* 써브웨이가 제공하는 신선한 야채가 정량으로 제공됩니다.
            <br />* 제품 사진은 이미지컷입니다.
          </p>
        </div>
      </div>
    );
  }
}

export default MenuRecipe;
