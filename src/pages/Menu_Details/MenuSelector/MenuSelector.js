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
    //console.log("나는 프롭스", this.props);
    return (
      <div className="menu-content">
        <div className="MenuSelector">
          <div className="menu-info">
            <div className="menu-img">
              <img alt="vegi" src={this.props.image} />
              <div className="MenuRotate">
                <div className="menu_nav_prev">
                  <Link to={`/menu_details/${this.props.prevId}`}>
                    <div
                      onMouseOver={this.hoverHandlerLeft}
                      onMouseLeave={this.hoverHandlerLeft}
                      onClick={() => this.props.clickHandler(-1)}
                      className={
                        this.state.hoverLeft
                          ? "rotate-img"
                          : "rotate-img-change"
                      }
                    >
                      <img alt="이전메뉴" src={this.props.prevImage} />
                    </div>
                  </Link>
                </div>
                <div className="menu_nav_next">
                  <Link to={`/menu_details/${this.props.nextId}`}>
                    <div
                      onMouseOver={this.hoverHandlerRight}
                      onMouseLeave={this.hoverHandlerRight}
                      onClick={() => this.props.clickHandler(1)}
                      className={
                        this.state.hoverRight
                          ? "rotate-img"
                          : "rotate-img-change-next"
                      }
                    >
                      <img alt="다음메뉴" src={this.props.nextImage} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="arr-prev">
              <span>{this.props.prevName}</span>
            </div>
            <div className="arr-next">
              <span>{this.props.nextName}</span>
            </div>
          </div>
          <p className="summary">{this.props.des}</p>
        </div>
      </div>
    );
  }
}

export default MenuSelector;
