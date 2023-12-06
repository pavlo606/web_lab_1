import React, { useEffect, useState } from "react";
import { Card, Rate } from "antd";
import { Footer, CatdItemWrapper } from "./CardItem.styled";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { downloadImage } from "../../API/api";

const MAX_TEXT_LEN = 200;

const { Meta } = Card;

const CardItem = ({ title = 'No title.', text = 'No text', imageSrc, price, id, rating }) => {
    const navigate = useNavigate();
    const [imageData, setImageData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        downloadImage(imageSrc, setImageData, setLoading);
    }, [imageSrc])

    return (
        <CatdItemWrapper>
            <Card
                hoverable
                style={{ width: 350, borderRadius: "20px" }}
                cover={
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        imageData && <img src={imageData} alt={imageSrc} />
                    )
                }
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