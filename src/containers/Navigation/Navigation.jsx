import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Layout from "../App/Layout/Layout";
import ItemPage from "../ItemPage/ItemPage";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Success from "../Success/Success";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('login')));

    return (
        <div>
            {isAuthenticated && <Layout setAuth={setIsAuthenticated} />}
            <Routes>
                <Route element={<ProtectedRoute isAuth={isAuthenticated} redirect="/login" />}>
                    <Route path="/" element={<Home />} key="/" />
                    <Route path="/catalog" element={<Catalog />} key="/catalog" />
                    <Route path="/cart" element={<Cart />} key="/cart" />
                    <Route path="/item/:itemId" element={<ItemPage />} key="/item" />
                    <Route path="/checkout" element={<Checkout />} key="/checkout" />
                    <Route path="/success" element={<Success />} key="/success" />
                    <Route path="/*" element={<Navigate to="/" />} key="/*" />
                </Route>
                <Route element={<ProtectedRoute isAuth={!isAuthenticated} redirect="/" />}>
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} key="/login" />
                    <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} key="/signup" />
                </Route>
            </Routes>
        </div>
    );
}

export default Navigation;
