import React, { useEffect, useState } from "react";
import { DetailInfoAntrian } from "../../../components/Detail";
import { DashboardLayouts } from "../../../components/DashboardLayouts";
import { instance } from "../../../api/instance";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Detail/loading";
import { dateFormat, getDateWithDay } from "../../../helper/date";

export const DetailInfoAntrianPage = () => {
  const { bankId } = useParams();
  const [detailAntrian, setDetailAntrian] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [link, setLink] = useState("/book/create");

  const date = getDateWithDay(null, dateFormat.dateMonth);

  const loadDetail = async () => {
    setLoading(true);
    instance
      .get(`/bank/detail/${await bankId}`)
      .then((res) => {
        setDetailAntrian(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    loadDetail();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardLayouts>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailInfoAntrian
            data={detailAntrian}
            link={link}
            setLink={(data) => setLink(data)}
            date={date}
          />
        </>
      )}
    </DashboardLayouts>
  );
};
