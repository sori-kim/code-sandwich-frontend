import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Menu_Details.scss";

class Menu_Details extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: true,
      opacity2: true, 
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }

  hoverHandler=(state)=>{
    if(this.state.opacity){
      this.setState({opacity:false})
    }else if(this.state.opacity=== false){
      this.setState({opacity:true})
    }
  };

  
  hoverHandler2=(state)=>{
    if(this.state.opacity2){
      this.setState({opacity2:false})
    }else if(this.state.opacity2=== false){
      this.setState({opacity2:true})
    }
  };

  render() {
    return (
      <div className="Menu_Details">
        <div className="sub-header">
          <div className="content">
            <div className="sub-loc">
              <ul className="menu-wrap">
                <li className="menuList">
                  <Link to="/sandwichList" className="menu-link-1">
                    샌드위치
                  </Link>
                </li>
                <li className="menuList">
                  <Link to="/wrapList" className="menu-link">
                    랩
                  </Link>
                </li>
                <li className="menuList">
                  <Link to="/saladList" className="menu-link">
                    찹샐러드
                  </Link>
                </li>
                <li className="menuList">
                  <Link to="/sideDrink" className="menu-link">
                    스마일 썹
                  </Link>
                </li>
                <li className="menuList" className="menuList">
                  <Link to="/catering" className="menu-link">
                    단체메뉴
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="menu-view-wrapper">
              <div className="head">
                <div className="category">
                  <a className="category-name" href="#">
                    프레쉬&라이트
                  </a>
                  <button type="button"></button>
                </div>
                <h2 className="name">베지</h2>
                <p className="eng">Veggie Delight</p>
                <p className="cal">230 kcal</p>
                <div className="sns">
                  <a className="fb" href="#" alt="facebooklink"></a>
                  <a className="url" href="#" alt="copyUrl"></a>
                </div>
              </div>
              <div className="menu-content">
                <div className="menu-info">
                  <div className="menu-img">
                    <img
                      alt="vegi"
                      src="http://subway.co.kr/images/menu/sandwich_fl06.jpg"
                    />
                  </div>
                  <Link
                    to="#url"
                    className="arr-prev"
                    onMouseOver={this.hoverHandler}>
                    <span>터키</span>
                  </Link>
                  <Link to="#url" className="arr-next"
                  onMouseOver={this.hoverHandler2}>
                    <span>로세터리 치킨</span>
                  </Link>
                  <p className="summary">
                    갓 구운 빵과 신선한 7가지 야채로 즐기는 깔끔한 한끼
                  </p>
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
                  <p className="excluding">
                    * 매장에 따라 추천소스는 상이할 수 있습니다.
                    <br />* 써브웨이가 제공하는 신선한 야채가 정량으로
                    제공됩니다.
                    <br />* 제품 사진은 이미지컷입니다.
                  </p>
                </div>
                <div className="menu_nav_prev">
                  <div className={this.state.opacity? "rotate-img": "rotate-img-change"}>
                    <img
                      alt="이전메뉴"
                      src="http://www.subway.co.kr/images/menu/sandwich_fl05.jpg"
                    />
                  </div>
                </div>
                <div className="menu_nav_next">
                <div className={this.state.opacity2? "rotate-img-next": "rotate-img-change-next"}>
                    <img
                      alt="다음메뉴"
                      src="http://www.subway.co.kr/images/menu/sandwich_fl01.jpg"
                    />
                  </div>
                </div>

                <div className="common-chart">
                  <div className="chart-content">
                    <h3>영양성분표</h3>
                    <div className="chart-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>중량(g)</th>
                            <th>열량(kcal)</th>
                            <th>당류(g)</th>
                            <th>단백질(g)</th>
                            <th>포화지방(g)</th>
                            <th>나트륨(mg)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>162</td>
                            <td>230</td>
                            <td>7</td>
                            <td>8(15%)</td>
                            <td>1(3%)</td>
                            <td>280(14%)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul className="notice">
                      <li>
                        ※ 기본야채 5종(양상추, 토마토, 양파, 피망, 오이)포함,
                        치즈 및 소스 제외, 6인치 위트 브레드 기준.
                      </li>
                      <li>※ 괄호 안 %는 1일 영양소 기준치에 대한 비율</li>
                    </ul>
                    <div className="bt-wrapper">
                      <button>원산지 정보</button>
                      <button>알레르기 정보</button>
                    </div>
                  </div>
                </div>
                <div className="fresh-rules">
                  <div>
                    <div className="fresh-rules-header">
                      <p>써브웨이만이 가지고 있는 세가지 원칙</p>
                      <h3>
                        <span>SUBWAY </span>3 FRESH
                      </h3>
                    </div>
                    <div className="fresh-rule-content">
                      <ol>
                        <li>
                          <div className="fresh-rule-img">
                            <img
                              alt="매장에서 직접 구워낸 신선한 빵"
                              src="http://subway.co.kr/images/menu/img_fresh3_01.jpg"
                            />
                          </div>
                          <div className="fresh-rule-info">
                            <span className="num">1</span>
                            <strong>
                              매장에서 직접 구워낸 <br /> 신선한 빵
                            </strong>
                            <p>
                              매일 아침 각 매장에서 발효하고 직접 구워서 <br />
                              퀄리티 높은 신선한 빵을 제공합니다.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="fresh-rule-img">
                            <img
                              alt="매일 배송되는 신선한 야채 제공"
                              src="http://subway.co.kr/images/menu/img_fresh3_02.jpg"
                            />
                          </div>
                          <div className="fresh-rule-info">
                            <span className="num">2</span>
                            <strong>
                              매일 배송되는 <br /> 신선한 야채 제공
                            </strong>
                            <p>
                              애장에서 직접 손질한 야채를 <br />
                              당일판매 원칙으로 제공하고 있습니다.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="fresh-rule-img">
                            <img
                              alt="주문과 동시에 바로 만드는 신선함"
                              src="http://subway.co.kr/images/menu/img_fresh3_03.jpg"
                            />
                          </div>
                          <div className="fresh-rule-info">
                            <span className="num">3</span>
                            <strong>
                              주문과 동시에 <br /> 바로 만드는 신선함
                            </strong>
                            <p>
                              주문과 동시에 만들어지는 시스템으로 <br />
                              직접 눈으로 신선함을 확인하실 수 있습니다.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu_Details;
