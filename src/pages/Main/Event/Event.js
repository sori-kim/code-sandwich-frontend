import React from "react";
import "./Event.scss"
import event from "../../../images/event.png"
import history from "../../../images/history.png"
import logo2 from "../../../images/logo2.png"
import yellow from "../../../images/yellow.png"

export default class Event extends React.Component{
    render(){
        return(
            <div className="Event">
            <div className="event_wrapper">
                <div className="top">
                 <div className="top_left">
                   <img src={event} alt="etc" />
                    <h1>서브웨이를<br /> 즐기는 제대로 된 방법!</h1>
                    <button>이용방법</button>
                  </div>
                  <div className="top_right">
                   <img src={history} alt="etc" />
                    <h1>50년 역사를<br /> 가진 NO.1 프랜차이즈의 성장기</h1>
                    <button>써브웨이 역사</button>
                  </div>
                 </div>
                <div className="bottom"> 
                 <div className="news">
                     <div className="news_left">
                         <img src={yellow} alt="yellow" />
                         <h1>What's New</h1>
                         <p>써브웨이의 다양한 소식을 <br /> 빠르게 전달해드립니다.</p>
                     </div>
                     <ul className="news_right">
                          <li>써브웨이 2020년 3월 가격 인상 안내</li>
                          <li>써브웨이와 함께하는 tvN '금요일금요일밤에'</li>
                          <li>써브웨이 고객센터 2020년 설 연휴 휴무 안내</li>
                          <button>More</button>
                     </ul>
                 </div>
                 <img src={logo2} alt="logo" />
                </div>
             </div>
            </div>
        )
    }
}