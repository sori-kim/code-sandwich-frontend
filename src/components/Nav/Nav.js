import React from "react";
import "./Nav.scss"

class Nav extends React.Component{
    render(){
        return(
            <div className="Nav">
                <ul>
                    <li>메뉴소개
                        <p className="isHover">샌드위치</p>
                    </li>
                    <li>이용방법
                        <p className="isHover">써브웨이 이용방법</p>
                        <p className="isHover">주문 TIP</p>
                    </li>
                    <li>써브웨이
                        <p className="isHover">서브웨이 역시</p>
                        <p className="isHover">매장 찾기</p>
                    </li>
                    <li>주문하기
                        <p className="isHover">매장 찾기</p>
                    </li>
               
                </ul>
            </div>
        )
    }
}

export default Nav;