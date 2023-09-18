import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/Login.css";
import LoginForm from "../../components/Login/LoginForm";

const Signup = () => {
  const navigate = useNavigate();
  // LoginForm 커스텀 훅 사용
  const {
    agreed,
    inputValue,
    onFinish,
    onFinishFailed,
    handleAgreeChange,
    userid,
    username,
    userpassword,
    emailRegex,
    birthDateRegex,
    phoneNumberRegex,
  } = LoginForm();

  return (
    <div className="login-form-container">
      <h1 className="login-form-header">회원가입</h1>
      <Form
        name="signupForm"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-form"
      >
        {/* 아이디 창 */}
        <Form.Item
          label=""
          name="userid"
          rules={[
            {
              required: true,
              message: "• 아이디를 입력하세요!",
            },
            {
              pattern: userid,
              message:
                "• 아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
            },
          ]}
        >
          {/*아이디 input 안 내용물*/}
          <Input size="large" placeholder="아이디" />
        </Form.Item>
        {/*이름*/}
        <Form.Item
          label=""
          name="username"
          rules={[
            {
              required: true,
              message: "• 이름을 입력하세요!",
            },

            {
              pattern: username,
              message: "• 이름: 필수 정보입니다.",
            },
          ]}
        >
          {/*이름 input 안 내용물*/}
          <Input size="large" placeholder="이름" />
        </Form.Item>
        {/* 비밀번호 창 */}
        <Form.Item
          label=""
          name="password"
          rules={[
            {
              required: true,
              message: "• 비밀번호를 입력하세요!",
            },
            {
              pattern: userpassword,
              message:
                "• 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
            },
          ]}
        >
          <Input.Password size="large" placeholder="비밀번호" />
        </Form.Item>
        <Form.Item
          label=""
          name="confirmPassword"
          dependencies={["password"]} // 의존성 설정
          rules={[
            {
              required: true,
              message: "• 비밀번호를 다시 입력하세요!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("비밀번호가 일치하지 않습니다.");
              },
            }),
          ]}
        >
          <Input.Password size="large" placeholder="비밀번호 확인" />
        </Form.Item>

        {/*이메일*/}
        <Form.Item
          label=""
          name="email"
          rules={[
            {
              required: true,
              message: "• 이메일을 입력하세요!",
            },
            {
              type: "email",
              message: "• 올바른 이메일 형식을 입력하세요!",
            },
            {
              pattern: emailRegex,
              message: "• 이메일: 이메일 주소가 정확한지 확인해 주세요.",
            },
          ]}
        >
          {/*이메일input 안 내용물*/}
          <Input size="large" placeholder="이메일" />
        </Form.Item>

        {/*생년월일*/}
        <Form.Item
          label=""
          name="birthDate"
          rules={[
            {
              required: true,
              message: "• 생년월일을 입력하세요!",
            },
            {
              pattern: birthDateRegex,
              message: "• 생년월일: 필수 정보입니다.",
            },
          ]}
        >
          {/*생년월일input 안 내용물*/}
          <Input size="large" placeholder="생년월일 (예: 19900101)" />
        </Form.Item>

        {/*핸드폰*/}
        <Form.Item
          label=""
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "• 핸드폰 번호를 입력하세요!",
            },
            {
              pattern: phoneNumberRegex,
              message: "• 휴대전화번호: 필수 정보입니다.",
            },
          ]}
        >
          {/*핸드폰 input 안 내용물*/}

          <Input
            size="large"
            value={inputValue}
            placeholder="핸드폰 번호 입력"
          />
        </Form.Item>

        {/*회원가입 버튼*/}
        <Form.Item>
          <Button className="login-form-button" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>

        {/*약관동의*/}
        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            { required: true, message: "필수 약관에 모두 동의해 주세요." },
          ]}
        >
          <Checkbox
            className="checkbox"
            checked={agreed}
            onChange={handleAgreeChange}
          >
            회원가입 약관에 동의합니다.
          </Checkbox>
        </Form.Item>

        {/*로그인 화면이동*/}
      </Form>
      <div className="login-links">
        이미 계정이 있으신가요?{" "}
        <span className="link" onClick={() => navigate("/Login")}>
          로그인하기
        </span>
      </div>
    </div>
  );
};

export default Signup;
