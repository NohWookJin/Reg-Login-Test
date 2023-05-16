import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, InitializeForm } from "../../store/auth";
import { register } from "../../store/auth";

import AuthLayout from "../../Layout/AuthLayout";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, nick_name, password } = form;
    console.log("onSubmit(dispatch)");
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

  useEffect(() => {
    dispatch(InitializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      console.log(auth);
      console.log(1);
    }
    if (authError) {
      console.log(authError);
      console.log(2);
    }
  }, [auth, authError]);

  return (
    <AuthLayout
      type="register"
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};
export default RegisterContainer;
