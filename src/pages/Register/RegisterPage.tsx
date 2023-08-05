import React, { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import stlyes from "./RegisterPage.module.css";
import { When } from "react-if";

const RegisterPage: React.FC = () => {
  const [isLogin, setIslogin] = useState<boolean>(true);
  return (
    <main className={stlyes.main}>
      <When condition={isLogin} children={<LoginForm x={{isLogin, setIslogin}}/>} />
      <When condition={!isLogin} children={<SignupForm  x={{isLogin, setIslogin}}/>} />
    </main>
  );
};

export default RegisterPage;
