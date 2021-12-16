import React from 'react'
import {Layout, Menu } from "antd";
import "./style.css";
import { useHistory, useLocation } from 'react-router';

const { Sider } = Layout;

export const SideNavigasi = () => {
   
    const location = useLocation();
    const history  = useHistory();
    const position = location.pathname.substring(1);
    
    const patt = new RegExp("bank/detail/");

    const checkPosition = () =>
      patt.test(position)  ? "daftar-bank" : position;

    const onClickMenu = ({key}) => {
      switch (key) {
        case "beranda"            : return history.push("/beranda");
        case "book-nomor-antrian" : return history.push("/book-nomor-antrian");
        case "daftar-bank"        : return history.push("/daftar-bank");
        case "sign-out"           : return history.push("/");
        default                   : return 'halaman salah';
      }
    };
        
    return (
      <Sider width={280}>
        <Menu
          className="side-nav-menu"
          mode="inline"
          onClick={onClickMenu}
          defaultSelectedKeys={[checkPosition()]}
        >
          <Menu.Item key="beranda" className="list-side-nav">
            <div className="list-item-side-nav">
              <p className="item-title">Beranda</p>
            </div>
          </Menu.Item>
          <Menu.Item key="book-nomor-antrian" className="list-side-nav">
            <div className="list-item-side-nav">
              <p className="item-title">Book Nomor Antrian</p>
            </div>
          </Menu.Item>
          <Menu.Item key="daftar-bank" className="list-side-nav">
            <div className="list-item-side-nav ">
              <p className="item-title">Daftar Bank dan Info Antrian</p>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
    );
}
