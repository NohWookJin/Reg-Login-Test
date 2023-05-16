import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const textMap = {
  register: "회원가입",
  login: "로그인",
};

function AuthLayout({ type, form, onSubmit, onChange }) {
  const text = textMap[type];
  return (
    <AuthContainer onSubmit={onSubmit}>
      <Title>{text}</Title>
      {type === "register" ? (
        <>
          <EmailInput form={form} onChange={onChange} />
          <NickName form={form} onChange={onChange} />
          <PWInput form={form} onChange={onChange} />
          {/* 검증 클라이언트에서 */}
          {/* <PWCheckInput onChange={onChange} /> */}
          <CheckBoxAll />
          <CheckBox1 />
          <CheckBox2 />
        </>
      ) : (
        <>
          <EmailInput form={form} onChange={onChange} />
          <PWInput form={form} onChange={onChange} />
        </>
      )}
      <SuccessBtn>{text} 완료</SuccessBtn>
      <LinkWrapping>
        <Link className="more_btn" to={"/"}>
          처음으로
        </Link>
      </LinkWrapping>
    </AuthContainer>
  );
}
export default AuthLayout;

const AuthContainer = styled.form`
  padding: 20px 40px 40px;
  min-width: 450px;
  border-radius: 15px;
  box-shadow: 0 2px 2px 4px #f1f1f1;
`;

const Title = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const LabelText = styled.span`
  display: inline-block;
  color: #555;
  font-size: 16px;
  font-weight: 500;
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  width: max-content;
  cursor: pointer;
`;

const InputStyle = styled.input`
  padding: 4px 8px;
  margin-top: 4px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #555;
  border: 1px solid #555;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    color: #555;
  }
`;

const CheckBoxStyle = styled.input`
  width: 14px;
  height: 14px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  background-color: #fff;
  vertical-align: middle;
`;

const ErrMsg = styled.span`
  display: none;
  position: absolute;
  bottom: -20px;
  left: 8px;
  color: #f00;
  font-size: 12px;
`;

const SuccessBtn = styled.button`
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

const LinkWrapping = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  & > * {
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }
`;

const NickName = ({ onChange, form }) => {
  return (
    <Label>
      <LabelText>닉네임</LabelText>
      <InputStyle
        name="nickName"
        placeholder="8자 이하 원하는 닉네임을 입력해주세요."
        maxLength={"12"}
        onChange={onChange}
        value={form.nickname}
      />
      <ErrMsg>사용 중인 닉네임 입니다.</ErrMsg>
    </Label>
  );
};

const EmailInput = ({ onChange, form }) => {
  return (
    <Label>
      <LabelText>이메일</LabelText>
      <InputStyle
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={onChange}
        value={form.email}
      />
      <ErrMsg>올바른 이메일형식으로 작성해주세요.</ErrMsg>
    </Label>
  );
};

const PWInput = ({ onChange, form }) => {
  return (
    <Label>
      <LabelText>비밀번호</LabelText>
      <InputStyle
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        minLength={"8"}
        onChange={onChange}
        value={form.password}
      />
      <ErrMsg>영문, 숫자, 특수문자 조합 12자 이상입력해주세요.</ErrMsg>
    </Label>
  );
};

// 타입 다르게 넣을 것
// const PWCheckInput = ({ onChange, form }) => {
//   return (
//     <Label>
//       <LabelText>비밀번호 확인</LabelText>
//       <InputStyle
//         name="passwordConfirm"
//         type="password"
//         placeholder="비밀번호를 입력해주세요."
//         value={form.passwordConfirm}
//       />
//       <ErrMsg>비밀번호가 일치하지 않습니다. 올바르게 입력해주세요.</ErrMsg>
//     </Label>
//   );
// };

const CheckBoxAll = () => {
  return (
    <CheckLabel>
      <CheckBoxStyle type="checkbox" />
      <LabelText>전체동의</LabelText>
    </CheckLabel>
  );
};

const CheckBox1 = () => {
  return (
    <CheckLabel>
      <CheckBoxStyle type="checkbox" />
      <LabelText>개인정보</LabelText>
    </CheckLabel>
  );
};
const CheckBox2 = () => {
  return (
    <CheckLabel>
      <CheckBoxStyle type="checkbox" />
      <LabelText>마케팅 광고 동의</LabelText>
    </CheckLabel>
  );
};
