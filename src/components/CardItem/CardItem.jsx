import React from "react";
import { Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../PrimaryButton/PrimaryButton";
import LoadImage from "../LoadImage/LoadImage";
import { Footer, CatdItemWrapper } from "./CardItem.styled";

const MAX_TEXT_LEN = 200;

const { Meta } = Card;

const CardItem = ({ title = 'No title.', text = 'No text', imageSrc, price, id, rating }) => {
    const navigate = useNavigate();

    return (
        <CatdItemWrapper>
            <Card
                hoverable
                style={{ width: 350, borderRadius: "20px" }}
                cover={ <LoadImage image={imageSrc} /> }
            >
                <Meta title={title} description={text.length > MAX_TEXT_LEN ? `${text.substring(0, MAX_TEXT_LEN)}...` : text} />
                <Rate disabled allowHalf defaultValue={rating} />
                <Footer>
                    <p>${price}</p>
                    <PrimaryButton onClick={() => navigate(`/item/${id}`)}>Show More</PrimaryButton>
                </Footer>
            </Card>
        </CatdItemWrapper>
    );
};

export default CardItem;