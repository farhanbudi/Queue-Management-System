import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { instance } from "../../../api/instance";
import { BookingAntrian } from "../../../components/BookingAntrian";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { message } from "../../../helper/message";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const messageBooking = (history, { kuota, nomor_antrian, nama_bank }) => {
  return kuota > 0
    ? notifSuccess(history, nomor_antrian, nama_bank)
    : notifWarning(nama_bank);
};

const notifSuccess = (history, nomor_antrian, nama_bank) =>{
        message.success({
          title: "Berhasil",
          content: (
            <Row justify="center">
              <Col span={18}>
                Nomor antrian anda
                <span className="text-bold"> {`${nomor_antrian} `} </span>
                di
                <span className="text-bold">{` ${nama_bank}`}</span>
              </Col>
            </Row>
          ),
          fnOk: () => history.push("/"),
        });
}

const notifWarning = (nama_bank) =>{
   message.warning({
     title: "Mohon Maaf",
     content: (
       <Row justify="center">
         <Col span={18}>
           Kuota
           <span className="text-bold">{` ${nama_bank}`}</span> sudah penuh,
           silakan pilih bank lainnya
         </Col>
       </Row>
     ),
     fnOk: () => {},
   });
}


export const BookNomorAntrianPage = () => {
  const [dataBank, setDataBank] = useState([]);
  const [checkBookingUser, setCheckBookingUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const callApiBank = async () => {
   try {
      const res = await instance.get("/bank");
      setDataBank(res.data.data);
   } catch (error) {
     console.log(error)
   }
  };

  const checkBooking = async () => {
   try {
      const id_user = await localStorage.getItem("user_id");
      const res = await instance.get(`/user/${id_user}/booking`);
      setCheckBookingUser(res.data.data);
   } catch (error) {
     console.log(error)
   }
  };

  useEffect(() => {
    checkBooking();
    callApiBank();
  }, []);

  const onFinish = async (values) => {
    console.log(values)
    const bankTujuan = dataBank.filter(
      (data) => data.nama_bank === values.bankTujuan
    );
    const id_user = await parseInt(localStorage.getItem("user_id"));
    const data = {
      user_id: id_user,
      bank_id: bankTujuan[0].id,
      keperluan_layanan: values.keperluanLayanan,
      nama_bank: values.bankTujuan,
    };
    
    try {
      setIsLoading(true);
      const res = await instance.post("/bank/booking", data);
      setIsLoading(false);
      messageBooking(history, res.data.data)
    } catch (error) {
      setIsLoading(false);
    }
  };

  const query = useQuery();
  

  return (
    <DashboardLayouts>
      <BookingAntrian
        dataBank={dataBank}
        checkBookingUser={checkBookingUser}
        onFinish={onFinish}
        isLoading={isLoading}
        bankSelected={query.get("nama-bank")}
      />
    </DashboardLayouts>
  );
};
