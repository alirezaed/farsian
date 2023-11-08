import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AppContext } from "./context/AppContext";

const App = () => (
  <AppContext>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Order />} />
        <Route path="/AllOrders" element={<Orders />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Route>
    </Routes>
  </AppContext>
);

export default App;
