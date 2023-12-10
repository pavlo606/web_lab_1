import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import ItemCart from "../../components/ItemCart/ItemCart";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { CartContainer, ButtonsWrapper } from "./Cart.styled";

const Cart = () => {
    const itemList = useSelector((state) => state.itemList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        itemList.forEach(element => {
            sum += element.price * element.count;
        });
        console.log(sum);
        setTotalPrice(sum);
    }, [itemList])

    return (
        <CartContainer>
            {
                itemList.length > 0 ?
                itemList.map((item) => (
                    <ItemCart item={item} key={item.id}/>
                )) :
                <h3>Cart is empty</h3>
            }
            {itemList.length > 0 && <p>Total amount: {Number(totalPrice).toFixed(2)}$</p>}
            <ButtonsWrapper>
                <Link to="/catalog">
                    <PrimaryButton>Back to Catalog</PrimaryButton>
                </Link>
                <Link to="/checkout">
                    <PrimaryButton type="primary" disabled={itemList.length <= 0}>Continue</PrimaryButton>
                </Link>
            </ButtonsWrapper>
        </CartContainer>
    )
}

export default Cart