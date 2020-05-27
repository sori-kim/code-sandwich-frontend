import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    inputEmail: "",
    inputName: "",
    inputTel: "",
    password: "",
    confirmPassword: "",
    
  };

  

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }

  handleOnConfirmPasswordInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput });
  }
  doesPasswordMatch() {
    const { password, confirmPassword } = this.state;
    return password == confirmPassword;
  }

  renderFeedbackMessage() {
    const { confirmPassword } = this.state;

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
        );
      }
    }
  }

  signupHandler = () => {
    fetch("#url", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.inputEmail,
        name: this.state.inputName,
        tel: this.state.inputTel,
        password: this.state.password,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("회원가입에 성공하였습니다. 로그인을 해주세요.");
        this.props.history.push("/login");
      } else {
        alert("중복된 회원정보가 있습니다. 다시 확인해주세요.");
        this.props.history.push("/signup");
      }
    });
  };

  render() {
    return (
      <div className="SignUp">
        {/* 헤더 컴포넌트 */}
        <div className="signup-wrap">
          <div className="input-info">
            <strong className="advise">개인 정보를 입력하세요.</strong>
            <input
              className="input-box"
              onChange={this.typed}
              type="email"
              placeholder="이메일"
              value={this.state.inputEmail}
              onChange={(e) => {
                this.setState({ inputEmail: e.target.value });
              }}
            />
            <input
              className="input-box"
              type="text"
              placeholder="이름"
              value={this.state.inputName}
              onChange={(e) => {
                this.setState({ inputName: e.target.value });
              }}
            />
            <input
              className="input-box"
              type="tel"
              placeholder="전화번호"
              value={this.state.inputTel}
              onChange={(e) => {
                this.setState({ inputTel: e.target.value });
              }}
            />
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호"
              value={this.state.inputPw}
              // id="passwordInput"
              onChange={(e) => this.handleOnPasswordInput(e.target.value)}
            />
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호 재입력"
              value={this.state.inputRepw}
              // id="confirmPasswordInput"
              onChange={(e) =>
                this.handleOnConfirmPasswordInput(e.target.value)
              }
            />
            {this.renderFeedbackMessage()}
            <button onClick={this.signupHandler} className="signup-bt">
              가입하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
