import React from "react";
import { Form, Button, Select, Row, Col , Card} from "antd";
import "./style.css";
const layanan = [
  "Pendaftaran (Dilayani oleh Customer Services)",
  "Transaksi (Dilayani oleh Teller)",
  "Pinjaman (Dilayani oleh Petugas Credit)",
];


export const BookAntrian = ({dataBank, onFinish, isLoading, link, setLink}) => {

   const { Option } = Select;

  return (
    <div>
      <h1 className="title-default">
        Book antrian untuk besok (Jumat, 9 Juli 2021)
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
                colon={false}
                rules={[
                  {
                    required: true,
                    message: "Bank Tujuan tidak boleh kosong",
                  },
                ]}
              >
                <Select
                  className="form-input"
                  showSearch
                  name="bankTujuan"
                  listHeight={150}
                  allowClear
                  loading={dataBank.length === 0 && true}
                  disabled={dataBank.length === 0 && true}
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
                  className="form-input"
                  placeholder="-Pilih Layanan-"
                  name="keperluanLayanan"
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
        </Card>
      </Form>
      <Row style={{ marginTop: "24px" }} justify="end">
        <Col xs={24} md={6} xl={4}>
          <Button
            block
            htmlType="submit"
            onClick={() =>
              setLink(
                link === "/book/create" ? "/book/create/full" : "/book/create"
              )
            }
            className="btn-blue-default"
            type="primary"
          >
            {link === "/book/create" ? "link ready" : "link Full"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
