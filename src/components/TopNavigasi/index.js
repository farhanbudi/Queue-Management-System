import {faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Affix, Layout } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import dashboardLogo from "../../assets/image/dashboard-logo.png";
import { message } from '../../helper/message';
import "./style.css";

export const TopNavigasi = () => {
        const { Header } = Layout;
         const history = useHistory();
        const logOut = () => {
          const data = {
            fnOk() {
              localStorage.removeItem("user_id");
              history.push("/");
            },
          };
           message.logout(data);
        };

        const backToBeranda = () => history.push("/");
        
  return (
    <Affix offsetTop={0} className="top-navigasi">
      <Header>
        <div className="top-nav-logo">
          <img
            src={dashboardLogo}
            className="side-nav-logo"
            alt=""
            onClick={backToBeranda}
          />
        </div>
        <img
          src={dashboardLogo}
          className="img-mobile-logo"
          alt=""
          onClick={backToBeranda}
        />
        <span className="logout" onClick={logOut}>
          Keluar<FontAwesomeIcon icon={faSignOutAlt} />
        </span>
      </Header>
    </Affix>
  );
};
