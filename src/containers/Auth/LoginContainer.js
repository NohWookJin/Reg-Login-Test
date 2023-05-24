import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeField, InitializeForm } from "../../store/auth";
import { login } from "../../store/user";

import AuthLayout from "../../Layout/AuthLayout";

const LoginContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  useEffect(() => {
    dispatch(InitializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
    }
    if (authError) {
      setError("로그인 실패");
      return;
    }
  }, [auth, authError]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <AuthLayout
      type="login"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    />
  );
};
export default LoginContainer;
