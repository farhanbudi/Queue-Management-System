/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { useHistory } from "react-router-dom";
import "../LoginForm/style.css";
import { instance } from "../../api/instance";


export const Register = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

    const onFinish = (values) => {
    console.log(values);
    setLoading(true);
    instance
    .post("/register", {"username": "dts2021@tes.com", "password": "dtsitp"})
    .then((response) => {
    setLoading(false);
    console.log(response);
    message.success("Pendaftaran Berhasil, Silahkan Login!");
    history.push("/");
    })
    .catch((response) => {
    setLoading(false);
    message.error("Pendaftaran Gagal");
    })
  }

return (
  <>
    <div className="login-form">
      <h1>Register</h1>
      <div className="form">
        <Form onFinish={(values) => onFinish(values)} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            className="label"
            labelCol={24}
            rules={[
              { required: true, message: "Username tidak boleh kosong" },
              { type: "email", message: "Username wajib format email!" },
            ]}
          >
            <Input className="input" data-testid="input" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            className="label"
            rules={[
              { required: true, message: "Password tidak boleh kosong" },
              { min: 6, message: "Password minimal 6 character!" },
            ]}
          >
            <Input.Password className="input" data-testid="input" />
          </Form.Item>
          <Row>
            <Col span={24}>
              <Button
                block
                htmlType="submit"
                className="button"
                loading={isLoading}
              >
               Daftar
              </Button>
            </Col>
            <Col span={24}>
              <span className="span">
                Belum punya akun?
                <a onClick={() => history.push("/")}>Login</a>
              </span>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </>
);
};
