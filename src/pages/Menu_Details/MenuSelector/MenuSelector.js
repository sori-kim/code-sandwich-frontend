import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuSelector.scss";

class MenuSelector extends React.Component {
  state = {
    hoverLeft: true,
    hoverRight: true,
  };

  hoverHandlerLeft = (state) => {
    this.setState({ hoverLeft: !this.state.hoverLeft });
  };

  hoverHandlerRight = (state) => {
    this.setState({ hoverRight: !this.state.hoverRight });
  };

  render() {
    return (
      <div className="menu-content">
        <div className="MenuSelector">
          <div className="menu-info">
            <div className="menu-img">
              <img
                alt="vegi"
                src="http://subway.co.kr/images/menu/sandwich_fl06.jpg"
              />
              <div className="MenuRotate">
                <div className="menu_nav_prev">
                  <div
                    className={
                      this.state.hoverLeft ? "rotate-img" : "rotate-img-change"
                    }
                  >
                    <img
                      alt="이전메뉴"
                      src="http://www.subway.co.kr/images/menu/sandwich_fl05.jpg"
                    />
                  </div>
                </div>
                <div className="menu_nav_next">
                  <div
                    className={
                      this.state.hoverRight
                        ? "rotate-img"
                        : "rotate-img-change-next"
                    }
                  >
                    <img
                      alt="다음메뉴"
                      src="http://www.subway.co.kr/images/menu/sandwich_fl01.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="#url"
              className="arr-prev"
              onMouseOver={this.hoverHandlerLeft}
              onMouseLeave={this.hoverHandlerLeft}
            >
              <span>터키</span>
            </Link>
            <Link
              to="#url"
              className="arr-next"
              onMouseOver={this.hoverHandlerRight}
              onMouseLeave={this.hoverHandlerRight}
            >
              <span>로세터리 치킨</span>
            </Link>
          </div>
          <p className="summary">
            갓 구운 빵과 신선한 7가지 야채로 즐기는 깔끔한 한끼
          </p>
        </div>
      </div>
    );
  }
}

export default MenuSelector;
