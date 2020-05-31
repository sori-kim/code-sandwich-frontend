import React from "react";
import MenuItem from "../MenuSection/MenuItem/MenuItem";
import Slider from "react-slick";
import "./MenuSection.scss";

class MenuSection extends React.Component {
  state = {
    sandwich: [],
    new_sandwich: [],
    cl_sandwich: [],
    fl_sandwich: [],
    pm_sandwich: [],
    bf_sandwich: [],
    id: "",
  };

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ sandwich: res.data }))
      .then((res) =>
        this.setState({
          cl_sandwich: this.state.sandwich.filter((res) =>
            res.id.includes("cl")
          ),
          fl_sandwich: this.state.sandwich.filter((res) =>
            res.id.includes("fl")
          ),
          pm_sandwich: this.state.sandwich.filter((res) =>
            res.id.includes("pm")
          ),
          bf_sandwich: this.state.sandwich.filter((res) =>
            res.id.includes("bf")
          ),
          new_sandwich: this.state.sandwich.filter((res) =>
            res.id.includes("cl")
          ),
        })
      );
  }

  handleOnClick = (e) => {
    const category = e.target.innerText;
    let arr = [];
    if (category === "클래식") {
      arr = this.state.cl_sandwich;
    } else if (category === "프레쉬&라이트") {
      arr = this.state.fl_sandwich;
    } else if (category === "프리미엄") {
      arr = this.state.pm_sandwich;
    } else {
      arr = this.state.bf_sandwich;
    }
    this.setState({ new_sandwich: arr });
  };

  render() {
    // console.log("같나?", this.state.new_sandwich === this.state.cl_sandwich);
    // console.log("new_sandwich", this.state.new_sandwich);
    // console.log("cl_sandwich", this.state.cl_sandwich);
    const {
      new_sandwich,
      cl_sandwich,
      fl_sandwich,
      pm_sandwich,
      bf_sandwich,
    } = this.state;
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      autoPlay: false,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    const sandwich_map = this.state.new_sandwich.map((sandwich) => {
      return (
        <MenuItem
          key={sandwich.id}
          image={sandwich.image}
          name={sandwich.name}
          summary={sandwich.summary}
        />
      );
    });

    return (
      <div className="MenuSection">
        <div className="title">Subway's Menu</div>
        <ul className="category">
          <li
            onClick={this.handleOnClick}
            className={new_sandwich === cl_sandwich ? "isActive" : "notActive"}
          >
            <a>클래식</a>
          </li>
          <li
            onClick={this.handleOnClick}
            className={new_sandwich === fl_sandwich ? "isActive" : "notActive"}
          >
            <a>프레쉬&라이트</a>
          </li>
          <li
            onClick={this.handleOnClick}
            className={new_sandwich === pm_sandwich ? "isActive" : "notActive"}
          >
            <a>프리미엄</a>
          </li>
          <li
            onClick={this.handleOnClick}
            className={new_sandwich === bf_sandwich ? "isActive" : "notActive"}
          >
            <a>아침메뉴</a>
          </li>
        </ul>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {sandwich_map}
        </Slider>
      </div>
    );
  }
}

export default MenuSection;
