import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import KakaoLogo from "../assets/KakaoLogo.png";
import React from "react";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  const handleLogIn = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "1234") {
      alert("로그인 성공!");
      nav("/register");
    } else {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
  };

  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">로그인</h1>

      <form onSubmit={handleLogIn} noValidate className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            autoComplete="username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <Button type="submit" variant="SignIn" disabled={!isValid} className="w-full">
          로그인
        </Button>
      </form>

      <div className="mt-6">
        <button
          onClick={handleKakoLogin}
          className="w-full h-11 flex items-center justify-center gap-2 bg-[#FEE500] rounded-md hover:brightness-95 transition-all"
        >
          <img src={KakaoLogo} alt="Kakao Login" className="w-6 h-6" />
          <span className="text-sm font-semibold text-[#3C1E1E]">카카오로 로그인</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
