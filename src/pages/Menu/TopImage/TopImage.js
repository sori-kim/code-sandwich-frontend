import React, {Component} from "react";
import "./TopImage.scss";

class TopImage extends Component {
    
    render(){
        return(
          <div className="topImage">
            <div className="topNav">
              <ul>
                <li>샌드위치</li>
                <li>랩</li>
                <li>찹샐러드</li>
                <li>스마일 썹</li>
                <li>단체메뉴</li>
              </ul>
            </div>
            <hr />
            <div className="title">
              <h2>Sandwich</h2>
              <p>전세계 넘버원 브랜드 Subway!
                <br />50년 전통의 세계 최고의 샌드위치를 맛보세요!
              </p>
            </div>
          </div>
        )
    }
}

export default TopImage;