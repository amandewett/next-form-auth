"use client";
import { motion } from "framer-motion";
import { FormEvent, useReducer, useState } from "react";
import InputField from "../shared/InputField";
import { useCustomInput } from "@/hooks/useInput.hook";
import { emailValidator, passwordValidator } from "@/lib/validators";
import FormActions from "../shared/FormActions";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/slices/auth/auth.slice";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import LoadingPage from "@/app/loading";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { data, status } = useSession();
  const router = useRouter();

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

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    validate();
    if (isEmailInvalid.status || isPasswordInvalid.status) {
      setIsSubmitting(true);
      // dispatch(authActions.login());
      const result: any = await signIn("credentials", {
        redirect: false,
        email: emailInputValue,
        password: passwordInputValue,
      });

      if (result?.error === null) {
        //login successful
        window.location.href = "/profile";
        // console.log(JSON.stringify(result));
      } else {
        //login unsuccessful
        // console.log(JSON.stringify(result));
      }

      setIsSubmitting(false);
      // redirect("/profile");
    }
  };

  const validate = () => {
    handleEmailOnBlur(true);
    handlePasswordOnBlur(true);
    isEmailInvalid = emailValidator(emailInputValue, true);
    isPasswordInvalid = passwordValidator(passwordInputValue, true);
  };

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <motion.form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col items-center mt-5"
          noValidate={true}
        >
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
          <FormActions isSubmitting={isSubmitting}>Login</FormActions>
        </motion.form>
      </>
    );
  } else {
    // window.location.href = "/profile";
    router.replace("/profile");
  }
};

export default LoginForm;
