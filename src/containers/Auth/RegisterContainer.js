import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeField,
  InitializeForm,
  register,
  userCheck,
} from "../../store/auth";
import AuthLayout from "../../Layout/AuthLayout";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState("");

  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.password !== passwordCheck) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    const { email, nick_name, password } = form;
    dispatch(register({ email, nick_name, password }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onChangePwCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => {
    dispatch(InitializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정입니다");
      }
      return;
    }
    if (auth) {
      dispatch(userCheck(auth));
      navigate("/login");
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user === undefined || user === null) {
      return;
    }
    if (user) {
      // localStorage 미사용 예정
      // localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthLayout
      type="register"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      passwordCheck={passwordCheck}
      onChangePwCheck={onChangePwCheck}
      error={error}
    />
  );
};
export default RegisterContainer;
