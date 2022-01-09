import React from "react";
import { Form, Button, Select, Row, Col, Card } from "antd";
import "./style.css";
import { DangerText } from "../DangerText";
import { getTommorrowDate } from "../../helper/date";
const layanan = [
  "Pendaftaran (Dilayani oleh Customer Services)",
  "Transaksi (Dilayani oleh Teller)",
  "Pinjaman (Dilayani oleh Petugas Credit)",
];
const { Option } = Select;

export const BookingAntrian = (props) => {
  const { dataBank, checkBookingUser, onFinish, isLoading, bankSelected } =
    props;
  return (
    <div>
      <h1 className="title-default">
        Book antrian untuk besok ({getTommorrowDate()})
      </h1>
      <Form
        wrapperCol={{ span: 24 }}
        labelAlign="left"
        onFinish={onFinish}
        className="form-book-nomor-antrian"
      >
        <Card className="default-card">
          <Row className="form-row">
            <Col xs={12} md={6} className="label-form">
              Bank Tujuan
            </Col>
            <Col xs={0} md={1} className="label-form">
              :
            </Col>
            <Col xs={24} md={17}>
              <Form.Item
                name="bankTujuan"
                initialValue={bankSelected}
                colon={false}
                rules={[
                  {
                    required: true,
                    message: "Bank Tujuan tidak boleh kosong",
                  },
                ]}
              >
                <Select
                  data-testid="select-box"
                  className="form-input select-1"
                  showSearch
                  name="bankTujuan"
                  listHeight={150}
                  defaultValue={bankSelected}
                  allowClear
                  loading={dataBank.length === 0 && true}
                  disabled={(dataBank.length === 0 || checkBookingUser) && true}
                  placeholder="-Pilih Unit Kerja/Kantor Cabang-"
                >
                  {dataBank.map((data, index) => (
                    <Option key={index} value={data.nama_bank}>
                      {data.nama_bank}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row className="form-row">
            <Col xs={12} md={6} className="label-form">
              Keperluan Layanan
            </Col>
            <Col xs={0} md={1} className="label-form">
              :
            </Col>
            <Col xs={24} md={17}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Keperluan Layanan tidak boleh kosong",
                  },
                ]}
                name="keperluanLayanan"
                colon={false}
              >
                <Select
                  data-testid="select-box"
                  className="form-input select-2"
                  placeholder="-Pilih Layanan-"
                  name="keperluanLayanan"
                  disabled={checkBookingUser ? true : false}
                >
                  {layanan.map((data, index) => (
                    <Option key={index} value={++index}>
                      {data}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className="form-button">
            <Col
              xs={24}
              md={{ span: 12, offset: 12 }}
              lg={{ span: 7, offset: 17 }}
            >
              <Button
                disabled={checkBookingUser ? true : false}
                block
                loading={isLoading}
                htmlType="submit"
                className="btn-blue-default"
                type="primary"
              >
                Dapatkan Nomor Antrian
              </Button>
            </Col>
          </Row>
          {checkBookingUser && (
            <Row justify="end" className="btn-row">
              <Col xs={24} md={11} lg={7} style={{ marginTop: "12px" }}>
                <DangerText>Anda Sedang di Antrian</DangerText>
              </Col>
            </Row>
          )}
        </Card>
      </Form>
    </div>
  );
};
