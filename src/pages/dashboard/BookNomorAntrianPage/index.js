import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { instance } from "../../../api/instance";
import { BookingAntrian } from "../../../components/BookingAntrian";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { message } from "../../../helper/message";

export const BookNomorAntrianPage = () => {
  const [dataBank, setDataBank] = useState([]);

  const callApiBank = async () => {
    const res = await instance.get("/bank");
    setDataBank(res.data.data);
  };

  useEffect(() => {
    // setTimeout(() => {
    callApiBank();
    // }, 5000);
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("/book/create");
  const history = useHistory();
  const onFinish = async (values) => {
    console.log(values.bankTujuan);
    const bankTujuan = dataBank.filter(
      (data) => data.nama_bank === values.bankTujuan
    );
    console.log(bankTujuan.id_bank);
    console.log(values.keperluanLayanan);

    try {
      setIsLoading(true);
      const data = {
        id_bank_tujuan: 1,
        keperluan_layanan: 1,
        id_user: 1,
      };

      const res = await instance.post(link, data);
      setIsLoading(false);
      if (res.data.message === "berhasil") {
        const notifSuccess = {
          title: "Berhasil",
          content: (
            <Row justify="center">
              <Col span={18}>
                Nomor antrian anda <span className="text-bold">87 </span>
                di
                <span className="text-bold">{` ${values.bankTujuan}`}</span>
              </Col>
            </Row>
          ),
          fnOk: () => history.push("/"),
        };
        message.success(notifSuccess);
      } else if (res.data.message === "booking penuh") {
        const notifWarning = {
          title: "Mohon Maaf",
          content: (
            <Row justify="center">
              <Col span={18}>
                Kuota
                <span className="text-bold">{` ${values.bankTujuan}`}</span>{" "}
                sudah penuh, silakan pilih bank lainnya
              </Col>
            </Row>
          ),
          fnOk: () => {},
        };
        message.warning(notifWarning);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayouts>
      <BookingAntrian
        dataBank={dataBank}
        onFinish={onFinish}
        isLoading={isLoading}
        link={link}
        setLink={(data) => setLink(data)}
      />
    </DashboardLayouts>
  );
};
