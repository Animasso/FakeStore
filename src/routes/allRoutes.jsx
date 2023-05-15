import React from "react";
import { Routes, Route } from "react-router-dom";
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
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
