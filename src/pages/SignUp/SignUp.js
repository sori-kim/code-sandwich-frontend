import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.scss";

class SignUp extends React.Component {
  state = {
    email: "",
    isEmailValid: false,
    name: "",
    tel: "",
    pw1: "",
    pw2: "",
  };

  //입력창에 모든 정보가 입력되었는지 확인하고,
  //모든 정보가 입력 되었을때만 이메일 양식 체크로 넘어간다.
  checkValid = () => {
    const { email, name, tel, pw1, pw2 } = this.state;
    {
      !email || !name || !tel || !pw1 || !pw2
        ? alert("입력되지 않은 정보가 있습니다. 다시 확인해주세요")
        : this.emailCheck();
    }
  };

  //입력된 값을 state에 저장해주기
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //비밀번호&비밀번호 확인이 일치하는지 확인해서 ture or false 를 반환한다.
  doesPasswordMatch() {
    const { pw1, pw2 } = this.state;
    return pw1 === pw2;
  }
  //패스워드가 일치하는지 확인해서 유저에게 피드백을 준다.
  renderFeedbackMessage() {
    const { pw2 } = this.state;

    if (pw2) {
      if (!this.doesPasswordMatch()) {
        return (
          <div className="invalid-feedback">비밀번호가 일치하지 않습니다.</div>
        );
      }
    }
  }

  //비밀번호&비밀번호 확인이 일치하는지 확인해서 알려준다.
  doesPasswordMatch() {
    const { pw1, pw2 } = this.state;
    return pw1 === pw2;
  }

  //이메일&패스워드 유효성 검사
  emailCheck() {
    const { email, pw1, pw2 } = this.state;

    if (!email.includes("@")) {
      alert("이메일 형식이 잘못되었습니다.");
    } else if (pw1 !== pw2) {
      alert("비밀번호/비밀번호 재입력이 맞지 않습니다");
    } else if (pw1.length <= 5) {
      alert("비밀번호가 짧습니다.");
    } else {
      this.firstCheck();
    }
  }
  // 가입하기 버튼을 눌렀을 때 먼저 모든 창이 입력되었는지 확인
  signupHandler = () => {
    this.checkValid();
  };

  firstCheck() {
    fetch("http://10.58.5.58:8000/account/signup", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.name,
        phone: this.state.tel,
        password: this.state.pw1,
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
  }

  render() {
    console.log(this.state.name);

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
              value={this.state.email}
              name="email"
              onChange={this.handleInput}
            />
            {/* {this.renderFeedbackMessageEmail()} */}
            <div className="invalid-feedback">{this.state.wrongEmail}</div>
            <input
              className="input-box"
              type="text"
              placeholder="이름"
              value={this.state.name}
              name="name"
              onChange={this.handleInput}
            />
            <input
              className="input-box"
              type="tel"
              placeholder="전화번호"
              value={this.state.tel}
              name="tel"
              onChange={this.handleInput}
            />
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호 입력(6자리 이상)"
              value={this.state.pw1}
              onChange={this.handleInput}
              name="pw1"
            />
            <input
              className="input-box"
              type="password"
              placeholder="비밀번호 재입력"
              value={this.state.pw2}
              onChange={this.handleInput}
              name="pw2"
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
