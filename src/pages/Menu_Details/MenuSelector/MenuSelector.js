import React from "react";
import { Link } from "react-router-dom";
import "./MenuSelector.scss";

class MenuSelector extends React.Component {
  state = {
    hoverLeft: true,
    hoverRight: true,
  };

  hoverHandlerLeft = () => {
    this.setState({ hoverLeft: !this.state.hoverLeft });
  };

  hoverHandlerRight = () => {
    this.setState({ hoverRight: !this.state.hoverRight });
  };

  render() {
    const { hoverLeft, hoverRight } = this.state;
    const {
      image,
      prevId,
      nextId,
      prevImage,
      nextImage,
      prevName,
      nextName,
    } = this.props;

    return (
      <div className="menu-content">
        <div className="MenuSelector">
          <div className="menu-info">
            <div className="menu-img">
              <img alt="vegi" src={image} />
              <div className="MenuRotate">
                <div className="menu_nav_prev">
                  <Link to={`/menu_details/${prevId}`}>
                    <div
                      onMouseOver={this.hoverHandlerLeft}
                      onMouseLeave={this.hoverHandlerLeft}
                      className={hoverLeft ? "rotate-img" : "rotate-img-change"}
                    >
                      <img alt="이전메뉴" src={prevImage} />
                    </div>
                  </Link>
                </div>
                <div className="menu_nav_next">
                  <Link to={`/menu_details/${nextId}`}>
                    <div
                      onMouseOver={this.hoverHandlerRight}
                      onMouseLeave={this.hoverHandlerRight}
                      className={
                        hoverRight ? "rotate-img" : "rotate-img-change-next"
                      }
                    >
                      <img alt="다음메뉴" src={nextImage} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="arr-prev">
              <span>{prevName}</span>
            </div>
            <div className="arr-next">
              <span>{nextName}</span>
            </div>
          </div>
          <p className="summary">{this.props.des}</p>
        </div>
      </div>
    );
  }
}

export default MenuSelector;
