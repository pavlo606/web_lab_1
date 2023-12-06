import React from "react";
import {
    AppstoreOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../../../icons/logo.svg";
import { LinkingWrapper, StyledHeader } from "./Layout.styled";
import { Link } from "react-router-dom";

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
        label: (<Link to="/cart">cart</Link>),
        key: 'cart',
        icon: <ShoppingCartOutlined />
    }
];

function Layout() {
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
        </StyledHeader>
    );
}

export default Layout;
