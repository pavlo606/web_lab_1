import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from 'react-router-dom';
import { InputNumber, Rate } from 'antd';
import { useDispatch } from "react-redux";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import LoadImage from "../../components/LoadImage/LoadImage";
import { addItem } from "../../redux/actions/actions";
import { ItemsBaseURL } from "../../API/api";
import { CategoryWrapper, DescriptionContainer, ItemContainer, SubmitContainer, Title } from "./ItemPage.styled";


const ItemPage = () => {
    const { itemId } = useParams();

    const [currentItem, setCurrentItem] = useState(null);
    const [itemsCount, setItemsCount] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${ItemsBaseURL}`, {
            params: {
                id: itemId
            }
        }).then((response) => {
            setCurrentItem(response.data[0]);
        });
    }, [itemId]);

    const onAddToCard = () => {
        dispatch(addItem({
            id: currentItem.id,
            img: currentItem.image,
            title: currentItem.title,
            price: currentItem.price,
            count: itemsCount,
            max_count: currentItem.quantity,
            user: JSON.parse(localStorage.getItem("login")).username,
        }))
    };

    return (
        <div>
            {currentItem ? (
                <div>
                    <Title>{currentItem.title}</Title>
                    <ItemContainer>
                        <LoadImage image={currentItem.image} />
                        <div>
                            <CategoryWrapper>
                                <Link to="#">{currentItem.category}</Link>
                            </CategoryWrapper>
                            <SubmitContainer>
                                <h3>{currentItem.price}$</h3>
                                <div>
                                    {currentItem.quantity ? false : true && <p>Item is out of stock</p>}
                                    <InputNumber 
                                        disabled={currentItem.quantity ? false : true} 
                                        min={1} 
                                        max={currentItem.quantity} 
                                        defaultValue={itemsCount}
                                        onChange={setItemsCount}
                                    />
                                    <Link to="/cart">
                                    <PrimaryButton 
                                        disabled={currentItem.quantity ? false : true}
                                        onClick={onAddToCard}
                                    >Add to cart
                                    </PrimaryButton>
                                    </Link>
                                </div>
                                <br />
                                <Rate allowHalf disabled defaultValue={currentItem.rating} />
                            </SubmitContainer>
                        </div>
                    </ItemContainer>
                    <DescriptionContainer>
                        <h2>Description</h2>
                        <ProductDescription>{currentItem.text}</ProductDescription>
                    </DescriptionContainer>
                </div>)
                : ("Item not found")}
        </div>
    )
};

export default ItemPage;