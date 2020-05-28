import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  state = {
    inputEmail: "",
    inputPw: "",
  };

  signupHandler = () => {
    console.log(this.state.inputEmail);
    fetch("#url", {
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
        this.props.history.push("/main");
      } else {
        alert("회원정보가 맞지 않습니다. <br/> 다시 확인해주세요.");
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div className="Login">
        {/* 헤더 컴포넌트 */}
        <div className="signup-wrap">
          <div className="input-info">
            <strong className="advise">로그인</strong>
            <input
              className="input-box"
              onChange={this.typed}
              type="email"
              placeholder="이메일"
              value={this.state.inputEmail}
              onChange={(e) => {
                this.setState({ inputEmail: e.target.value });
              }}/>
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호"
              value={this.state.inputPw}
              onChange={(e) => {
                this.setState({ inputPw: e.target.value });
              }}
            />
            <Link to="/signup" className="adviseSignup"> 계정이 없으신가요? 가입하기 </Link>
            <button onClick={this.signupHandler} className="loginbt">
              로그인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
