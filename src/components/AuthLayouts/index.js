import { Card, Col, Row } from 'antd';
import React from 'react'
import "./style.css";
import logoLogin from "../../assets/image/logo-login-page2.png";

export const AuthLayouts = (props) => {
  return (
    <>
      <div className="top-round-design"></div>
      <Row justify="center" className="auth-layouts">
        <Col xs={20} md={7}>
          <img src={logoLogin}  alt="" />
          <Card
          className="card-auth">
            {props.children}
          </Card>
        </Col>
      </Row>
      <div className="bottom-round-design"></div>
    </>
  );
};
