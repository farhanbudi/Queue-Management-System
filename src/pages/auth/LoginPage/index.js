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
    try {
      setIsLoadingBtn(true);
      const res = await instance.post("/user/login", values);
      if (res.status === 200) {
        await localStorage.setItem("user_id", res.data.user_id);
        history.push("/beranda");
      } else {
        message.error("login gagal");
      }
      setIsLoadingBtn(false);
      // console.log(res);
    } catch (error) {
      setIsLoadingBtn(false);
      message.error("login gagal");
    }
  };

  return (
    <AuthLayouts>
      <LoginForm
        onFinish={onFinish}
        loadingBtn={isLoadingBtn}
      />
    </AuthLayouts>
  );
};
