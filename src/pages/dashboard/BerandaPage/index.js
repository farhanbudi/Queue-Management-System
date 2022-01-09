import React, { useEffect, useState } from "react";
import Beranda from "../../../components/Beranda/Beranda";
import NoData from "../../../components/Beranda/noData";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { instance } from "../../../api/instance";
import Loading from "../../../components/Beranda/Loading";
import { useHistory } from "react-router";
import { message } from "../../../helper/message";
import { Col, Row } from "antd";
import { dateFormat, getDateWithDay } from "../../../helper/date";

export const BerandaPage = () => {
  const [detail, setDetail] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isBooking, setBooking] = useState(false);
  const history = useHistory();

  const date = getDateWithDay(null, dateFormat.dateMonth);

  useEffect(() => {
    setLoading(true);
    instance
      .get(`book/1`)
      .then((res) => {
        if (res.data.status === 200) {
          setBooking(true);
        } else {
          setBooking(false);
        }
        setDetail(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const serviceDone = () => {
    instance
      .delete(`book/selesai/${detail?.id_booking}`)
      .then((res) => {
        setBooking(false);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClick = () => {
    message.confirmWarning(notifWarning);
  };

  const notifWarning = {
    title: "Layanan Selesai",
    content: (
      <Row justify="center">
        <Col span={18}>Anda yakin hendak mengakhiri layanan?</Col>
      </Row>
    ),
    fnOk: serviceDone,
  };

  const redirectBook = () => {
    history.push("/book-nomor-antrian");
  };

  let namaBank = "";
  if (detail?.id_bank_tujuan === 1) {
    namaBank = "Bank KCP Soreang";
  } else if (detail?.id_bank_tujuan === 2) {
    namaBank = "Bank KCP Banjaran";
  }

  let keperluan = "";
  if (detail?.keperluan_layanan === 1) {
    keperluan = "Pendaftaran (Dilayani oleh Customer Services)";
  } else if (detail?.keperluan_layanan === 2) {
    keperluan = "Transaksi (Dilayani oleh Teller)";
  } else if (detail?.keperluan_layanan === 3) {
    keperluan = "Pinjaman (Dilayani oleh Petugas Kredit)";
  }

  return (
    <DashboardLayouts>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isBooking ? (
            <Beranda
              detail={detail}
              namaBank={namaBank}
              keperluan={keperluan}
              date={date}
              onClick={onClick}
            />
          ) : (
            <NoData redirectBook={redirectBook} />
          )}
        </>
      )}
    </DashboardLayouts>
  );
};
