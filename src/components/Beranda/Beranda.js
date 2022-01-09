import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import "./style.css";
import "../DangerText/style.css";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Paragraph, Text, Link } = Typography;

function Beranda(props) {
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1 className="title-default" style={{ marginBottom: "10px" }}>
        Detail Booking
      </h1>
      <div className="beranda-card">
        <Card className="default-card" bodyStyle={{ padding: 0 }}>
          <Card
            id="beranda-top"
            bodyStyle={{ paddingTop: "10px", paddingBottom: 0 }}
          >
            <p className="card-title" style={{ fontSize: "24px" }}>
              <b>Nomor Antrian</b>
            </p>
            <p className="no-antrian">{props.detail?.id_booking}</p>
          </Card>

          <Row>
            <Col span={12}>
              <Card
                id="beranda-middle-left"
                bodyStyle={{ paddingTop: "10px", paddingBottom: 0 }}
              >
                <p className="card-title">Bank Tujuan</p>
                <p style={{ fontSize: "18px" }}>
                  <b>{props.namaBank}</b>
                </p>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                id="beranda-middle-right"
                bodyStyle={{ paddingTop: "10px", paddingBottom: 0 }}
              >
                <p className="card-title">Keperluan Layanan</p>
                <p style={{ fontSize: "18px" }}>
                  <b>{props.keperluan}</b>
                </p>
              </Card>
            </Col>
          </Row>

          <Card id="beranda-bottom" bodyStyle={{ paddingTop: "10px" }}>
            <Paragraph style={{ marginBottom: 0 }}>
              Nomor antrian akan dilayani pada tanggal:{" "}
            </Paragraph>
            <Paragraph style={{ marginBottom: "10px" }}>
              <Text strong>
                {props.date}, pukul {props.detail?.jam_pelayanan} WIB.
              </Text>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              Untuk mempercepat transaksi, silahkan kunjungi{" "}
              <Link href="https://eform.bri.co.id" style={{ color: "#014A94" }}>
                <b>e-form.</b>
              </Link>
            </Paragraph>
            <Row justify="center">
              <Col span={16}>
                <div
                  className="danger-text"
                  style={{ width: "fit-content", margin: "auto" }}
                >
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  <p>Harap Mendatangi kantor sebelum waktu pelayanan</p>
                </div>
              </Col>
            </Row>
            <Row justify="center" style={{ marginTop: "20px" }}>
              <Col xs={24} lg={{ span: 10 }} xl={{ span: 6 }}>
                <Button
                  block
                  htmlType="submit"
                  className="btn-blue-default"
                  type="primary"
                  onClick={props.onClick}
                >
                  Layanan Selesai
                </Button>
              </Col>
            </Row>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default Beranda;
