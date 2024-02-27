"use client";
import { motion } from "framer-motion";
import { FormEvent, useReducer, useState } from "react";
import InputField from "../shared/InputField";
import { useCustomInput } from "@/hooks/useInput.hook";
import {
  cPasswordValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from "@/lib/validators";
import FormActions from "../shared/FormActions";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  let {
    inputValue: firstNameInputValue,
    handleInputValueChange: handleFirstNameValueOnchange,
    handleOnBlur: handleFirstNameOnBlur,
    isInvalid: isFirstNameInvalid,
  } = useCustomInput("", nameValidator);

  let {
    inputValue: lastNameInputValue,
    handleInputValueChange: handleLastNameValueOnchange,
    handleOnBlur: handleLastNameOnBlur,
    isInvalid: isLastNameInvalid,
  } = useCustomInput("", nameValidator);

  let {
    inputValue: emailInputValue,
    handleInputValueChange: handleEmailValueOnchange,
    handleOnBlur: handleEmailOnBlur,
    isInvalid: isEmailInvalid,
  } = useCustomInput("", emailValidator);

  let {
    inputValue: passwordInputValue,
    handleInputValueChange: handlePasswordValueOnchange,
    handleOnBlur: handlePasswordOnBlur,
    isInvalid: isPasswordInvalid,
  } = useCustomInput("", passwordValidator);

  let {
    inputValue: confirmPasswordInputValue,
    handleInputValueChange: handleConfirmPasswordValueOnchange,
    handleOnBlur: handleConfirmPasswordOnBlur,
    isInvalid: isConfirmPasswordInvalid,
  } = useCustomInput("", cPasswordValidator, passwordInputValue);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    validate();

    if (
      isFirstNameInvalid.status ||
      isLastNameInvalid.status ||
      isEmailInvalid.status ||
      isPasswordInvalid.status ||
      isConfirmPasswordInvalid.status
    ) {
      setIsSubmitting(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstNameInputValue,
          lastName: lastNameInputValue,
          email: emailInputValue,
          password: passwordInputValue,
        }),
      });

      if (response.ok) {
        const resJson = await response.json();
        router.push("'login");
      } else {
        console.log("error");
      }

      setIsSubmitting(false);
    }
  };

  const validate = () => {
    handleFirstNameOnBlur(true);
    handleLastNameOnBlur(true);
    handleEmailOnBlur(true);
    handlePasswordOnBlur(true);
    handleConfirmPasswordOnBlur(true);
    isFirstNameInvalid = nameValidator(firstNameInputValue, true);
    isLastNameInvalid = nameValidator(lastNameInputValue, true);
    isEmailInvalid = emailValidator(emailInputValue, true);
    isPasswordInvalid = passwordValidator(passwordInputValue, true);
    isConfirmPasswordInvalid = cPasswordValidator(
      confirmPasswordInputValue,
      true,
      passwordInputValue
    );
  };
  return (
    <>
      <motion.form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-col items-center mt-5"
        noValidate={true}
      >
        <div className="flex justify-between items-center w-full">
          <InputField
            htmlFor="firstName"
            placeHolder="First name"
            label="First name"
            inputType="text"
            value={firstNameInputValue}
            onChange={handleFirstNameValueOnchange}
            isInvalid={isFirstNameInvalid}
            onBlur={handleFirstNameOnBlur}
          />
          <InputField
            htmlFor="lastName"
            placeHolder="Last name"
            label="Last name"
            inputType="text"
            value={lastNameInputValue}
            onChange={handleLastNameValueOnchange}
            isInvalid={isLastNameInvalid}
            onBlur={handleLastNameOnBlur}
          />
        </div>
        <InputField
          htmlFor="email"
          placeHolder="Email address"
          label="Email"
          inputType="email"
          value={emailInputValue}
          onChange={handleEmailValueOnchange}
          isInvalid={isEmailInvalid}
          onBlur={handleEmailOnBlur}
        />
        <div className="flex justify-between items-center w-full">
          <InputField
            htmlFor="password"
            placeHolder="Password"
            label="Password"
            inputType="password"
            value={passwordInputValue}
            onChange={handlePasswordValueOnchange}
            isInvalid={isPasswordInvalid}
            onBlur={handlePasswordOnBlur}
          />
          <InputField
            htmlFor="confirmPassword"
            placeHolder="Confirm Password"
            label="Confirm Password"
            inputType="password"
            value={confirmPasswordInputValue}
            onChange={handleConfirmPasswordValueOnchange}
            isInvalid={isConfirmPasswordInvalid}
            onBlur={handleConfirmPasswordOnBlur}
          />
        </div>
        <FormActions isSubmitting={isSubmitting}>Signup</FormActions>
      </motion.form>
    </>
  );
};

export default SignupForm;
