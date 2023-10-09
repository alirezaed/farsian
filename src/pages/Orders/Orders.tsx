import React, { useEffect, useState } from "react";
// import Container from '@mui/material/Container'
import { Container, Grid, Box, Button, styled } from "@mui/material";

import { MyContainer } from "./Orders.Style";
import axios from "../../axios";
import TableEx, { ColumnType } from "../../components/Table/Table";

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
  const [data, setOrders] = useState<Order[]>([]);

  const load = () => {
    axios.post("/orders/GetAllOrders").then((c) => {
      setOrders(c.data);
    });
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
      fieldName: "meat",
      title: "Meat",
    }
  ];

  return (
    <MyContainer>
      <TableEx data={data} columns={columns} />
    </MyContainer>
  );
}
