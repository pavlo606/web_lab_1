import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { InputNumber, Rate } from 'antd';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { CategoryWrapper, DescriptionContainer, ItemContainer, SubmitContainer, Title } from "./ItemPage.styled";
import { ItemsBaseURL, downloadImage } from "../../API/api";
import axios from "axios";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

const ItemPage = () => {
    const { itemId } = useParams();

    const [currentItem, setCurrentItem] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`${ItemsBaseURL}`, {
            params: {
                id: itemId
            }
        }).then((response) => {
            setCurrentItem(response.data[0]);
        });
    }, [itemId]);

    useEffect(() => {
        if (currentItem) {
            downloadImage(currentItem.image, setImageData, setLoading);
        }
    }, [currentItem]);

    return (
        <div>
            {currentItem ? (
                <div>
                    <Title>{currentItem.title}</Title>
                    <ItemContainer>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            imageData && <img src={imageData} alt={currentItem.image} />
                        )}
                        <div>
                            <CategoryWrapper>
                                <Link to="#">{currentItem.category}</Link>
                            </CategoryWrapper>
                            <SubmitContainer>
                                <h3>{currentItem.price}$</h3>
                                <div>
                                    {currentItem.quantity ? false : true && <p>Item is out of stock</p>}
                                    <InputNumber disabled={currentItem.quantity ? false : true} min={1} max={currentItem.quantity} defaultValue={1} />
                                    <PrimaryButton disabled={currentItem.quantity ? false : true}>Add to cart</PrimaryButton>
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