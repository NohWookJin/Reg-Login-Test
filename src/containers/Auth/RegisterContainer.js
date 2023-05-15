import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, InitializeForm } from "../../store/auth";

import AuthLayout from "../../Layout/AuthLayout";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const onSubmit = (e) => {
    e.preventDefault();
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
