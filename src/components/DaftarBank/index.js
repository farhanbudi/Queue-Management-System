/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Input, Table, Select } from 'antd';
import { useHistory } from 'react-router';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const { Option } = Select;
export const DaftarListBank = (props) => {
  const history = useHistory();
  const redirectToDetailInfo = (idBank) => history.push(`bank/detail/${idBank}`);

  return (
    <div>
      <h1 className="title-default">Daftar Bank</h1>
      <div>
        <Input
          size={'large'}
          onChange={(e) => props.onChange(e.target.value)}
          prefix={<FontAwesomeIcon icon={faSearch} style={{ marginRight:"10px"}} />}
          style={{
            borderRadius: "6px",
            marginTop: "20px",
            marginBottom: "10px",
            width: "50%",
            fontSize: "18px",
            border: "1px solid",
            boxSizing: "border-box"
          }}
          placeholder="Cari Kantor Cabang..."
          allowClear
        />
        <Select 
          defaultValue="semua" 
          size={'large'}
          style={{
            borderRadius: "6px",
            marginTop: "20px",
            marginBottom: "30px",
            width: "25%",
            border: "1px solid",
            float: "right",
            fontSize:"18px",
          }} 
          onChange={value => props.changeUrlBank(value)}
        >
          <Option value="bandung">Bandung</Option>
          <Option value="batam">Batam</Option>
          <Option value="makassar">Makassar</Option>
          <Option value="jakpus">Jakarta Pusat</Option>
          <Option value="medan">Medan</Option>
          <Option value="semua">Semua Bank</Option>
        </Select>
      </div>
      <Table
        rowKey="id"
        dataSource={props?.data}
        loading={props.data?.length === 0 ? true : false}
        className="table-data-bank"
        pagination={{ pageSize: 5 }}
      >
        <Table.Column title="No" dataIndex="id" key="id" />
        <Table.Column title="Bank" dataIndex="nama_bank" key="nama_bank" />
        <Table.Column title="Alamat" dataIndex="alamat" key="alamat" />
        <Table.Column
          title={<center>Lihat Detail Antrian</center>}
          key="id"
          render={(record) => (
            <a onClick={()=>redirectToDetailInfo(record.id)}>
              <center>Lihat Detail</center>
            </a>
          )}
        />
      </Table>
    </div>
  );
}