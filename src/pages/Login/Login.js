import React from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Login.scss";

class Login extends React.Component {
  state = {
    inputEmail: "",
    inputPw: "",
  };

  signupHandler = () => {
    console.log(this.state.inputEmail);
    fetch("http://10.58.5.58:8000/account/signin", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.inputEmail,
        password: this.state.inputPw,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("로그인성공!");
        this.props.history.push("/");
      } else {
        alert("회원정보가 맞지 않습니다. <br/> 다시 확인해주세요.");
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div className="Login-main">
        <div className="Login">
          <div className="login-wrap">
            <div className="input-info">
              <img
                src="https://id-content.subway.com/content/assets/images/logo-myrewards/Subway-MyWayRewards.png?v=d5b4027e-c994-4fd8-ba0f-9d53dd0c7437"
                alt="reward"
              ></img>
              <div className="label">이메일</div>
              <input
                className="input-box"
                type="email"
                placeholder="이메일을 입력하세요"
                value={this.state.inputEmail}
                onChange={(e) => {
                  this.setState({ inputEmail: e.target.value });
                }}
              />
              <div className="label">비밀번호를 입력하세요</div>
              <input
                className="input-box"
                type="password"
                placeholder="비밀번호"
                value={this.state.inputPw}
                onChange={(e) => {
                  this.setState({ inputPw: e.target.value });
                }}
              />
              <Link to="/signup" className="adviseSignup">
                계정이 없으신가요? 가입하기
              </Link>
              <button onClick={this.signupHandler} className="loginbt">
                로그인
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
