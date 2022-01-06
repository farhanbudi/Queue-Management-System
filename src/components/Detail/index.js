  import React,{useState} from 'react'
  import { Layout, Button,  Row, Col, Card} from 'antd';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { useHistory } from 'react-router';
  import './style.css';
import { DangerText } from '../DangerText';
  
  const { Content } = Layout;

  export const DetailInfoAntrian = ({data, link, setLink}) => {
    const [buttonDisable, setButtonDisable] = useState(false); 
    const history = useHistory();
    const redirectToDaftarBank = () => history.push('/daftar-bank')
    const redirectToBookAntrian = () => history.push('/book-nomor-antrian')

      return (
        <div>
          <Content className="tb">
            <h1 className="title-default">
              Info Antrian Hari Ini ({data.tanggal_antrian_saat_ini})
            </h1>
            <Card className="default-card" size="default">
              <div>
                <Row className="row">
                  <Col span={12}>Bank</Col>
                  <Col span={1}>:</Col>
                  <Col span={10}>
                    <b>{data.nama_bank}</b>
                  </Col>
                </Row>
                <Row className="row">
                  <Col span={12}>Alamat</Col>
                  <Col span={1}>:</Col>
                  <Col span={10}>{data.alamat}</Col>
                </Row>
                <Row className="row">
                  <Col span={12}>
                    Nomor antrian yang sedang dilayani saat ini
                  </Col>
                  <Col span={1}>:</Col>
                  <Col span={10}>
                    <b>{data?.no_antrian_saat_ini}</b>
                    <span> (pukul {data?.waktu_pelayanan})</span>
                  </Col>
                </Row>
              </div>
              <Row
                style={{ marginTop: "84px" }}
                justify="space-between"
                className="btn-row"
              >
                <Col xs={24} md={6} lg={4}>
                  <Button
                    onClick={redirectToDaftarBank}
                    className="btn-default"
                    block
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    &nbsp; Kembali
                  </Button>
                </Col>
                <Col xs={24} md={11} lg={7} className="btn-add-style">
                  <Button
                    disabled={buttonDisable}
                    type="primary"
                    block
                    className="btn-blue-default"
                    onClick={redirectToBookAntrian}
                  >
                    Booking untuk besok &nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Col>
              </Row>
              {buttonDisable && (
                <Row justify="end" className="btn-row">
                  <Col xs={24} md={11} lg={7} style={{ marginTop: "12px" }}>
                    <DangerText>Kuota Besok Penuh</DangerText>
                  </Col>
                </Row>
              )}
            </Card>
          </Content>
          <Row style={{ marginTop: "24px" }} justify="end">
            <Col xs={24} md={6} xl={4}>
              <Button
                block
                className="btn-blue-default"
                htmlType="submit"
                onClick={() => setButtonDisable(buttonDisable ? false : true)}
              >
                {buttonDisable ? "Booking Penuh" : "Booking Ready"}
              </Button>
            </Col>
          </Row>
        </div>
      );
  }