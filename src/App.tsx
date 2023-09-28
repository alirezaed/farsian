import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/order" element={<Order />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
