import { useState } from "react";
import { Card, Form, Typography, DatePicker } from "antd";
import { ProTable, ProColumns } from "@ant-design/pro-components";
import axios, { AxiosResponse } from "axios";
import { IProduct, ILeasingRequest } from "./type/LeasingRequestType";
import { updateProduct, getLeasingRequest } from "./api/LeasingRequestAPI";
import moment from "moment";

const LeasingRequest = () => {
  const { Title } = Typography;
  const { RangePicker } = DatePicker;

  const waitTimePromise = async (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const waitTime = async (time: number = 100) => {
    await waitTimePromise(time);
  };

  const columns: ProColumns<ILeasingRequest>[] = [
    {
      title: "Leasing Request No",
      dataIndex: "field1",
      key: "field1",
      width: "7%",
      render: (leasingId) => <p style={{ color: "#3875F6" }}>{leasingId}</p>,
    },
    {
      title: "Date",
      dataIndex: "field2",
      key: "field2",
      render: (date) => moment(date?.toString()).format("DD MMM YYYY hh:mm A"),
      renderFormItem: (date) => <RangePicker format="DD MM YYYY" />,
    },
    {
      title: "Name",
      dataIndex: "field3",
      key: "field3",
    },
    {
      title: "Contact No",
      dataIndex: "field4",
      key: "field4",
    },
    {
      title: "Company Name",
      dataIndex: "field5",
      key: "field5",
    },
    {
      title: "Quantity of EV",
      dataIndex: "field6",
      key: "field6",
      align: "center",
      sorter: (a, b) => a.field6 - b.field6,
    },
    {
      title: "Leasing Period",
      dataIndex: "field7",
      key: "field7",
      render: (period) => <p>{period} years</p>,
      align: "center",
    },
  ];

  return (
    <div style={{ paddingInline: 20 }}>
      <Title level={3}>Leasing Request</Title>
      <ProTable
        cardBordered
        form={{ layout: "vertical" }}
        request={async (params, sort, filter) => {
          try {
            const data = await getLeasingRequest({ filter, sort, params });

            return {
              data: data,
              success: true,
              total: data.length,
            };
          } catch (error) {
            console.error("Error fetching leasing requests:", error);
            return {
              data: [],
              success: false,
              total: 10,
            };
          }
        }}
        rowKey={(data) => data.id}
        columns={columns}
        editable={{
          type: "multiple",
          onSave: async (rowKey, data, row) => {
            // updateProduct(data);
            await waitTime(2000);
          },
        }}
      />
    </div>
  );
};

export default LeasingRequest;
