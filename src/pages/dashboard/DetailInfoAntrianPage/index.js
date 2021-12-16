import React, { useEffect, useState } from "react";
import { DetailInfoAntrian } from "../../../components/Detail";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { instance } from '../../../api/instance';
import { useParams } from 'react-router-dom';
import Loading from "../../../components/Detail/loading";

export const DetailInfoAntrianPage = () => {
  const { bankId } = useParams();
  
  const [detailAntrian, setDetailAntrian] = useState({});
  const [isLoading, setLoading] = useState();

  const [filterDate, setFilterDate] = useState("");

  const loadDetail = async () => {
   setLoading(true)
   await instance
     .get(`/bank/${await bankId}/antrian${filterDate}`)
     .then((res) => {
       setDetailAntrian(res.data.data);
       setLoading(false);
       console.log(res.data);
     })
     .catch((err) => {
       console.log(err);
       setLoading(false);
     });
  };
  useEffect(() => {
    loadDetail();
  }, [filterDate]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardLayouts>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailInfoAntrian
            data={detailAntrian}
            filterDate={filterDate}
            setFilterDate={(data) => setFilterDate(data)}
          />
        </>
      )}
    </DashboardLayouts>
  );
};
