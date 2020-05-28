import React from "react";
import "./Footer.scss"

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
             <div className="border">
                <ul className="footer_bar">
                    <li>이용약관</li>
                    <li>개인정보취급방침</li>
                    <li>점주관리자</li>
                    <li>Subway Listens</li>
                </ul>
            </div>
                <p>서울시 서초구 강남대로 535 프린스빌딩 15층 | 대표 : 콜린클락 | 전화 : 02-797-5036 | 사업자등록번호 : 101-84-04143 <br />
                SUBWAY® is a Registered Trademark of Subway IP LLC. © 2019 Subway IP LLC. All Rights Reserved.
                </p>
             </div>
       
        )
    }
}

export default Footer;