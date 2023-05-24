import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../Layout/MainLayout";
import { useDispatch } from "react-redux";
import { logout, refresh } from "../../store/user";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector(({ user }) => ({
    user: user.user,
    loading: user.loading,
  }));

  const onClick = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  const refreshOnclick = () => {
    dispatch(refresh());
    alert("refresh accessToken!");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout user={user} onLogout={onClick} onRefresh={refreshOnclick} />
  );
};

export default MainContainer;
