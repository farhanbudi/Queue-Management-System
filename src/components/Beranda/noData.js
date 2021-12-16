import React from "react";
import "./style.css";
import { Button, Card, Col, Row, Typography } from "antd";
const { Paragraph } = Typography;

function NoData(props) {
  return (
    <div
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Card
        className="default-card"
        style={{
          fontSize: "24px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Paragraph strong style={{ marginBottom: 0 }}>
          Anda sedang tidak membooking antrian saat ini.
        </Paragraph>
        <Paragraph strong>
          Silahkan lakukan booking melalui aplikasi pada H-1.
        </Paragraph>
        <Row justify="center">
          <Col xs={24} lg={{ span: 10 }} xl={{ span: 7 }}>
            <Button
              block
              htmlType="submit"
              className="btn-blue-default"
              type="primary"
              onClick={props.redirectBook}
            >
              <p style={{ fontSize: "16px" }}>Booking Nomor Antrian</p>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default NoData;
