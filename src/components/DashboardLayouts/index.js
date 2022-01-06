import { Col, Layout, Row, Affix} from 'antd';
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
        <Affix
          offsetTop={0}
          style={{
            backgroundColor: "#FFFFFF",
            position: "fixed",
            top: "76px",
            borderRight: "1.4px solid #e9e9e9",
            bottom: "0",
            zIndex: "99",
            maxHeight: "1600px",
          }}
        >
          <Row>
            <Col md={24} xs={0}>
              <SideNavigasi />
            </Col>
          </Row>
        </Affix>
        <Layout className="layout">
          <TopNavigasi />

          <Content className="content">
            <Row justify="center">
              <Col span={22} style={{ marginBottom: "100px" }}>
                {props.children}
              </Col>
            </Row>
          </Content>
          <BottomNavigasi />
        </Layout>
      </Layout>
    </div>
  );
};
