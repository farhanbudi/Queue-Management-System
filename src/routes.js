import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthRoute } from './components/CustomRoute/AuthRoute';
import { DashboardRoute } from './components/CustomRoute/DashboardRoute';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { BerandaPage } from './pages/dashboard/BerandaPage';
import { BookNomorAntrianPage } from './pages/dashboard/BookNomorAntrianPage';
import { DaftarBankPage } from './pages/dashboard/DaftarBankPage';
import { DetailInfoAntrianPage } from './pages/dashboard/DetailInfoAntrianPage';
export const Routes = () => {
    return (
      <Router>
        <Switch>
          <AuthRoute exact path="/">
            <LoginPage />
          </AuthRoute>
          <AuthRoute path="/register">
            <RegisterPage />
          </AuthRoute>
          <DashboardRoute path="/beranda">
            <BerandaPage />
          </DashboardRoute>
          <DashboardRoute path="/book-nomor-antrian">
            <BookNomorAntrianPage />
          </DashboardRoute>
          <DashboardRoute path="/daftar-bank">
            <DaftarBankPage />
          </DashboardRoute>
          <DashboardRoute path="/bank/detail/:bankId">
            <DetailInfoAntrianPage />
          </DashboardRoute>
        </Switch>
      </Router>
    );
}
