import React from "react";
import { Link } from "react-router-dom";
import AuthCommonPage from "../../Layout/AuthCommonPage";

function AuthMain() {
  return (
    <AuthCommonPage>
      <Link className="auth_btn" to="/auth/login">
        로그인
      </Link>
      <Link className="auth_btn" to="/register">
        회원가입
      </Link>
    </AuthCommonPage>
  );
}
export default AuthMain;
