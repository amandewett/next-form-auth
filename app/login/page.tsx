import LoginForm from "@/components/login/LoginForm";
import React from "react";
import LoginFormContainer from "@/components/login/LoginFormContainer";

const LoginPage = () => {
  return (
    <>
      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>
    </>
  );
};

export default LoginPage;
