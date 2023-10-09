import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Order />} />
      <Route path="/AllOrders" element={<Orders />} />
    </Route>
  </Routes>
);

export default App;
