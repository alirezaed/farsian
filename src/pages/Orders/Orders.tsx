import React, { useEffect, useState } from "react";
// import Container from '@mui/material/Container'
import { Container, Grid, Box, Button, styled } from "@mui/material";

import { MyContainer } from "./Orders.Style";
import axios from "../../axios";
import TableEx, { ColumnType } from "../../components/Table/Table";
import Loading from "../../components/Loading/Loading";

// breakpoint[ xs,sm,md,lg,xl ]

interface Order {
  order_number: number;
  create_date: string;
  status: string;
  meat: number;
  salad: number;
  cheese: number;
  total_price: number;
  comment: string;
  rate: number;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const load = () => {
    axios
      .post("/SafeOrders/GetAllOrders", null, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((c) => {
        setOrders(c.data);
      })
      .finally(() => setLoading(false));
  };

  // [] Load Page
  // [x,y,z]
  useEffect(() => {
    load();
  }, []);
  // useEffect(() => {
  //   axios.post("/orders/GetAllOrders").then((c) => {
  //     setOrders(c.data);
  //   });
  // }, []);

  const columns: ColumnType[] = [
    {
      fieldName: "order_number",
      title: "Order Number",
    },
    {
      fieldName: "create_date",
      title: "Create Date",
    },
    {
      fieldName: "total_price",
      title: "Total Price",
    },
    {
      fieldName: "comment",
      title: "Comment",
    },
  ];

  const columns2 = [
    {
      fieldName: "firstname",
      title: "First",
    },
    {
      fieldName: "lastname",
      title: "Last",
    },
  ];

  const data2 = [
    { id: 1, firstname: "ali", lastname: "hasani" },
    { id: 2, firstname: "reza", lastname: "hoseini" },
    { id: 3, firstname: "mozhgan", lastname: "ghafari" },
  ];

  return (
    <MyContainer>
      {loading && <Loading />}
      {/* <TableEx data={data2} columns={columns2} keyfield="id" /> */}
      <TableEx data={orders} columns={columns} keyfield="order_number" />
    </MyContainer>
  );
}
