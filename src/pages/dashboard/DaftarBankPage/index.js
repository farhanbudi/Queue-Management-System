import React, { useEffect, useState }  from "react";
import { DaftarListBank } from "../../../components/DaftarBank";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { instance } from "../../../api/instance"

export const DaftarBankPage = () => {
  const [daftarBank, setDaftarBank] = useState([]);
  const [ urlBank, setUrlBank] = useState('/bank');
  useEffect(() =>{
    instance
    .get(urlBank)
    .then((res) =>{
      setDaftarBank(res.data.data);
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
  },[urlBank]);

  const [dataTableBank, setDataTableBank] = useState([]);
  const dataBankSearch = daftarBank?.filter((data) => {
    return data?.nama_bank.toLowerCase().includes(dataTableBank) || data?.alamat.toLowerCase().includes(dataTableBank) ;
  });

  const onChange = (data) => {
    setDataTableBank([data]);
  };
  console.log(urlBank)
  return (
    <DashboardLayouts>
      <DaftarListBank
        changeUrlBank={(data) => setUrlBank(data === "semua"?"/bank":`bank/${data}`)}
        data={dataBankSearch}
        onChange={(data) => onChange(data)}
      />
    </DashboardLayouts>
  );
};
