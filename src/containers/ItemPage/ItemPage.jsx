import React, { useContext } from "react";
import { useParams, Link } from 'react-router-dom';
import { InputNumber, Rate } from 'antd';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { CategoryWrapper, Description, DescriptionContainer, ItemContainer, SubmitContainer, Title } from "./ItemPage.styled";
import { ItemContext } from "../../context/Items";

const ItemPage = () => {
    const { itemId } = useParams();
    const data = useContext(ItemContext);
    let currentItem = null;
    for (const i of data) {
        if (i.id === itemId) {
            currentItem = i;
        }
    }
    
    if (currentItem == null) {
        return (<div>Fuck you</div>)
    }

    const isInStock = currentItem.quantity ? true: false;

    return (
        <div>
            <Title>{ currentItem.title }</Title>
            <ItemContainer>
                <img src={currentItem.image} alt="" />
                <div>
                    <CategoryWrapper>
                        <Link to="#">{ currentItem.category }</Link>
                    </CategoryWrapper>
                    <SubmitContainer>
                        <h3>{currentItem.price}$</h3>
                        <div>
                            { !isInStock && <p>Item is out of stock</p> }
                            <InputNumber disabled={!isInStock} min={1} max={currentItem.quantity} defaultValue={1} />
                            <PrimaryButton disabled={!isInStock}>Add to cart</PrimaryButton>
                        </div>
                        <br />
                        <Rate allowHalf disabled defaultValue={currentItem.rating} />
                    </SubmitContainer>
                </div>
            </ItemContainer>
            <DescriptionContainer>
                <h2>Description</h2>
                <Description>{ currentItem.text }</Description>
            </DescriptionContainer>
        </div>
    )
};

export default ItemPage;