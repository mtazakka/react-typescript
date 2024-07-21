import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./utils/RouteHandlers";
import Dashboard from "./pages/dashboard/DashboardPage";
import Users from "./pages/products/Products";
import Login from "./pages/login/Login";
import ProductDetails from "./pages/products/view/ProductsDetails";
import ProductAddNew from "./pages/products/view/ProductsAddNew";
import RegisterPage from "./pages/register/Register";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import LeasingRequest from "./pages/leasingRequest/LeasingRequest";
import CreateQuotation from "./pages/leasingRequest/view/CreateQuotation";
import UserManagement from "./pages/userManagement/UserManagement";
import UserAdd from "./pages/userManagement/view/UserAdd";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" Component={Login} />
            <Route path="/" Component={Login} />
            <Route path="/forgot-password" Component={ForgotPassword} />
            <Route path="/register" Component={RegisterPage} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Users />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/new" element={<ProductAddNew />} />
            <Route path="/leasing" element={<LeasingRequest />} />
            <Route path="/quotation/new" element={<CreateQuotation />} />
            <Route path="/user" element={<UserManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/users/:id" element={<UserAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
