import {  faHome, faListOl, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Col,  Row } from 'antd';
import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { message } from '../../helper/message';
import "./style.css";

export const BottomNavigasi = () => {

    const loc = useLocation();
    const history = useHistory();

     const position = loc.pathname.substring(1);

    const onClickMenu = (key) => {
      switch (key) {
        case "beranda":
          return history.push("/beranda");
        case "book-nomor-antrian":
          return history.push("/book-nomor-antrian");
        case "daftar-bank":
          return history.push("/daftar-bank");
        case "sign-out":
          return history.push("/");
        default:
          return "halaman salah";
      }
    };
     const logOut = () => {
       const data = {
         fnOk() {
           localStorage.removeItem("user_id");
           history.push("/");
         },
       };
       message.logout(data);
     };

     const addActiveStyling = (params) => position === params ? "bottom-navigasi-active" :"" 

    return (
      <div className="bottom-navigation">
          <Row className="bottom-navigasi">
            <Col
              md={0}
              xs={6}
              className={addActiveStyling("beranda")}
              onClick={() => onClickMenu("beranda")}
            >
              <FontAwesomeIcon icon={faHome} />
              <p>Beranda</p>
            </Col>
            <Col
              md={0}
              xs={6}
              className={addActiveStyling("book-nomor-antrian")}
              onClick={() => onClickMenu("book-nomor-antrian")}
            >
              <FontAwesomeIcon icon={faUsers} />
              <p>Book Antrian</p>
            </Col>
            <Col
              md={0}
              xs={6}
              className={addActiveStyling("daftar-bank")}
              onClick={() => onClickMenu("daftar-bank")}
            >
              <FontAwesomeIcon icon={faListOl} />
              <p>Daftar Bank</p>
            </Col>
            <Col
              md={0}
              xs={6}
              onClick={logOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p> Keluar</p>
            </Col>
          </Row>
      </div>
    );
}
