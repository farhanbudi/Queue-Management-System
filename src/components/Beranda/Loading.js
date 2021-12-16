import React from "react";
import { Skeleton } from "antd";

function Loading() {
  return (
    <>
      <Skeleton active paragraph={{ rows: 0 }} />
      <br />
      <Skeleton active paragraph={{ rows: 0 }} />
      <Skeleton active paragraph={{ rows: 0 }} />
      <Skeleton active paragraph={{ rows: 0 }} />
      <br />
      <Skeleton active />
    </>
  );
}

export default Loading;
