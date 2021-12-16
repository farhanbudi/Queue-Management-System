/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./style.css";
import { useHistory } from "react-router";

export const LoginForm = (props) => {
    const history = useHistory();
    const {onFinish, loadingBtn} = props
    return (
      <div className="login-form">
      <h1>Login</h1>
        <div className="form">
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              className="label"
              labelCol={24}
            >
              <Input className="input" data-testid="input" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              className="label"
            >
              <Input.Password className="input" data-testid="input" />
            </Form.Item>
            <Row >
              <Col span={24}>
                <Button block htmlType="submit" className="button" loading={loadingBtn}>
                  Login
                </Button>
              </Col>
              <Col span={24}>
                <span className="span">
                  Belum punya akun?
                  <a onClick={() => history.push("/register")}> Daftar</a>
                </span>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
};
