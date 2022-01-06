import React, { useState } from "react";
import { AuthLayouts } from "../../../components/AuthLayouts";
import { LoginForm } from "../../../components/LoginForm";
import { useHistory } from "react-router-dom";
import { instance } from "../../../api/instance";
import { message } from "antd";

export const LoginPage = () => {
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const history = useHistory();
    const onFinish = async (values) => {
      if (values.username === "dts2021@tes.com") {
        try {
          setIsLoadingBtn(true);
          const res = await instance.post("/login", values);
          await localStorage.setItem("user", res.data.data.username);
          history.push("/beranda");
        } catch (error) {
          console.log("login gagal");
        }
      } else {
        setIsLoadingBtn(false);
        message.error("login gagal");
      }
    };
    
  return (
      <AuthLayouts>
        <LoginForm onFinish={(values) => onFinish(values)} loadingBtn={isLoadingBtn}/>
      </AuthLayouts>
  );
};
