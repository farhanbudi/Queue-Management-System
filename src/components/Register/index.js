/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import "../LoginForm/style.css";

export const Register = ({onFinish, isLoading}) => { 

   const history = useHistory();
  
return (
  <>
    <div className="login-form">
      <h1>Registrasi</h1>
      <div className="form">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            className="label"
            labelCol={24}
            rules={[
              { required: true, message: "Username tidak boleh kosong" },
              { type: "email", message: "Username harus berupa email" },
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
              { min: 6, message: "Password minimal 6 character" },
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
                Sudah punya akun?
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
