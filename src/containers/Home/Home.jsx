import React, { useEffect, useState } from "react";
import ArduinoImg from "../../icons/arduino_uno.jpg";
import { HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper } from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { ItemsBaseURL } from "../../API/api";
import axios from "axios";

let currentItemCount = 3;

function Home() {
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [buttonLabel, setButtonLabel] = useState("View more")

    useEffect(() => {
        axios.get(`${ItemsBaseURL}`, {
            params: {
                filter: "all",
                sort: "rating",
                reverse_sort: "true",
                search: "",
                limit: currentItemCount,
            }
        }).then((response) => {
            setItemsToDisplay(response.data);
        });
    }, [])

    const showMore = (e) => {
        e.preventDefault();
        // if (currentItemCount < data.length){
        //     currentItemCount += 3;
        // } else {
        //     currentItemCount = 3;
        // }
        // console.log(currentItemCount);
        // setItemsToDisplay(data
        //                 .sort((a,b) => b.rating - a.rating)
        //                 .slice(0, currentItemCount));
        // if (currentItemCount >= data.length) {
        //     setButtonLabel("View less");
        // } else {
        //     setButtonLabel("View more");
        // }
    }
    
    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <img src={ArduinoImg} alt=""/>
                <div>
                    <h2>What is Arduino</h2>
                    <p>Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users’ needs from students to makers and all the way to professional developers.</p>
                </div>
            </DesctriptionWrapper>
            <h2>Our best products</h2>
            <CardsWrapper>
                {itemsToDisplay.map(({ title, text, image, price, id, rating }) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        rating={rating}
                        id={id}
                        key={id}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <PrimaryButton onClick={showMore} size="large">{ buttonLabel }</PrimaryButton>
            </ButtonWrapper>
        </HomeWrapper>
    );
}

export default Home;
