import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { AppContext } from "./context/AppContext";
import { Provider } from 'react-redux';
import store from "./store/store";

const Order = React.lazy(() => import("./pages/Order/Order"));
const Orders = React.lazy(() => import("./pages/Orders/Orders"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp"));
const Review = React.lazy(() => import("./pages/Review"));




const App = () => (
  <Provider store={store}>
    <React.Suspense fallback={<>loading....</>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Order />} />
          <Route path="/AllOrders" element={<Orders />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Route>
      </Routes>
    </React.Suspense>
  </Provider>
);

export default App;
