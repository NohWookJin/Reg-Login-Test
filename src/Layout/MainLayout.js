import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainLayout = ({ user, onLogout, onRefresh }) => {
  return (
    <StyledMainLayout>
      {user ? (
        <>
          <StyledDiv>이메일: {user.email}</StyledDiv>
          <StyledButton onClick={onLogout}>로그아웃</StyledButton>
          <StyledButton onClick={onRefresh}>토큰 연장</StyledButton>
        </>
      ) : (
        <Link to="/auth/login">
          <StyledButton>로그인</StyledButton>
        </Link>
      )}
    </StyledMainLayout>
  );
};

export default MainLayout;

const StyledMainLayout = styled.div`
  padding: 20px 40px 40px;
  min-width: 450px;
  border-radius: 15px;
  box-shadow: 0 2px 2px 4px #f1f1f1;
`;
const StyledButton = styled.button`
  margin: 10px 0px;
  width: 100%;
  height: 42px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background: #17ce5f;
  border: 1px solid #17ce5f;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #14bc55;
  }
`;

const StyledDiv = styled.div`
  display: block;
  color: #555;
  margin: 2rem 0;
  font-size: 16px;
  font-weight: 500;
`;
