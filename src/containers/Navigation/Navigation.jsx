import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Layout from "../App/Layout/Layout";
import ItemPage from "../ItemPage/ItemPage";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Success from "../Success/Success";

function Navigation() {

    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} key="/" />
                <Route path="/catalog" element={<Catalog />} key="/catalog" />
                <Route path="/cart" element={<Cart />} key="/cart" />
                <Route path="/item/:itemId" element={<ItemPage />} key="/item" />
                <Route path="/checkout" element={<Checkout />} key="/checkout" />
                <Route path="/success" element={<Success />} key="/success" />
                <Route path="/*" element={<Navigate to="/" />} key="/*" />
            </Routes>
        </div>
    );
}

export default Navigation;
