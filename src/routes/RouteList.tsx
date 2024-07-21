import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/DashboardPage";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/view/ProductsDetails";
import ProductAddNew from "../pages/products/view/ProductsAddNew";
import NotFoundPage from "../pages/notFoundPage/notFoundPage";
import LeasingRequest from "../pages/leasingRequest/LeasingRequest";
import CreateQuotation from "../pages/leasingRequest/view/CreateQuotation";
import UserManagement from "../pages/userManagement/UserManagement";
import UserAdd from "../pages/userManagement/view/UserAdd";

export default function RouteList() {
  const handleAdminRoutes = () => (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/new" element={<ProductAddNew />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/leasing" element={<LeasingRequest />} />
      <Route path="/quotation/new" element={<CreateQuotation />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/users/:id" element={<UserAdd />} />
    </>
  );

  // TODO modify when API implementation is done
  const handleRolesRoutes = (roles: string) => {
    switch (roles) {
      case "operator":
        return NotFoundPage();
      case "admin":
        return handleAdminRoutes();
      default:
        return NotFoundPage();
    }
  };

  return <Routes>{handleRolesRoutes("admin")}</Routes>;
}
