import React from "react";
import { Card } from "antd";
import { Footer, CatdItemWrapper } from "./CardItem.styled";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const { Meta } = Card;

const CardItem = ({ title = 'No title.', text, imageSrc, price }) => (
    <CatdItemWrapper>
        <Card
            hoverable
            style={{ width: 350, borderRadius: "20px" }}
            cover={
                <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
            }
        >
            <Meta title={title} description={text} />
            <Footer>
                <p>${price}</p>
                <PrimaryButton>Show More</PrimaryButton>
            </Footer>
        </Card>
    </CatdItemWrapper>
);

export default CardItem;