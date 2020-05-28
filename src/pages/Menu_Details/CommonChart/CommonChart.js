import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./CommonChart.scss";

class CommonChart extends React.Component {
  render() {
    return (
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
              ※ 기본야채 5종(양상추, 토마토, 양파, 피망, 오이)포함, 치즈 및 소스
              제외, 6인치 위트 브레드 기준.
            </li>
            <li>※ 괄호 안 %는 1일 영양소 기준치에 대한 비율</li>
          </ul>
          <div className="bt-wrapper">
            <button>원산지 정보</button>
            <button>알레르기 정보</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommonChart;
