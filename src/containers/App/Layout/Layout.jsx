import React from "react";
import {
    AppstoreOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

import logo from "../../../icons/logo.svg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
// import { deleteAllUsers } from "../../../redux/actions/actions";
import { LinkingWrapper, StyledHeader, UserWrapper } from "./Layout.styled";

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: (<Link to="/catalog">Catalog</Link>),
        key: 'catalog',
        icon: <AppstoreOutlined />
    },
    {
        label: (<Link to="/cart">Cart</Link>),
        key: 'cart',
        icon: <ShoppingCartOutlined />
    }
];

function Layout({ setAuth }) {
    // const dispatch = useDispatch();

    return (
        <StyledHeader>
            <img src={logo} alt="" width={100} />

            <LinkingWrapper>
                <Menu
                    selectedKeys={[]}
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={items}
                />
            </LinkingWrapper>

            <UserWrapper>
                <h4>{JSON.parse(localStorage.getItem("login")).username}</h4>
                <PrimaryButton type="primary" onClick={() => {
                    setAuth(null);
                    localStorage.setItem("login", null);
                    // dispatch(deleteAllUsers());
                }}>Log Out</PrimaryButton>
            </UserWrapper>
        </StyledHeader>
    );
}

export default Layout;
