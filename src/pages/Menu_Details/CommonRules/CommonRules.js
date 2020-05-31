import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./CommonRules.scss";

class CommonRules extends React.Component {
  render() {
    return (
      <div className="CommonRules">
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
    );
  }
}

export default CommonRules;
