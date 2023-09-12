import axios from "axios";
import Cookie from "js-cookie";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState, useEffect, useCallback } from "react";
import "../../Style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/constants";
import KakaoApi from "../../action/KakaoApi.js"; // KakaoApi
import moment from "moment";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //로그인 기능구현
  // 아이디와 비밀번호의 정규식 패턴 정의
  const username = /^[A-Za-z0-9_-]{5,20}$/;
  const userpassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const handleLogout = useCallback(() => {
    // 토큰 및 인증 상태 제거
    Cookie.remove("accessToken");
    Cookie.remove("refreshToken");
    localStorage.removeItem("expiresAt");
    setIsLoggedIn(false);
    // 로그아웃 후 원하는 페이지로 이동 (예: 로그인 페이지)
    navigate("/login");
  }, [navigate, setIsLoggedIn]);

  const onFinish = async (values) => {
    const { userid, password } = values;
    if (typeof userid !== "string" || typeof password !== "string") {
      console.log("아이디와 비밀번호를 입력하세요.");
      return;
    }
    try {
      // 서버에 로그인 요청을 보냅니다.
      const response = await axios.post(`${API_URL}/Login`, {
        userid: values.userid,
        password: values.password,
      });
      const { accessToken, refreshToken } = response.data;
      // Access Token 저장
      Cookie.set("accessToken", accessToken);
      // Refresh Token 저장
      Cookie.set("refreshToken", refreshToken);

      // Access Token 만료 시간 설정 (15분)
      const expiresAt = moment().add(15, "minutes").toDate();
      Cookie.set("expiresAt", expiresAt);

      //메인으로 이동(관리자시에는?(수정해야함))
      navigate("/");
      return true; // 로그인 성공
    } catch (error) {
      // 페이지 이동 또는 다른 작업 수행
      console.error("로그인 에러:", error);
      message.error(
        `로그인 중 오류가 발생했습니다. 자세한 정보: ${error.message}`
      );
      return false; // 로그인 실패
    }
  };

  // Axios 인터셉터 설정 (모든 요청에 Access Token 추가)
  axios.interceptors.request.use((config) => {
    const accessToken = Cookie.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });

  // 만료된 Access Token을 Refresh 하는 함수
  const refreshAccessToken = async () => {
    const refreshToken = Cookie.get("refreshToken");

    if (!refreshToken) {
      console.error("Refresh Token이 없습니다.");
      return null;
    }
    try {
      const response = await axios.post(`${API_URL}/refreshToken`, {
        refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      // 새 Access Token 저장
      Cookie.set("accessToken", newAccessToken);
      console.log("Access Token이 갱신되었습니다.");
      return newAccessToken;
    } catch (error) {
      console.error("Access Token 갱신 에러:", error);
      return null;
    }
  };

  useEffect(() => {
    // 앱 초기화 또는 진입점에서 실행(로그인 상태 확인 토큰처리)
    const initializeApp = async () => {
      const expiresAtString = Cookie.get("expiresAt"); // 수정: expiresAt 문자열로 가져오기

      if (expiresAtString) {
        // 수정: 유효한 expiresAt 문자열 확인
        const expiresAt = moment(expiresAtString); // 수정: expiresAt를 moment 객체로 변환

        if (expiresAt.isValid()) {
          // 수정: moment 객체가 유효한지 확인
          const currentDateTime = moment();
          if (currentDateTime.isAfter(expiresAt)) {
            // Access Token 만료 시간이 지났을 경우
            const newAccessToken = await refreshAccessToken();

            if (!newAccessToken) {
              setIsLoggedIn(false); // 로그아웃 상태로 설정
              handleLogout(); // 로그아웃 처리
            } else {
              setIsLoggedIn(true); // 로그인 상태로 설정
            }
          } else {
            setIsLoggedIn(true); // 로그인 상태로 설정
          }
        }
      }
    };
    initializeApp(); // 앱 초기화 시 실행
  }, [handleLogout]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form-container">
      <h1 className="login-form-header">
        <Link to="/">
          <img src="/img/icons/fooiting.png" alt="" />
        </Link>
      </h1>
      <Form
        name="loginForm"
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
              message: "아이디를 입력하세요!",
            },
            { pattern: username, message: "아이디 형식을 확인해주세요." }, // 패턴 검사 추가
          ]}
        >
          {/*input 안 내용물*/}
          <Input size="large" placeholder="아이디" />
        </Form.Item>
        <Form.Item
          label=""
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력하세요!",
            },
            { pattern: userpassword, message: "비밀번호 형식을 확인해주세요." }, // 패턴 검사 추가
          ]}
        >
          {/*input 안 내용물*/}
          <Input.Password size="large" placeholder="비밀번호" />
        </Form.Item>

        {/*로그인버튼*/}

        <div>
          {isLoggedIn && <Button onClick={handleLogout}>로그아웃</Button>}
          <Button className="login-form-button" htmlType="submit">
            로그인
          </Button>
          {/*체크박스*/}
          <Checkbox className="checkbox">로그인 상태 유지</Checkbox>
        </div>

        <hr />
        <Button
          className="login-form-button"
          type="submit"
          onClick={() => navigate("../Signup")}
        >
          회원가입
        </Button>
        <div className="login-links">
          <Link className="login-links" to={"/"}>
            아이디 찾기
          </Link>{" "}
          |{" "}
          <Link className="login-links" to={"/"}>
            비밀번호 찾기
          </Link>{" "}
          |{" "}
          <Link className="login-links" to={"/Signup"}>
            회원가입
          </Link>
        </div>
        {/* 로그인 페이지 내의 다른 컴포넌트들 */}
        {/* KakaoApi 컴포넌트를 여기서 사용 */}
        <KakaoApi />
      </Form>
    </div>
  );
};

export default Login;
