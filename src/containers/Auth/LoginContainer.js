import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, InitializeForm } from "../../store/auth";

import AuthLayout from "../../Layout/AuthLayout";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  const onSubmit = (e) => {
    e.preventDefault();
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

  return (
    <AuthLayout
      type="login"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
export default LoginContainer;
