import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Style/Login.css";
const KakaoApi = () => {
  const location = useLocation();

  const code = new URL(window.location.href).searchParams.get("code");
  //카카오 로그인 완료 후 메인 페이지로 이동하기
  const Rest_api_key = "987e39308f026faa74c8320a87128080"; //REST API KEY
  const redirect_uri = "http://localhost:3000"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  //카카로 서버 구현로직
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    if (code) {
      // 여기서 서버로 인증 코드 전송하고 토큰을 받아오기
      //  axios 등을 사용하여 API 호출을 하거나 fetch를 사용 예정
      // 서버에서의 토큰 발급 과정을 구현
    }
  }, [location.search]);

  return (
    <button onClick={handleLogin} className="kakao-login-button">
      <img src="../img/icons/kakao_login.png" alt="카카오 로그인" />
    </button>
  );
};

export default KakaoApi;
