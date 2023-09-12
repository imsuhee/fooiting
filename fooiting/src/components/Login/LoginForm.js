import axios from "axios";
import { message } from "antd";
import { useState, useEffect } from "react";
import "../../Style/Login.css";
import { API_URL } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // 약관 동의 상태 관리
  const [agreed, setAgreed] = useState(false);

  // 핸드폰 번호 입력 관련 상태와 함수 추가
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //각 아이디, 비번, 이메일, 생년월일,연락처 정규식
  const userid = /^[A-Za-z0-9_-]{5,20}$/; //대소문자,숫자,_,- 길이 5~20이하
  const username = /^[A-Za-z가-힣]{2,20}$/; //대소문자or 한글만 길이2~20이하
  const userpassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/; //하나의 대소문자,숫자,특수문자 길이 8~16이하
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i; //대소문자,숫자 @ 도메인
  const birthDateRegex =
    /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/; //년월일구성
  const phoneNumberRegex = /^(\d{0,3}-?\d{0,4}-?\d{0,4})?$/; //숫자,- 구분

  const handleSubmit = async (formData) => {
    formData.phoneNumber = formData.phoneNumber.replace(/-/g, "");
    try {
      const response = await axios.post(`${API_URL}/User`, formData);
      console.log(response);
      navigate("/Login"); // 성공적으로 가입한 경우 페이지 이동
    } catch (error) {
      console.error(error);
      message.error(`에러가 발생했습니다. ${error.message}`);
    }
  };

  const onFinish = (values) => {
    // 입력 데이터를 FormData 형식으로 변환
    const formData = {
      userid: values.userid,
      username: values.username,
      password: values.password,
      email: values.email,
      birthDate: values.birthDate,
      phoneNumber: values.phoneNumber,
    };
    handleSubmit(formData); // 서버 호출 및 오류 처리 함수 호출
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleAgreeChange = (e) => {
    setAgreed(e.target.checked);
  };

  useEffect(() => {
    if (inputValue.length === 11) {
      setInputValue((prevInputValue) =>
        prevInputValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
    if (inputValue.length === 13) {
      setInputValue((prevInputValue) =>
        prevInputValue
          .replace(/-/g, "-")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [inputValue, setInputValue]); // setInputValue 추가

  return {
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
  };
};
export default LoginForm;
