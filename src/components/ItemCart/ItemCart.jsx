import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LoadImage from "../LoadImage/LoadImage";
import { incrementCount, decrementCount, deleteItem } from "../../redux/actions/actions"
import { ItemWrapper, Counter, PriceWrapper, PriceButtonWrapper } from "./ItemCart.styled";

const ItemCart = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(incrementCount(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementCount(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <ItemWrapper>
            <div>
                <LoadImage image={item.img} />
                <Link to={`/item/${item.id}`}>{item.title}</Link>
            </div>
            <PriceButtonWrapper>
                <PriceWrapper>
                    <Counter>
                        <PrimaryButton onClick={() => handleDecrement(item.id)} disabled={item.count <= 1}>-</PrimaryButton>
                        <p>{item.count}</p>
                        <PrimaryButton onClick={() => handleIncrement(item.id)} disabled={item.count >= item.max_count}>+</PrimaryButton>
                    </Counter>
                    <p>{Number(item.price * item.count).toFixed(2)}$</p>
                </PriceWrapper>
                <PrimaryButton onClick={() => handleDelete(item.id)}>X</PrimaryButton>
            </PriceButtonWrapper>
        </ItemWrapper>
    )
}

export default ItemCart;