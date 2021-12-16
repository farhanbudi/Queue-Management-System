import { Col, Layout, Row} from 'antd';
import React from 'react'
import { SideNavigasi } from '../SideNavigasi';
import { BottomNavigasi } from '../BottomNavigasi';
import { TopNavigasi } from '../TopNavigasi';
import "./style.css";

export const DashboardLayouts = (props) => {
    const { Content } = Layout;
   
  return (
    <div className="dashboard-layouts">
      <Layout>
        <div className="fixed-side-navigasi">
          <Row>
            <Col md={24} xs={0}>
              <SideNavigasi />
            </Col>
          </Row>
        </div>
        <Layout className="layout">
          <TopNavigasi />

          <Content className="content">
            <Row justify="center">
              <Col className="content-margin" span={22}>{props.children}</Col>
            </Row>
          </Content>
          <BottomNavigasi />
        </Layout>
      </Layout>
    </div>
  );
};
