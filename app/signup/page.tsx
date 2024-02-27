import SignupForm from "@/components/signup/SignupForm";
import SignupFormContainer from "@/components/signup/SignupFormContainer";
import React from "react";

const SignupPage = () => {
  return (
    <>
      <SignupFormContainer>
        <SignupForm />
      </SignupFormContainer>
    </>
  );
};

export default SignupPage;
