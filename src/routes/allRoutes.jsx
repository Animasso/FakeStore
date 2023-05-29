import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import {
  HomePage,
  CartPage,
  DashboardPage,
  OrderPage,
  Login,
  Register,
  Page404,
  ProductList,
  ProductDetail,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
export const AllRoutes = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoutes>
            <CartPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/order"
        element={
          <ProtectedRoutes>
            <OrderPage />
          </ProtectedRoutes>
        }
      />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
