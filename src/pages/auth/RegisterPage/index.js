import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { AuthLayouts } from '../../../components/AuthLayouts';
import { Register } from '../../../components/Register';
import { instance } from "../../../api/instance";
import { message } from "antd";

export const RegisterPage = () => {
   const [isLoading, setLoading] = useState(false);
   const history = useHistory();
   const onFinish = (values) => {
     setLoading(true);
     instance
       .post("/user/register", values)
       .then((response) => {
         setLoading(false);
         message.success("Pendaftaran Berhasil, Silahkan Login!");
         history.push("/");
       })
       .catch((response) => {
         setLoading(false);
         message.error("Pendaftaran Gagal, Silahkan Coba Lagi!");
       });
   };
    return (
      <AuthLayouts>
          <Register onFinish={onFinish} isLoading={isLoading} />
      </AuthLayouts>
    );
};
